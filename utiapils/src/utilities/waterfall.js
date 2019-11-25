import chakram from 'chakram'
import { expect } from 'chai'
import fs from 'fs'
import path from 'path'
const assert = chakram.expect

function createWaterfall() {
  const clientId = '30'
  let waterfallId = ''
  const waterfallName =
    'API-Bot-' +
    Math.random()
      .toString(36)
      .substring(8)
  let currency = 'USD'
  let token = {}

  fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
    if (err) {
      console.log(err)
    } else {
      token = JSON.parse(data)
      let waterfallConfig = {
        headers: {
          'content-type': 'application/json',
          Cookie: 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession,
        },
        body: {
          type: 'waterfalls',
          data: {
            attributes: {
              clientId: clientId,
              currency: currency,
              name: waterfallName,
              status: 'In Progress',
              calculationMethod: 'TOTAL_RETURN',
            },
          },
        },
        strictSSL: false,
      }

      var json = JSON.stringify({})

      chakram.post(token.url + 'core/waterfalls', undefined, waterfallConfig).then(function(res) {
        assert(res).to.have.status(200)
        let responseBody = JSON.parse(JSON.stringify(res.body))
        expect(responseBody['data']['type']).to.deep.equal('waterfalls')
        waterfallId = responseBody['data']['id']
        expect(waterfallId).to.be.not.null
        console.log('NON-INVESTRAN WATERFALL Created :  ' + waterfallName + '  --  ' + waterfallId)
        // json = JSON.stringify({ url: token.url, jwt: token.jwt, smsession: token.smsession, waterfallId: waterfallId });
        // fs.writeFile('tokens.json', json, 'utf8');

        let tiersConfig = {
          headers: {
            'content-type': 'application/json',
            Cookie: 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession,
          },
          body: {
            type: 'tiers',
            data: {
              attributes: [
                {
                  waterfallId: waterfallId,
                  tierNum: 1,
                  tierPercentages: {},
                  tierProperties: {},
                  tierType: 'Return of Capital',
                },
                {
                  waterfallId: waterfallId,
                  tierNum: 2,
                  tierPercentages: {
                    preferredReturn: {
                      label: 'Default Preferred Return (% to LP)',
                      value: 0.08,
                    },
                  },
                  tierProperties: {
                    'Calculation Date Contributions': 'Effective Date',
                    'Calculation Date Distributions': 'Effective Date',
                    'Calculation Method': 'IRR',
                    'Compounding Basis': 'Anniversary Date',
                    'Compounding Calculation': 'Continuous Compounding',
                    'Compounding Frequency': 'Annually',
                    'Day-Count Method': 'Actual/365',
                  },
                  tierType: 'Preferred Return',
                },
                {
                  waterfallId: waterfallId,
                  tierNum: 3,
                  tierPercentages: {
                    catchUpAllocation: {
                      label: 'Default Catch Up Allocation (% to CIP)',
                      value: 0.8,
                    },
                    catchUpTarget: {
                      label: 'Default Catch Up Target (% to CIP)',
                      value: 0.2,
                    },
                  },
                  tierProperties: {},
                  tierType: 'Catch Up',
                },
                {
                  waterfallId: waterfallId,
                  tierNum: 4,
                  tierPercentages: {
                    finalSplit: {
                      label: 'Default Final Split Allocation (% to CIP)',
                      value: 0.2,
                    },
                  },
                  tierProperties: {},
                  tierType: 'Final Split',
                },
              ],
            },
          },
          strictSSL: false,
        }

        chakram.post(token.url + 'core/tiers' + waterfallId, undefined, tiersConfig).then(function(res) {
          assert(res).to.have.status(200)
        })

        let termsUploadConfig = {
          formData: {
            file: fs.createReadStream(path.join(__dirname, '/../../resources/investor_terms.xlsx')),
          },
          headers: {
            'content-type': 'multipart/form-data',
            clientId: clientId,
            waterfallId: waterfallId,
            Cookie: 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession,
          },
          strictSSL: false,
        }

        chakram.post(token.url + 'core/terms/upload', undefined, termsUploadConfig).then(function(res) {
          assert(res).to.have.status(201)
          let responseBody = JSON.parse(JSON.stringify(res.body))
          expect(responseBody['data']['type']).to.deep.equal('transactions')
          expect(responseBody['data']['attributes']).to.deep.equal('Investor Terms Values have been updated')
        })

        let submitForApprovalConfig = {
          headers: {
            'content-type': 'application/json',
            Cookie: 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession,
          },
          body: {
            type: 'waterfalls',
            data: {
              attributes: {
                clientId: clientId,
                waterfallId: waterfallId,
                currency: currency,
                name: waterfallName,
                createdBy: 'CNanda',
                status: 'Pending Approval',
                calculationMethod: 'TOTAL_RETURN',
                'aws:rep:deleting': false,
                'aws:rep:updateregion': 'eu-west-1',
              },
            },
          },
          strictSSL: false,
        }

        chakram.put(token.url + 'core/waterfalls', undefined, submitForApprovalConfig).then(function(res) {
          assert(res).to.have.status(200)
          let responseBody = JSON.parse(JSON.stringify(res.body))
          expect(responseBody['data']['type']).to.deep.equal('waterfalls')
          expect(responseBody['data']['id']).to.deep.equal(waterfallId)
        })
      })
    }
  })
  return waterfallId
}

function waitForElement() {
  if (typeof waterfallId === 'undefined') {
    setTimeout(waitForElement, 20000)
  } else {
    console.log(waterfallId)
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function demo() {
  console.log('Taking a break...')
  await sleep(15000)
  console.log('Two seconds later')
}

export default { createWaterfall, demo }
