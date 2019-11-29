const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;
const https = require('https');
let { isDev } = require('./utilities');
const prop = require('config-yml').load(process.env.NODE_ENV.toLowerCase());
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

async function nexaSuccess() {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  let config = {
    headers: {
      'api-key': `${isDev() ? 'WaterfallLambda1' : 'aiwnc-asodpcm-lasjde'}`,
      'Content-Type': 'application/json',
    },
    strictSSL: false,
    httpsAgent: agent,
  };

  await axios
    .post(`${prop.env.nexa}`, [{ Status: 'Pass', Message: 'OK' }], config)
    .then(
      response => {
        expect(response.status).to.equal(200);
        console.log('NEXA POST SUCCESSFUL - ' + response.status);
      },
      error => {
        console.log('NEXA Post Error --> ' + error.message, error.stack);
        throw error;
      }
    );
}

async function nexaFailure(error) {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  let config = {
    headers: {
      'api-key': `${isDev() ? 'WaterfallLambda1' : 'aiwnc-asodpcm-lasjde'}`,
      'Content-Type': 'application/json',
    },
    strictSSL: false,
    httpsAgent: agent,
  };

  await axios
    .post(
      `${prop.env.nexa}`,
      [{ Status: 'Failed', Message: `--> ${error}` }],
      config
    )
    .then(
      response => {
        expect(response.status).to.equal(200);
        console.log('NEXA POST SUCCESSFUL - ' + response.status);
      },
      error => {
        console.log('NEXA Post Error --> ' + error.message, error.stack);
      }
    );
}

module.exports = { nexaSuccess, nexaFailure };
