const axios = require('axios');
const https = require('https');
const { logger } = require('csg-cwf-shared-components').loggers;

const ca = `-----BEGIN CERTIFICATE-----
MIIDzTCCArWgAwIBAgIESBEzJzANBgkqhkiG9w0BAQsFADBSMRMwEQYKCZImiZPy
LGQBGRYDY29tMRUwEwYKCZImiZPyLGQBGRYFY2l0Y28xJDAiBgNVBAMTG0NpdGNv
IENlcnRpZmljYXRlIEF1dGhvcml0eTAeFw0xNDEwMDQxNzQ4MDdaFw0yOTEwMDQx
ODE4MDdaMFIxEzARBgoJkiaJk/IsZAEZFgNjb20xFTATBgoJkiaJk/IsZAEZFgVj
aXRjbzEkMCIGA1UEAxMbQ2l0Y28gQ2VydGlmaWNhdGUgQXV0aG9yaXR5MIIBIjAN
BgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxkVMJGWk9Hk+fKjT0mZFp7tNXglR
h5e+baYBDV10lRrKfGUe/1gtPaIkLDxie6dZSoHeRriuB34YR9q++P+i+Q93a2/V
rGqOzLu39im/23ZiyksWuBpHqmWhjMubPWSSQj0Jb9Qj7WpzK5SGNftT0DrQgjNN
nD/eNpt5qmesv6CfUsM1i7niVjUD6YkIIQAyl+Xic31GaWuLMKP+/WWSGO3Avsrp
EPAA7ft2r+4cKIMZwJCaYtTk1rR2gQCQXXZHYa0JTEbBk+7JtOHRtBgW3e/V2jP9
VWqIfaU+GzYpXFEOJwk4jubDxWz8Mny+qgscs86sCcmc6ssmB38nZyha5QIDAQAB
o4GqMIGnMCsGA1UdEAQkMCKADzIwMTQxMDA0MTc0ODA3WoEPMjAyOTEwMDQxODE4
MDdaMAsGA1UdDwQEAwIBBjAfBgNVHSMEGDAWgBTkhghzsArRuyOSKGaXMlwU1Gdl
kTAdBgNVHQ4EFgQU5IYIc7AK0bsjkihmlzJcFNRnZZEwDAYDVR0TBAUwAwEB/zAd
BgkqhkiG9n0HQQAEEDAOGwhWOC4xOjQuMAMCBJAwDQYJKoZIhvcNAQELBQADggEB
AFFggGdVyJgekkFl4Ox3vodHEFDsToyMgAKYh0gjaP5MuajOxtKLoYqzSWwAJrkl
49xiuXJODbqeXGkrwgk7fVXr58pWSJIFHcReKKcfY33vkemRhdeEEb+iZjSs6W5R
j2Kkg1VR5KFWJ60A2SbnmLJH7fYqXZXYLUSYnOvgR5S/NerCwUhImUOlagsMSM6F
SqPW8e2QxEFPfv+T/DghcwXrANSRTUCrG1Y+KI2Rq24PMbTY2kiV24XjkIfOHQWK
wJUrpxx4R/hGOjJ9hAAIRJtXrroOe3WybmoWMQcTaxMaMYJ0R99SCnBIeKAgg714
Y/qpTHSQGtC75wPkJleGt4E=
-----END CERTIFICATE-----
`

exports.handler = async (event) => {
  try {
    logger.debug(JSON.stringify(event))

    const { time, detail: { pipeline, stage, state } } = event;

    if (!stage || state !== 'FAILED') {
      return null;
    }

    const message = `:warning:** ${pipeline} ${state} ** _at ${stage} ${time}_  :warning:`
    const link = `https://eu-west-1.console.aws.amazon.com/codepipeline/home?region=eu-west-1#/view/${pipeline}`;


    await axios({
      method: 'post',
      httpsAgent: new https.Agent({ keepAlive: true, ca }),
      url: 'https://mattermostpoc.int.csgdev01.citcosvc.com/hooks/5tzc31ya4fnfdbe3jjodrtezre',
      data: { text: `[${message}](${link})` }
    });
  } catch (e) {
    logger.error("An error occurred in lambda: " + e);
  }
}
