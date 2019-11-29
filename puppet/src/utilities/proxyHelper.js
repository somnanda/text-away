require('dotenv').config();
const https = require('https');
// const AWS = require('aws-sdk');
const { httpsOverHttp } = require('tunnel');
const fs = require('fs');
const path = require('path');

const removeHttpsSlashes = url => {
  if (url && url.indexOf('https://') === 0) {
    return url.split('https://')[1];
  }

  return url;
};

const getBaseAndSubUrls = url =>
  removeHttpsSlashes(url)
    .split(/\/(.+)/)
    .filter(Boolean);

const cleanseBaseUrl = url => {
  let cleansed = url;
  if (cleansed.slice(-1) !== '/') {
    cleansed = `${cleansed}/`;
  }

  if (cleansed.charAt(0) === '/') {
    cleansed = cleansed.slice(1);
  }

  return cleansed;
};

const cleanseSubUrl = url => {
  let cleansed = url;
  if (cleansed.slice(-1) === '/') {
    cleansed = cleansed.slice(0, -1);
  }

  if (cleansed.charAt(0) !== '/') {
    cleansed = `/${cleansed}`;
  }

  return cleansed;
};

const cleanseUrl = url => {
  let cleansed = url;
  if (cleansed.charAt(0) === '/') {
    cleansed = cleansed.slice(1);
  }

  return cleansed;
};

const formUrl = ({ url, isLocalhost }) => {
  if (isLocalhost) {
    return url;
  }
  const port = isLocalhost ? '' : ':443';
  const [base, sub] = getBaseAndSubUrls(cleanseUrl(url));
  return `https://${base}${port}${sub ? `/${sub}` : ''}`;
};

const getProxyHost = config => config.host || process.env.PROXY_HOST || 'tor1mwg01.ad.ent.citco.com';
const getProxyPort = config => config.port || process.env.PROXY_PORT || 8080;
const getProxyAuth = config => config.proxyAuth || process.env.PROXY_AUTH;

const getHttpAgent = (config = {}) =>
  process.env.HTTPS_PROXY
    ? httpsOverHttp({
        proxy: {
          host: getProxyHost(config),
          port: getProxyPort(config),
          proxyAuth: getProxyAuth(config),
        },
        ca: [fs.readFileSync(path.resolve(__dirname, '../certs/citcoca.cer'))],
      })
    : new https.Agent({ rejectUnauthorized: false });

module.exports = {
  getProxyHost,
  getProxyAuth,
  getProxyPort,
  getHttpAgent,
  formUrl,
  removeHttpsSlashes,
  getBaseAndSubUrls,
  cleanseBaseUrl,
  cleanseSubUrl,
};
