const launchChrome = require('@serverless-chrome/lambda');
const request = require('superagent');

module.exports.getChrome = async () => {
  const chrome = await launchChrome({
    flags: [
      '--headless',
      '--ignore-certificate-errors',
      '--allow-running-insecure-content',
      '--disable-web-security',
      '--unsafely-treat-insecure-origin-as-secure',
    ],
  });

  const response = await request
    .get(`${chrome.url}/json/version`)
    .set('Content-Type', 'application/json');

  const endpoint = response.body.webSocketDebuggerUrl;

  return {
    endpoint,
    instance: chrome,
  };
};
