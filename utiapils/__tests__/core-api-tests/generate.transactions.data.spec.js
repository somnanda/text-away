import frisby from 'frisby';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import chakram from 'chakram';
const assert = chakram.expect;

describe('Upload Transactions Test for Legacy dataset', () => {

  const clientId = '28';
  let token = {};

  // it("Upload Investor Terms Data for Legacy dataset", (done) => {
  //   fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       token = JSON.parse(data);
  //       let config = {
  //         formData: {
  //           file: fs.createReadStream(path.join(__dirname, '/../../resources/new_investor_terms.xlsx'))
  //         },
  //         headers: {
  //           'content-type': 'multipart/form-data',
  //           'clientId': clientId,
  //           'waterfallId': token.seedwaterfallId,
  //           'investranDb': undefined,
  //           'investranDomainId': undefined,
  //           'waterfallReportingGroup': undefined,
  //           'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
  //         },
  //         strictSSL: false
  //       }

  //       chakram.post(token.url + 'core/terms/upload', undefined, config)
  //         .then(function (res) {
  //           console.log(res);
  //           assert(res).to.have.status(200);
  //           let responseBody = JSON.parse(JSON.stringify(res.body));
  //           expect(responseBody['data']['type']).to.deep.equal('terms');
  //           expect(responseBody['data']['attributes']).to.include('Values have been updated');
  //         })
  //       .done(done);
  //     }
  //   });
  // });

  it("Upload NAV Data for Legacy dataset", (done) => {
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        token = JSON.parse(data);
        let config = {
          formData: {
            file: fs.createReadStream(path.join(__dirname, '/../../resources/nav.xlsx'))
          },
          headers: {
            'content-type': 'multipart/form-data',
            'clientId': clientId,
            'waterfallId': token.seedwaterfallId,
            'clientName': 'QA',
            'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
          },
          strictSSL: false
        }

        chakram.post(token.url + 'core/transactions/upload/TR_NAV', undefined, config)
          .then(function (res) {
            assert(res).to.have.status(200);
            let responseBody = JSON.parse(JSON.stringify(res.body));
            expect(responseBody['data']['attributes']['waterfallId']).to.deep.equal(token.seedwaterfallId);
            expect(responseBody['data']['attributes']['bucketName']).to.deep.equal('TR_NAV');
          })
        .done(done);
      }
    });
  });

  it("Upload Contribution Data for Legacy dataset", (done) => {
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        token = JSON.parse(data);
        let config = {
          formData: {
            file: fs.createReadStream(path.join(__dirname, '/../../resources/contributions.xlsx'))
          },
          headers: {
            'content-type': 'multipart/form-data',
            'clientId': clientId,
            'waterfallId': token.seedwaterfallId,
            'clientName': 'QA',
            'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
          },
          strictSSL: false
        }

        chakram.post(token.url + 'core/transactions/upload/TR_CONT', undefined, config)
          .then(function (res) {
            assert(res).to.have.status(200);
            let responseBody = JSON.parse(JSON.stringify(res.body));
            expect(responseBody['data']['type']).to.deep.equal('transactions');
            expect(responseBody['data']['attributes']['waterfallId']).to.deep.equal(token.seedwaterfallId);
            expect(responseBody['data']['attributes']['bucketName']).to.deep.equal('TR_CONT');
          })
        .done(done);
      }
    });
  });

  it("Upload Distribution Data for Legacy dataset", (done) => {
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        token = JSON.parse(data);
        let config = {
          formData: {
            file: fs.createReadStream(path.join(__dirname, '/../../resources/distributions.xlsx'))
          },
          headers: {
            'content-type': 'multipart/form-data',
            'clientId': clientId,
            'waterfallId': token.seedwaterfallId,
            'clientName': 'QA',
            'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
          },
          strictSSL: false
        }

        chakram.post(token.url + 'core/transactions/upload/TR_DIST', undefined, config)
          .then(function (res) {
            assert(res).to.have.status(200);
            let responseBody = JSON.parse(JSON.stringify(res.body));
            expect(responseBody['data']['attributes']['waterfallId']).to.deep.equal(token.seedwaterfallId);
            expect(responseBody['data']['attributes']['bucketName']).to.deep.equal('TR_DIST');
          })
        .done(done);
      }
    });
  });

  it("Upload Prior_Carried_Interest Realized Data for Legacy dataset", (done) => {
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        token = JSON.parse(data);
        let config = {
          formData: {
            file: fs.createReadStream(path.join(__dirname, '/../../resources/prior_carry_realized.xlsx'))
          },
          headers: {
            'content-type': 'multipart/form-data',
            'clientId': clientId,
            'waterfallId': token.seedwaterfallId,
            'clientName': 'QA',
            'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
          },
          strictSSL: false
        }

        chakram.post(token.url + 'core/transactions/upload/TR_PC_REAL', undefined, config)
          .then(function (res) {
            assert(res).to.have.status(200);
            let responseBody = JSON.parse(JSON.stringify(res.body));
            expect(responseBody['data']['attributes']['waterfallId']).to.deep.equal(token.seedwaterfallId);
            expect(responseBody['data']['attributes']['bucketName']).to.deep.equal('TR_PC_REAL');
          })
        .done(done);
      }
    });
  });

  it("Upload Prior_Carried_Interest Unrealized Data for Legacy dataset", (done) => {
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        token = JSON.parse(data);
        let config = {
          formData: {
            file: fs.createReadStream(path.join(__dirname, '/../../resources/prior_carry_unrealized.xlsx'))
          },
          headers: {
            'content-type': 'multipart/form-data',
            'clientId': clientId,
            'waterfallId': token.seedwaterfallId,
            'clientName': 'QA',
            'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
          },
          strictSSL: false
        }

        chakram.post(token.url + 'core/transactions/upload/TR_PC_UNREAL', undefined, config)
          .then(function (res) {
            assert(res).to.have.status(200);
            let responseBody = JSON.parse(JSON.stringify(res.body));
            expect(responseBody['data']['attributes']['waterfallId']).to.deep.equal(token.seedwaterfallId);
            expect(responseBody['data']['attributes']['bucketName']).to.deep.equal('TR_PC_UNREAL');
          })
        .done(done);
      }
    });
  });
});
