const AWS = require('aws-sdk');
const { getHttpAgent } = require('./proxyHelper');

const getSecret = async secretName => {
  const region = process.env.AWS_REGION || process.env.REGION || 'eu-west-1';
  const endpoint = `https://secretsmanager.${region}.amazonaws.com`;
  const agent = getHttpAgent();
  const client = new AWS.SecretsManager({
    httpOptions: { agent },
    region,
    endpoint,
  });
  const SecretId = `${secretName}`;
  let secret;
  try {
    secret = await client.getSecretValue({ SecretId }).promise();
  } catch (e) {
    console.log(`Error when getting secret for ${SecretId}`);
    throw e;
  }
  return JSON.parse(secret.SecretString);
};

module.exports = { getSecret };
