import frisby from 'frisby';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import chakram from 'chakram';
const assert = chakram.expect;

describe('Get Transactions Test for Legacy dataset', () => {

  const clientId = '28';
  let token = {};

  // it('Get Nav for Legacy dataset', (done) => {
  //   process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  //   fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       token = JSON.parse(data);
  //       frisby.setup({
  //         request: {
  //           headers: {
  //             'Content-Type': 'application/json',
  //             'clientId': clientId,
  //             'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
  //           }
  //         }
  //       }).get(token.url + 'core/transactions/TR_NAV/' + token.seedwaterfallId, { strictSSL: false })
  //         .then((res) => {
  //           expect(res._response.status).to.be.equal(200);
  //           expect(res._json.data[0].id).to.be.not.null;
  //         })
  //         .done(done);
  //     }
  //   });
  // }, 3);

  it('Get Contribution for Legacy dataset', (done) => {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        token = JSON.parse(data);
        frisby.setup({
          request: {
            headers: {
              'Content-Type': 'application/json',
              'clientId': clientId,
              'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
            }
          }
        }).get(token.url + 'core/transactions/TR_CONT/' + token.seedwaterfallId, { strictSSL: false })
          .then((res) => {
            expect(res._response.status).to.be.equal(200);
            expect(res._json.data[0].id).to.be.not.null;
          })
          .done(done);
      }
    });
  }, 3);

  it('Get Distribution for Legacy dataset', (done) => {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        token = JSON.parse(data);
        frisby.setup({
          request: {
            headers: {
              'Content-Type': 'application/json',
              'clientId': clientId,
              'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
            }
          }
        }).get(token.url + 'core/transactions/TR_DIST/' + token.seedwaterfallId, { strictSSL: false })
          .then((res) => {
            expect(res._response.status).to.be.equal(200);
            expect(res._json.data[0].id).to.be.not.null;
          })
          .done(done);
      }
    });
  });

  it('Get Prior Carried Interest Realized for Legacy dataset', (done) => {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        token = JSON.parse(data);
        frisby.setup({
          request: {
            headers: {
              'Content-Type': 'application/json',
              'clientId': clientId,
              'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
            }
          }
        }).get(token.url + 'core/transactions/TR_PC_REAL/' + token.seedwaterfallId, { strictSSL: false })
          .then((res) => {
            expect(res._response.status).to.be.equal(200);
            expect(res._json.data[0].id).to.be.not.null;
          })
          .done(done);
      }
    });
  });

  it('Get Prior Carried Interest Unrealized for Legacy dataset', (done) => {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        token = JSON.parse(data);
        frisby.setup({
          request: {
            headers: {
              'Content-Type': 'application/json',
              'clientId': clientId,
              'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
            }
          }
        }).get(token.url + 'core/transactions/TR_PC_UNREAL/' + token.seedwaterfallId, { strictSSL: false })
          .then((res) => {
            expect(res._response.status).to.be.equal(200);
            expect(res._json.data[0].id).to.be.not.null;
          })
          .done(done);
      }
    });
  });
});
