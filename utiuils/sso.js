const axios = require('axios');
const qs = require('qs');
const cheerio = require('cheerio');
const { logger } = require('csg-cwf-shared-components').loggers;
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');

axiosCookieJarSupport(axios);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const getUrl = () => {
  let url;

  if (process.env.NODE_ENV === 'PRD' || process.env.NODE_ENV === 'PAL') {
    url =
      'https://sso.citco.com/affwebservices/public/saml2sso?SPID=apsprdsvc&RelayState=https%3A%2F%2Fe1.sso.prd.int.csgprod01.citcosoftware.com/entity-master/health';
  } else {
    url =
      'https://ssouat.citco.com/affwebservices/public/saml2sso?SPID=apsuatsvc&RelayState=https%3A%2F%2Fe1.sso.uat.int.csgtest01.citcosvc.com/entity-master/health';
  }
  return url;
};

const buildPayload = (dom, auth) => {
  const payload = {};

  const inputs = dom('input');
  inputs.each((i, elm) => {
    if (elm.attribs.name === 'USER') {
      payload[elm.attribs.name] = auth.username;
    } else if (elm.attribs.name === 'PASSWORD') {
      payload[elm.attribs.name] = auth.password;
    } else {
      payload[elm.attribs.name] = elm.attribs.value;
    }
  });
  return payload;
};

const getSubmitionUrl = dom => {
  let form;
  dom('form').each((i, elm) => {
    form = elm;
  });
  return form ? form.attribs.action : '';
};

const createLoginRequest = async auth => {
  let response;

  const options = { url: getUrl(), proxy: false };
  logger.debug(1.01);
  try {
    response = await axios(options);
    logger.debug(response);
  } catch (e) {
    logger.debug(`There was a failure issuing a request to the citco SSO url: ${options}`);
    throw e;
  }
  const dom = cheerio.load(response.data, { decodeEntities: false });
  const payload = buildPayload(dom, auth);
  const urlForFormSubmition = response.config.url;
  return { payload, urlForFormSubmition };
};

const verifySAMLFormSubmition = (response, cookieJar, options) => {
  const JWTCookie = cookieJar.toJSON().cookies.find(cookie => cookie.key === 'JWT');
  if (!JWTCookie) {
    let errorMessage = 'Failed to aquire a JWT. ';
    if (response.data.toString().match(/IDPLoginURL/)) {
      errorMessage +=
        'Siteminder tried to redirect to the login page. Please check siteminder logs for more information.';
    }

    logger.error(`Submition of the samlRequest has failed to produce the expected response.
            Request Details: \n\n 
                url: ${JSON.stringify(options.url)} \n
                cookies: ${response.request._headers.cookie} \n
                payload: ${JSON.stringify(options.data)} \n
            Response Details: \n\n ${response.data} \n\n
        `);

    throw new Error(errorMessage);
  }
};

const submitSAMLForm = async samlRequest => {
  const cookieJar = new tough.CookieJar();
  let response;
  const options = {
    method: 'POST',
    url: samlRequest.urlForFormSubmition,
    proxy: false,
    jar: cookieJar,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      cookie: `SMSESSION=${samlRequest.SMSESSION}; SMCHALLENGE=YES;`,
    },
    withCredentials: true,
    data: qs.stringify(samlRequest.payload),
  };

  try {
    response = await axios(options);
    verifySAMLFormSubmition(response, cookieJar, options);
  } catch (e) {
    logger.error(`Submition of the samlRequest has failed to produce the expected response.
        Request Details: \n\n ${JSON.stringify(options)} \n\n
        Response Details: \n\n ${response.data} \n\n
    `);
    throw e;
  }
  return cookieJar;
};

const validateSAMLResponse = (responsetext, cookieJar) => {
  // logger.error('verifying the response for Login Form submition');
  const SMSessionCookie = cookieJar.toJSON().cookies.find(cookie => cookie.key === 'SMSESSION');
  if (!SMSessionCookie) {
    throw new Error(`Siteminder did not return a SMSESSION cookie, please try again.`);
  }

  const dom = cheerio.load(responsetext);
  const SAMLResponse = dom('input[name=SAMLResponse]');
  // SAMLResponse shoud be a base64 encoded block. When it returns a url is means the operation did not work as expected
  if (!SAMLResponse.val()) {
    const errorMessage = dom('div[id=errorMessage]');
    throw new Error(
      `Siteminder returned the attribute errorMessage: ${errorMessage.html()}, probably meaning invalid Username and Password.`
    );
  }
};

const createSamlRequest = async (loginRequest, auth) => {
  logger.debug('createSamlRequest');
  const cookieJar = new tough.CookieJar();
  let response;
  const options = {
    method: 'POST',
    url: loginRequest.urlForFormSubmition,
    proxy: false,
    jar: cookieJar,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: true,
    data: qs.stringify(loginRequest.payload),
  };

  try {
    response = await axios(options);
  } catch (e) {
    logger.error(`Error trying to POST: ${JSON.stringify(options)}`);
    throw e;
  }
  validateSAMLResponse(response.data, cookieJar);
  const dom = cheerio.load(response.data, { decodeEntities: false });
  const SMSESSION = cookieJar.toJSON().cookies.find(cookie => cookie.key === 'SMSESSION').value;
  const payload = buildPayload(dom, auth);
  const urlForFormSubmition = getSubmitionUrl(dom);

  return { payload, urlForFormSubmition, SMSESSION };
};

const findJWTCookie = cookieJar => {
  const { cookies } = cookieJar.toJSON();
  const JWT = cookies.filter(cookie => cookie.key === 'JWT' || cookie.key === 'SMSESSION' );
  if (!JWT) {
    throw new Error(`No JWT cookie could be found in the cookieJar: ${JSON.stringify(cookieJar.toJSON())}`);
  }
  return JWT;
};

const getJWT = async auth => {
  try {
    const loginRequest = await createLoginRequest(auth);
    const samlRequest = await createSamlRequest(loginRequest, auth);
    const cookieJar = await submitSAMLForm(samlRequest);
    const JWT = findJWTCookie(cookieJar);
    logger.debug(JWT);
    return JWT;
  } catch (e) {
    throw e;
  }
};



module.exports = { getJWT };
