import { expect } from 'chai';
import fs from 'fs';
import chakram from 'chakram';
const assert = chakram.expect;
import _ from 'lodash';
import response from '../../src/utilities/investran.linked.deal.by.deal.response';

describe('Investran Linked - Events Calculation Test for Deal By Deal', () => {

  const clientId = '28';
  const clientName = 'QA';
  const waterfallId = '3a7b4913-346c-416d-8c27-a37ba7b3567a';
  const waterfallName = 'Automation-InvestranDbyD';
  let cdEventName = Math.random().toString(36).substring(8);
  let udEventName = Math.random().toString(36).substring(8);
  const eventDate = '31 Oct 2018';
  const waterfallType = 'DEAL_BY_DEAL';
  let token = {};
  let cdid = '';
  let udid = '';

  it("Investran Linked - Deal By Deal Cash Distribution Event Calculation", (done) => {

    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        token = JSON.parse(data);
        let config = {
          headers: {
            'content-type': 'application/json',
            'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
          },
          body: {
            type: 'events',
            data: {
              attributes: {
                checkDate: false,
                clientId: clientId,
                clientName: clientName,
                eventDate: eventDate,
                eventName: cdEventName,
                eventType: 'Cash Distribution',
                scenarioDistribution: false,
                waterfallId: waterfallId,
                waterfallName: waterfallName,
                waterfallType: waterfallType
              }
            }
          },
          strictSSL: false
        }

        chakram.post(token.url + "core/events", undefined, config)
          .then(function (res) {
            assert(res).to.have.status(201);
            let responseBody = JSON.parse(JSON.stringify(res.body));
            expect(responseBody['data']['type']).to.deep.equal('events');
            cdid = responseBody['data']['attributes']['event']['eventId'];
            expect(cdid).to.be.not.null;
            let cdEventsConfig = {
              headers: {
                'content-type': 'application/json',
                'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
              },
              body: {
                type: 'eventResult',
                data: {
                  attributes: {
                    checkDate: false,
                    clientId: clientId,
                    clientName: clientName,
                    eventDate: eventDate,
                    eventName: cdEventName,
                    eventType: 'Cash Distribution',
                    scenarioDistribution: false,
                    waterfallId: waterfallId,
                    waterfallName: waterfallName,
                    waterfallType: waterfallType,
                    eventId: cdid
                  }
                }
              },
              strictSSL: false
            }
            return chakram.post(token.url + `core/events/result`, undefined, cdEventsConfig)
          })
          .then(function (res) {
            assert(res).to.have.status(201);
            let responseBody = JSON.parse(JSON.stringify(res.body));
            let eventId = responseBody['data']['id'];
            expect(responseBody['data']['attributes']['eventName']).to.deep.equal(cdEventName);
            expect(responseBody['data']['attributes']['waterfallId']).to.deep.equal(waterfallId);
            expect(responseBody['data']['attributes']['waterfallName']).to.deep.equal(waterfallName);
            expect(responseBody['data']['attributes']['eventDate']).to.deep.equal(eventDate);
            expect(responseBody['data']['attributes']['waterfallType']).to.deep.equal(waterfallType);
            expect(responseBody['data']['attributes']['clientId']).to.deep.equal(clientId);
            expect(responseBody['data']['attributes']['clientName']).to.deep.equal(clientName);
            expect(responseBody['data']['attributes']['eventType']).to.deep.equal('Cash Distribution');
            // let haystack = responseBody['data']['attributes']['eventResultDetails'];
            // let needle = response.cdDealByDeal(eventId);
            // expect(_.isMatch(haystack, needle)).to.be.true;
          }).done(done);
      }
    });
  });

  it("Investran Linked - Deal By Deal Unrealized Distribution Event Calculation", (done) => {

    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        token = JSON.parse(data);
        let config = {
          headers: {
            'content-type': 'application/json',
            'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
          },
          body: {
            type: "events",
            data: {
              attributes: {
                clientId: clientId,
                clientName: clientName,
                eventDate: eventDate,
                eventName: udEventName,
                eventType: "Unrealized Distribution",
                scenarioDistribution: false,
                waterfallId: waterfallId,
                waterfallName: waterfallName,
                checkDate: false,
                waterfallType: waterfallType
              }
            }
          },
          strictSSL: false
        }

        chakram.post(token.url + "core/events", undefined, config)
          .then(function (res) {
            assert(res).to.have.status(201);
            let responseBody = JSON.parse(JSON.stringify(res.body));
            udid = responseBody['data']['attributes']['event']['eventId'];
            expect(udid).to.be.not.null;
            let udEventsConfig = {
              headers: {
                'content-type': 'application/json',
                'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
              },
              body: {
                type: "eventResult",
                data: {
                  attributes: {
                    clientId: clientId,
                    clientName: clientName,
                    eventDate: eventDate,
                    eventName: udEventName,
                    eventType: "Unrealized Distribution",
                    scenarioDistribution: false,
                    waterfallId: waterfallId,
                    waterfallName: waterfallName,
                    checkDate: false,
                    waterfallType: waterfallType,
                    eventId: udid
                  }
                }
              },
              strictSSL: false
            }
            return chakram.post(token.url + `core/events/result`, undefined, udEventsConfig)
          })
          .then(function (res) {
            assert(res).to.have.status(201);
            let responseBody = JSON.parse(JSON.stringify(res.body));
            let eventId = responseBody['data']['id'];
            expect(eventId).to.deep.equal(udid);
            expect(responseBody['data']['attributes']['eventName']).to.deep.equal(udEventName);
            expect(responseBody['data']['attributes']['waterfallId']).to.deep.equal(waterfallId);
            expect(responseBody['data']['attributes']['waterfallName']).to.deep.equal(waterfallName);
            expect(responseBody['data']['attributes']['eventDate']).to.deep.equal(eventDate);
            expect(responseBody['data']['attributes']['waterfallType']).to.deep.equal(waterfallType);
            expect(responseBody['data']['attributes']['clientId']).to.deep.equal(clientId);
            expect(responseBody['data']['attributes']['clientName']).to.deep.equal(clientName);
            expect(responseBody['data']['attributes']['eventType']).to.deep.equal('Unrealized Distribution');
            // let haystack = responseBody['data']['attributes']['eventResultDetails'];
            // let needle = response.udDealByDeal(eventId);
            // expect(_.isMatch(haystack, needle)).to.be.true;
          }).done(done);
      }
    });
  });
});
