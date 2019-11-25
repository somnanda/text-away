import { expect } from 'chai'
import fs from 'fs'
import chakram from 'chakram'
const assert = chakram.expect
import _ from 'lodash'
import { cdCustomResponse, udCustomResponse } from '../../src/utilities/custom.response'

describe('Custom Events Calculation Test', () => {
  const clientId = '28'
  const clientName = 'QA'
  const waterfallId = '73863370-d99c-4425-9f9b-6dabff70b255'
  const waterfallName = 'Automation-Custom'
  let cdEventName = Math.random()
    .toString(36)
    .substring(8)
  let udEventName = Math.random()
    .toString(36)
    .substring(8)
  const eventDate = '30 Jun 2019'
  const waterfallType = 'TOTAL_RETURN'
  let token = {}
  let cdid = ''
  let udid = ''

  it('Custom Cash Distribution Event Calculation', done => {
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err)
      } else {
        token = JSON.parse(data)
        let config = {
          headers: {
            'content-type': 'application/json',
            Cookie: 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession,
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
                waterfallType: waterfallType,
              },
            },
          },
          strictSSL: false,
        }

        chakram
          .post(token.url + 'core/events', undefined, config)
          .then(function(res) {
            assert(res).to.have.status(201)
            let responseBody = JSON.parse(JSON.stringify(res.body))
            expect(responseBody['data']['type']).to.deep.equal('events')
            cdid = responseBody['data']['attributes']['event']['eventId']
            expect(cdid).to.be.not.null
            let cdEventsConfig = {
              headers: {
                'content-type': 'application/json',
                Cookie: 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession,
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
                    eventId: cdid,
                  },
                },
              },
              strictSSL: false,
            }
            return chakram.post(token.url + `core/events/result`, undefined, cdEventsConfig)
          })
          .then(function(res) {
            assert(res).to.have.status(201)
            let responseBody = JSON.parse(JSON.stringify(res.body))
            let eventId = responseBody['data']['id']
            expect(eventId).to.deep.equal(cdid)
            expect(responseBody['data']['attributes']['eventName']).to.deep.equal(cdEventName)
            expect(responseBody['data']['attributes']['waterfallId']).to.deep.equal(waterfallId)
            expect(responseBody['data']['attributes']['waterfallName']).to.deep.equal(waterfallName)
            expect(responseBody['data']['attributes']['eventDate']).to.deep.equal(eventDate)
            expect(responseBody['data']['attributes']['waterfallType']).to.deep.equal(waterfallType)
            expect(responseBody['data']['attributes']['clientId']).to.deep.equal(clientId)
            expect(responseBody['data']['attributes']['clientName']).to.deep.equal(clientName)
            expect(responseBody['data']['attributes']['eventType']).to.deep.equal('Cash Distribution')
          })
        setTimeout(() => {
          done()
        }, 45 * 1000)
      }
    })
  })

  it('Custom Cash Distribution Result Check', done => {
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err)
      } else {
        token = JSON.parse(data)

        let eventResultConfig = {
          headers: {
            'content-type': 'application/json',
            Cookie: 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession,
            waterfallId: waterfallId,
          },
          strictSSL: false,
        }

        chakram
          .get(token.url + `core/events/resultDetails/${cdid}/1`, eventResultConfig)
          .then(function(res) {
            assert(res).to.have.status(200)
            let responseBody = JSON.parse(JSON.stringify(res.body))
            let haystack = responseBody['data']
            let eventIdFromResponse = cdid + '_1'
            let needle = cdCustomResponse(eventIdFromResponse)
            expect(_.isMatch(haystack, needle)).to.be.true
          })
          .done(done)
      }
    })
  })

  it('Custom Unrealized Distribution Event Calculation', done => {
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err)
      } else {
        token = JSON.parse(data)
        let config = {
          headers: {
            'content-type': 'application/json',
            Cookie: 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession,
          },
          body: {
            type: 'events',
            data: {
              attributes: {
                clientId: clientId,
                clientName: clientName,
                eventDate: eventDate,
                eventName: udEventName,
                eventType: 'Unrealized Distribution',
                scenarioDistribution: false,
                waterfallId: waterfallId,
                waterfallName: waterfallName,
                checkDate: false,
                waterfallType: waterfallType,
              },
            },
          },
          strictSSL: false,
        }

        chakram
          .post(token.url + 'core/events', undefined, config)
          .then(function(res) {
            assert(res).to.have.status(201)
            let responseBody = JSON.parse(JSON.stringify(res.body))
            udid = responseBody['data']['attributes']['event']['eventId']
            expect(udid).to.be.not.null
            let udEventsConfig = {
              headers: {
                'content-type': 'application/json',
                Cookie: 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession,
              },
              body: {
                type: 'eventResult',
                data: {
                  attributes: {
                    clientId: clientId,
                    clientName: clientName,
                    eventDate: eventDate,
                    eventName: udEventName,
                    eventType: 'Unrealized Distribution',
                    scenarioDistribution: false,
                    waterfallId: waterfallId,
                    waterfallName: waterfallName,
                    checkDate: false,
                    waterfallType: waterfallType,
                    eventId: udid,
                  },
                },
              },
              strictSSL: false,
            }
            return chakram.post(token.url + `core/events/result`, undefined, udEventsConfig)
          })
          .then(function(res) {
            assert(res).to.have.status(201)
            let responseBody = JSON.parse(JSON.stringify(res.body))
            let eventId = responseBody['data']['id']
            expect(eventId).to.deep.equal(udid)
            expect(responseBody['data']['attributes']['eventName']).to.deep.equal(udEventName)
            expect(responseBody['data']['attributes']['waterfallId']).to.deep.equal(waterfallId)
            expect(responseBody['data']['attributes']['waterfallName']).to.deep.equal(waterfallName)
            expect(responseBody['data']['attributes']['eventDate']).to.deep.equal(eventDate)
            expect(responseBody['data']['attributes']['waterfallType']).to.deep.equal(waterfallType)
            expect(responseBody['data']['attributes']['clientId']).to.deep.equal(clientId)
            expect(responseBody['data']['attributes']['clientName']).to.deep.equal(clientName)
            expect(responseBody['data']['attributes']['eventType']).to.deep.equal('Unrealized Distribution')
          })
          .done(done)
      }
    })
  })
})
