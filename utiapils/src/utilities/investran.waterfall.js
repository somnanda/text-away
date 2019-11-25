import chakram from 'chakram';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
const assert = chakram.expect;
const investran_terms = require('../../investran_terms.json');

function createWaterfall() {

    const clientId = '30';
    let waterfallId = '';
    const waterfallName = 'API-Bot-' + Math.random().toString(36).substring(8);
    let currency = 'USD';
    let token = {};

    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            token = JSON.parse(data);
            let waterfallConfig = {
                headers: {
                    'content-type': 'application/json',
                    'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
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
                            reportingGroupUDF: 'Algebris - NPL'
                        }
                    }
                },
                strictSSL: false
            }

            var json = JSON.stringify({});

            chakram.post(token.url + "core/waterfalls", undefined, waterfallConfig)
                .then(function (res) {
                    assert(res).to.have.status(200);
                    let responseBody = JSON.parse(JSON.stringify(res.body));
                    expect(responseBody['data']['type']).to.deep.equal('waterfalls');
                    waterfallId = responseBody['data']['id'];
                    expect(waterfallId).to.be.not.null;
                    console.log('INVESTRAN WATERFALL CREATED :  ' + waterfallName + "  --  " + waterfallId);
                    // json = JSON.stringify({ url: token.url, jwt: token.jwt, smsession: token.smsession, waterfallId: token.waterfallId, investran_waterfallId: waterfallId });
                    // fs.writeFile('tokens.json', json, 'utf8');

                    let tiersConfig = {
                        headers: {
                            'content-type': 'application/json',
                            'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
                        },
                        body: {
                            type: 'tiers',
                            data: {
                                attributes: [{
                                    waterfallId: waterfallId,
                                    tierNum: 1,
                                    tierPercentages: {},
                                    tierProperties: {},
                                    tierType: 'Return of Capital'
                                }, {
                                    waterfallId: waterfallId,
                                    tierNum: 2,
                                    tierPercentages: {
                                        preferredReturn: {
                                            label: 'Default Preferred Return (% to LP)',
                                            value: 0.01
                                        }
                                    },
                                    tierProperties: {
                                        "Calculation Date Contributions": "Effective Date",
                                        "Calculation Date Distributions": "Effective Date",
                                        "Calculation Method": "IRR",
                                        "Compounding Basis": "Anniversary Date",
                                        "Compounding Calculation": "Continuous Compounding",
                                        "Compounding Frequency": "Annually",
                                        "Day-Count Method": "Actual/365"
                                    },
                                    tierType: 'Preferred Return'
                                }, {
                                    waterfallId: waterfallId,
                                    tierNum: 3,
                                    tierPercentages: {
                                        catchUpAllocation: {
                                            label: 'Default Catch Up Allocation (% to CIP)',
                                            value: 0.01
                                        },
                                        catchUpTarget: {
                                            label: 'Default Catch Up Target (% to CIP)',
                                            value: 0.01
                                        }
                                    },
                                    tierProperties: {},
                                    tierType: 'Catch Up'
                                }, {
                                    waterfallId: waterfallId,
                                    tierNum: 4,
                                    tierPercentages: {
                                        finalSplit: {
                                            label: 'Default Final Split Allocation (% to CIP)',
                                            value: 0.01
                                        }
                                    },
                                    tierProperties: {},
                                    tierType: 'Final Split'
                                }]
                            }
                        },
                        strictSSL: false
                    }

                    chakram.post(token.url + "core/tiers/" + waterfallId, undefined, tiersConfig)
                        .then(function (res) {
                            assert(res).to.have.status(200);
                        });

                    let termsConfig = {
                        headers: {
                            'content-type': 'application/json',
                            'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
                        },
                        body: investran_terms,
                        strictSSL: false
                    }

                    chakram.post(token.url + 'core/buckets/' + waterfallId, undefined, termsConfig)
                        .then(function (res) {
                            assert(res).to.have.status(200);
                            let responseBody = JSON.parse(JSON.stringify(res.body));
                            expect(responseBody['data'][0]['type']).to.deep.equal('buckets');
                            // expect(responseBody['data']['attributes']).to.deep.equal('Investor Terms Values have been updated');
                        });

                    // TERMS SYNC

                    let invtermsConfig = {
                        headers: {
                            'content-type': 'application/json',
                            'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
                        },
                        strictSSL: false
                    }
                    // https://waterfall.dev.int.csgdev01.citcosvc.com/core/terms/sync/042ce31c-cf2d-4b14-a266-1079136c8004?user=CNanda&investranDb=INVPRD&investranDomainId=240&waterfallId=042ce31c-cf2d-4b14-a266-1079136c8004&waterfallReportingGroup=Algebris+-+NPL
                    chakram.get(token.url + `core/terms/sync/${waterfallId}?user=CNanda&investranDb=INVPRD&investranDomainId=240&waterfallId=${waterfallId}&waterfallReportingGroup=Algebris+-+NPL`, invtermsConfig)
                        .then(function (res) {
                            assert(res).to.have.status(200);
                            let responseBody = JSON.parse(JSON.stringify(res.body));
                            // console.log(responseBody);
                            expect(responseBody['data']['type']).to.deep.equal('terms');
                        });

                    // CORE SYNC

                    chakram.get(token.url + `core/syncs/${waterfallId}`, invtermsConfig)
                        .then(function (res) {
                            assert(res).to.have.status(200);
                            let responseBody = JSON.parse(JSON.stringify(res.body));
                            console.log(responseBody['data'][0]['attributes']['status']);
                            expect(responseBody['data'][0]['type']).to.deep.equal('syncs');
                        });


                    let submitForApprovalConfig = {
                        headers: {
                            'content-type': 'application/json',
                            'Cookie': 'JWT=' + token.jwt + '; SMSESSION=' + token.smsession
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
                                    reportingGroupUDF: 'Algebris - NPL',
                                    status: 'Pending Approval',
                                    calculationMethod: 'TOTAL_RETURN',
                                    'aws:rep:deleting': false,
                                    'aws:rep:updateregion': 'eu-west-1'
                                }
                            }
                        },
                        strictSSL: false
                    }

                    chakram.put(token.url + "core/waterfalls", undefined, submitForApprovalConfig)
                        .then(function (res) {
                            assert(res).to.have.status(200);
                            let responseBody = JSON.parse(JSON.stringify(res.body));
                            console.log(responseBody);
                            expect(responseBody['data']['type']).to.deep.equal('waterfalls');
                            expect(responseBody['data']['id']).to.deep.equal(waterfallId);
                        });
                });
        }
    });
    return waterfallId;
}

function sleeper(ms) {
    return function (x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}

function waitForElement() {
    if (typeof waterfallId === "undefined") {
        setTimeout(waitForElement, 20000);
    }
    else {
        console.log(waterfallId);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log('Taking a break...');
    await sleep(15000);
    console.log('Two seconds later');
}

export default { createWaterfall, demo };
