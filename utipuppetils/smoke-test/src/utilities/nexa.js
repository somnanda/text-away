const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;
let { isDev } = require('./utilities');
const prop = require('config-yml').load(process.env.NODE_ENV.toLowerCase());

async function nexaSuccess() {
  let config = {
    headers: {
      'api-key': `${isDev() ? 'WaterfallLambda1' : 'aiwnc-asodpcm-lasjde'}`,
      'Content-Type': 'application/json',
    },
    strictSSL: false,
  };

  await axios.post(`${prop.env.nexa}`, [{ Status: 'Pass', Message: 'OK' }], config).then(
    response => {
      expect(response.status).to.equal(200);
    },
    error => {
      console.log('NEXA Post Error --> ' + error.response);
    }
  );
}

async function nexaFailure(error) {
  let config = {
    headers: {
      'api-key': `${isDev() ? 'WaterfallLambda1' : 'aiwnc-asodpcm-lasjde'}`,
      'Content-Type': 'application/json',
    },
    strictSSL: false,
  };

  await axios.post(`${prop.env.nexa}`, [{ Status: 'Failed', Message: `--> ${error}` }], config).then(
    response => {
      expect(response.status).to.equal(200);
    },
    error => {
      console.log('NEXA Post Error --> ' + error.response);
    }
  );
}

module.exports = { nexaSuccess, nexaFailure };
