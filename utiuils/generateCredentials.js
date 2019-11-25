const { logger } = require('csg-cwf-shared-components').loggers;
const { getJWT } = require('./sso');
var fs = require('fs');
const yaml = require('js-yaml');

var tokens = [];

getJWT({ username: 'cwf_dev_deladmin', password: 'Xjj4@DLQp2' })
  .then(jwt => {
    const config = yaml.safeLoad(fs.readFileSync('./resources/config.yaml', 'utf8'));
    for (var i = 0; i < jwt.length; i++) {
      var object = jwt[i];
      for (var property in object) {
        if (property === 'value') {
          tokens.push(object[property]);
        }
      }
    }
    if (process.argv[process.argv.length - 1] === 'qad') {
      process.env.API_URL = config.url.qad;
      console.log('Running Tests in QAD');
    } else if (process.argv[process.argv.length - 1] === 'qat') {
      process.env.API_URL = config.url.qat;
      console.log('Running Tests in QAT');
    } else if (process.argv[process.argv.length - 1] === 'uat') {
      process.env.API_URL = config.url.uat;
      console.log('Running Tests in UAT');
    } else if (process.argv[process.argv.length - 1] === 'dev2') {
      process.env.API_URL = config.url.dev2;
      console.log('Running Tests in DEV2');
    } else if (process.argv[process.argv.length - 1] === 'dev3') {
      process.env.API_URL = config.url.dev3;
      console.log('Running Tests in DEV3');
    } else if (process.argv[process.argv.length - 1] === 'dev4') {
      process.env.API_URL = config.url.dev4;
      console.log('Running Tests in DEV4');
    } else if (process.argv[process.argv.length - 1] === 'dev5') {
      process.env.API_URL = config.url.dev5;
      console.log('Running Tests in DEV5');
    } else if (process.argv[process.argv.length - 1] === 'dev6') {
      process.env.API_URL = config.url.dev6;
      console.log('Running Tests in DEV6');
    } else if (process.argv[process.argv.length - 1] === 'dev7') {
      process.env.API_URL = config.url.dev7;
      console.log('Running Tests in DEV7');
    } else {
      process.env.API_URL = config.url.dev;
      console.log('Running Tests in DEV');
    }
    var json = JSON.stringify({ smsession: tokens[0], jwt: tokens[1], url: process.env.API_URL });
    fs.writeFile('tokens.json', json, 'utf8');
  })
  .catch(e => logger.error(e));
