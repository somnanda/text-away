require('dotenv').config({ path: `.env` });
const chromium = require('chrome-aws-lambda');
const { getSecret } = require('./src/utilities/secrets');
const config = require('config-yml').load(process.env.NODE_ENV.toLowerCase());
const { errorEmailHandler } = require('./src/utilities/email');
const { nexaFailure, nexaSuccess } = require('./src/utilities/nexa');
const { LoginError, customError, ClientSelectionError } = require('./src/utilities/errors');

exports.handler = async (event, context) => {
  let result = null;
  let browser = null;
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    });
    console.log('###### INITIATING SMOKE TEST: ' + process.env.NODE_ENV + ' ######');
    let user = '';
    let pwd = '';
    if (process.env.NODE_ENV == 'PRD') {
      const { UserName, Password } = await getSecret(config.env.vault);
      user = UserName;
      pwd = Password;
    } else {
      const { username, password } = await getSecret(config.env.vault);
      user = username;
      pwd = password;
    }
    let page = await browser.newPage();
    try {
      await page.goto(event.url || config.env.url);
      const pageList = await browser.pages();
      await page.waitForSelector('#smLogin');
      await page.type('#userName', user);
      await page.type('#password', pwd);
      await page.on('response', response => {
        if (![200, 201, 204, 205, 206, 302].includes(response.status())) {
          console.log('HTTP URL: ' + response.url());
          console.log('HTTP Status: ' + response.status());
        }
      });

      await page.click('#smLogin');
      await page.waitForSelector('#client-selector');
    } catch (error) {
      throw new LoginError(error);
    }
    await page.click('#client-selector');
    try {
      if (process.env.NODE_ENV == 'PRD') {
        await page.waitForSelector('#dropdown-options #QA\\ VERIFICATION\\ 1');
        await page.click('#dropdown-options #QA\\ VERIFICATION\\ 1');
        await page.waitForSelector('#admin').then(() => console.log('###### SMOKE TEST SUCCESSFULL ######'));
      } else {
        await page.waitForSelector('#dropdown-options #QA');
        await page.click('#dropdown-options #QA');
        await page
          .waitForSelector('#add-waterfall-button')
          .then(() => console.log('###### SMOKE TEST SUCCESSFULL ######'));
        await page.click('#add-waterfall-button');
      }
    } catch (error) {
      throw new ClientSelectionError(error);
    }
  } catch (error) {
    console.log('/////////// ERROR STACK ///////////// --> ' + JSON.stringify(customError(error)));
    nexaFailure(error);
    errorEmailHandler(error);
    throw JSON.stringify(customError(error));
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
  nexaSuccess();
  return context.succeed('###### SMOKE TEST COMPLETED ######');
};
