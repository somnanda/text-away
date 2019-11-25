import * as XLSX from 'xlsx';
import Transaction from '../../src/models/transaction';
import InvestorData from '../../src/models/investordata';
import InvestorTermsData from '../../src/models/termsdata';
import { format } from 'util';
const fs = require('fs')
import _ from 'lodash';
import customResults from '../models/custom.totalreturn.response';
import dbydResults from '../models/irr.dbyd.response';

/*
USAGE:
    import util from '../../../src/utils/utilities';
    const filename = "./resources/investors.xlsx";
    const data = [
        { investorId: 'Inv-1', investorName: 'Dwayne' }
    ]
    const ws_name = "Sheet1";
    util.writeFile(filename, data, ws_name);
    var d = util.readFile(filename);
    console.log(d);

*/

function writeFile(filename, filedata, sheetname) {
    if (sheetname !== undefined) {
        var ws_name = sheetname;
    } else {
        ws_name = "Sheet1";
    }
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(filedata);
    XLSX.utils.book_append_sheet(wb, ws, ws_name);
    XLSX.writeFile(wb, filename);
}

function readFile(filename) {
    const workbook = XLSX.readFile(filename);
    const sheet_name_list = workbook.SheetNames;
    const filedata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    return filedata;
}

function startDocker() {
    var shell = require('shelljs');
    shell.exec(`sudo docker run -d -p 4444:4444 -v /var/lib/jenkins/file-downloads:/tmp selenium/standalone-firefox`).stdout;
    shell.exec(`sudo docker ps`).stdout;
}

function stopDocker() {
    var shell = require('shelljs');
    shell.exec(`sudo docker stop $(sudo docker ps -a -q)`).stdout;
    shell.exec(`sleep 10`).stdout;
    shell.exec(`sudo docker rm $(sudo docker ps -a -q)`).stdout;
    shell.exec(`sudo docker ps`).stdout;
}

function readXLSXFile(filename) {
    browser.waitUntil(() => {
        return fs.existsSync(`/var/lib/jenkins/file-downloads/${filename}-31 Oct 2018-1.xlsx`);
    }, 30000, 'File did not finish downloading...');
    var shell = require('shelljs');
    const workbook = XLSX.readFile(`/var/lib/jenkins/file-downloads/${filename}-31 Oct 2018-1.xlsx`);

    ////////////////////////////////////////////////////
    // For running locally use wdio.local.conf.js file
    ////////////////////////////////////////////////////

    // Uncomment below to run locally.
    // const workbook = XLSX.readFile(`C:\\Users\\Default\\Downloads\\${filename}-31 Oct 2018-1.xlsx`);
    const sheet_name_list = workbook.SheetNames;
    const filedata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);
    return filedata;
}

function readXLSXFileForPreferredReturnSheet(filename) {
    browser.waitUntil(() => {
        return fs.existsSync(`/var/lib/jenkins/file-downloads/${filename}-31 Oct 2018-1.xlsx`);
    }, 30000, 'File did not finish downloading...');
    var shell = require('shelljs');
    const workbook = XLSX.readFile(`/var/lib/jenkins/file-downloads/${filename}-31 Oct 2018-1.xlsx`);

    ////////////////////////////////////////////////////
    // For running locally use wdio.local.conf.js file
    ////////////////////////////////////////////////////

    // Uncomment below to run locally.
    // const workbook = XLSX.readFile(`C:\\Users\\Default\\Downloads\\${filename}-31 Oct 2018-1.xlsx`);
    const sheet_name_list = workbook.SheetNames;
    const filedata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[4]]);
    return filedata;
}

function readXLSXFileForEventResult(filename) {
    var shell = require('shelljs');
    const workbook = XLSX.readFile(`/var/lib/jenkins/file-downloads/${filename}-31 Oct 2018-1.xlsx`);
    const sheet_name_list = workbook.SheetNames;
    const filedata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);
    return filedata;
}

function readXLSXFileForCalculationDetails(filename) {
    var shell = require('shelljs');
    const workbook = XLSX.readFile(`/var/lib/jenkins/file-downloads/${filename}-31 Oct 2018-1.xlsx`);
    const sheet_name_list = workbook.SheetNames;
    const filedata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[2]]);
    return filedata;
}

function readXLSXFileForCalculationDetailsTotalReturn(filename) {
    var shell = require('shelljs');
    const workbook = XLSX.readFile(`/var/lib/jenkins/file-downloads/${filename}-31 Aug 2018-1.xlsx`);
    const sheet_name_list = workbook.SheetNames;
    const filedata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[2]]);
    return filedata;
}

function readXLSXFileForAggregateExpense(filename) {
    var shell = require('shelljs');
    const workbook = XLSX.readFile(`/var/lib/jenkins/file-downloads/${filename}-31 Oct 2018-1.xlsx`);
    const sheet_name_list = workbook.SheetNames;
    const filedata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[7]]);
    return filedata;
}

function readXLSXFileForDayIntervalAdjustment(filename) {
    var shell = require('shelljs');
    const workbook = XLSX.readFile(`/var/lib/jenkins/file-downloads/${filename}-31 Oct 2018-1.xlsx`);
    const sheet_name_list = workbook.SheetNames;
    const filedata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[8]]);
    return filedata;
}

function readXLSXFileForCustom(filename) {
    var shell = require('shelljs');
    const workbook = XLSX.readFile(`/var/lib/jenkins/file-downloads/${filename}-30 Jun 2019-1.xlsx`);
    const sheet_name_list = workbook.SheetNames;
    if (filename.includes('AutoBot-CD-')) {
        let resultSummaryRawdata = XLSX.utils.sheet_to_json(workbook.Sheets['Results Summary']);
        let resultSummaryFiledata = resultSummaryRawdata.filter((e) => {
            return e.Client !== "Last Sync Date";
        });
        expect(_.isEqual(resultSummaryFiledata, customResults.cdResultSummary(filename))).to.be.true;
        const resultDetailsFiledata = XLSX.utils.sheet_to_json(workbook.Sheets['Result Details']);

        expect(_.isEqual(resultDetailsFiledata, customResults.cdResultDetails())).to.be.true;
        const proceedsData = XLSX.utils.sheet_to_json(workbook.Sheets['Proceeds']);

        expect(_.isEqual(proceedsData, customResults.cdProceeds())).to.be.true;
        const rocData = XLSX.utils.sheet_to_json(workbook.Sheets['ROC']);

        expect(_.isEqual(rocData, customResults.cdROC())).to.be.true;
        const prefReturnData = XLSX.utils.sheet_to_json(workbook.Sheets['Preferred Return']);

        expect(_.isMatch(prefReturnData, customResults.cdPrefRetrun())).to.be.true;
        const cipCatchUpData = XLSX.utils.sheet_to_json(workbook.Sheets['CIP Catch-Up']);

        expect(_.isEqual(cipCatchUpData, customResults.cdCipCatchUp())).to.be.true;
        const cipAllocationData = XLSX.utils.sheet_to_json(workbook.Sheets['CIP Allocations']);

        expect(_.isEqual(cipAllocationData, customResults.cdCipAllocation())).to.be.true;

        const investorTermsData = XLSX.utils.sheet_to_json(workbook.Sheets['Investor Terms']);
        expect(_.isEqual(investorTermsData, customResults.investorTerms())).to.be.true;

        const detailsData = XLSX.utils.sheet_to_json(workbook.Sheets['Waterfall Details']);
        expect(_.isEqual(detailsData, customResults.waterfallDetails())).to.be.true;
    } else {
        const resultDetailsData = XLSX.utils.sheet_to_json(workbook.Sheets['Result Details']);
        expect(_.isEqual(resultDetailsData, customResults.udResultDetails())).to.be.true;
    }
}

function readXLSXFileForDealbyDeal(filename) {
    var shell = require('shelljs');
    const workbook = XLSX.readFile(`/var/lib/jenkins/file-downloads/${filename}-31 Oct 2018-1.xlsx`);
    const sheet_name_list = workbook.SheetNames;
    if (filename.includes('AutoBot-CD-')) {
        let resultSummaryRawdata = XLSX.utils.sheet_to_json(workbook.Sheets['Results Summary']);
        let resultSummaryFiledata = resultSummaryRawdata.filter((e) => {
            return e.Client !== "Last Sync Date";
        });
        expect(_.isEqual(resultSummaryFiledata, dbydResults.cdResultSummary(filename))).to.be.true;

        const resultDetailsFiledata = XLSX.utils.sheet_to_json(workbook.Sheets['Result Details']);
        expect(_.isEqual(resultDetailsFiledata, dbydResults.cdResultDetails())).to.be.true;

        const proceedsData = XLSX.utils.sheet_to_json(workbook.Sheets['Proceeds']);
        expect(_.isEqual(proceedsData, dbydResults.cdProceeds())).to.be.true;

        const rdsData = XLSX.utils.sheet_to_json(workbook.Sheets['Realized Distribution Summary']);
        expect(_.isEqual(rdsData, dbydResults.cdRealizedDistributionSummary())).to.be.true;

        const rocData = XLSX.utils.sheet_to_json(workbook.Sheets['ROC - Investments']);
        expect(_.isEqual(rocData, dbydResults.cdROCInv())).to.be.true;

        const rocWriteOffData = XLSX.utils.sheet_to_json(workbook.Sheets['ROC - Write-Offs']);
        expect(_.isEqual(rocWriteOffData, dbydResults.cdROCWriteOff())).to.be.true;

        const prefReturnData = XLSX.utils.sheet_to_json(workbook.Sheets['Preferred Return']);
        expect(_.isEqual(prefReturnData, dbydResults.cdPreferredReturn())).to.be.true;

        const cipCatchUpData = XLSX.utils.sheet_to_json(workbook.Sheets['CIP Catch-Up']);
        expect(_.isEqual(cipCatchUpData, dbydResults.cdCIPCatchUp())).to.be.true;

        const cipAllocationData = XLSX.utils.sheet_to_json(workbook.Sheets['CIP Allocations']);
        expect(_.isEqual(cipAllocationData, dbydResults.cdCIPAllocation())).to.be.true;

        const afeData = XLSX.utils.sheet_to_json(workbook.Sheets['Allocable Fees + Expenses']);
        expect(_.isEqual(afeData, dbydResults.cdAFE())).to.be.true;

        const aggregateExpenseData = XLSX.utils.sheet_to_json(workbook.Sheets['Aggregate Expenses']);
        expect(_.isEqual(aggregateExpenseData, dbydResults.cdAggregateExpense())).to.be.true;

        const investorTermsData = XLSX.utils.sheet_to_json(workbook.Sheets['Investor Terms']);
        expect(_.isEqual(investorTermsData, dbydResults.cdInvestorTerms())).to.be.true;
    } else {
        const resultDetailsData = XLSX.utils.sheet_to_json(workbook.Sheets['Result Details']);
        expect(_.isEqual(resultDetailsData, dbydResults.udResultDetails())).to.be.true;
    }
}

function readNavXLSXFile(filename) {
    var shell = require('shelljs');
    const workbook = XLSX.readFile(`/var/lib/jenkins/file-downloads/${filename}`);
    const sheet_name_list = workbook.SheetNames;
    const filedata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[18]]);
    return filedata;
}

function readTermsTemplateFile(filename) {
    var shell = require('shelljs');
    browser.waitUntil(() => {
        return fs.existsSync(`/var/lib/jenkins/file-downloads/${filename}`) || fs.existsSync(`/var/lib/jenkins/file-downloads/inv_terms_28_a0137699-ec88.xlsx`);
    }, 30000, 'File did not finish downloading...');
    const workbook = XLSX.readFile(`/var/lib/jenkins/file-downloads/${filename}`);

    // Uncomment below to run locally.
    // const workbook = XLSX.readFile(`C:\\Users\\Default\\Downloads\\${filename}`);

    const sheet_name_list = workbook.SheetNames;
    const filedata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    return filedata;
}

function removeTermsTemplateFile(fileName) {
    var shell = require('shelljs');
    shell.exec(`sudo rm '/var/lib/jenkins/file-downloads/${fileName}'`).stdout;
}

const clients = Object.freeze({
    KUVARI: {
        NAME: "Kuvari",
        ID: "2"
    },
    TIFF: {
        NAME: "TIFF",
        ID: "3"
    },
    DEERFIELD: {
        NAME: "Deerfield",
        ID: "4"
    },
    BLUEDRIVE: {
        NAME: "Bluedrive",
        ID: "5"
    },
    AVENUE_CAPITAL: {
        NAME: "AVENUE_CAPITAL",
        ID: "7"
    },
    QA_UI: {
        NAME: "QA_UI",
        ID: "29"
    },
    QA_API: {
        NAME: "QA_API",
        ID: "30"
    },
    QA_LOAD: {
        NAME: "QA_LOAD",
        ID: "31"
    },
    QA_BIZ: {
        NAME: "QA_BIZ",
        ID: "32"
    },
    EQT: {
        NAME: "EQT",
        ID: "15"
    },
    SECURIS: {
        NAME: "SECURIS",
        ID: "16"
    },
    PINEY_LAKE: {
        NAME: "PINEY_LAKE",
        ID: "24"
    },
    HIGHVISTA: {
        NAME: "HIGHVISTA",
        ID: "18"
    },
    M_AND_G: {
        NAME: "M_AND_G",
        ID: "8"
    },
    MSOUTH: {
        NAME: "MSOUTH",
        ID: "13"
    },
    DSAM: {
        NAME: "DSAM",
        ID: "14"
    }
});

const investranDomain = Object.freeze({
    AIGF: {
        NAME: "AIGF",
    },
    AIIF: {
        NAME: "AIIF",
    },
    ALGEBRISNPL: {
        NAME: "Algebris NPL",
    },
    AVENUE: {
        NAME: "Avenue",
    },
    BLACKSTONE: {
        NAME: "Blackstone",
    },
});

const calculationMethod = Object.freeze({
    IRR: {
        NAME: "IRR",
    },
    MULTIPLIER: {
        NAME: "Multiplier",
    },
    SIMPLE_INTEREST: {
        NAME: "Simple Interest",
    },
    CUSTOM: {
        NAME: "Custom",
    }
});

function generateRandomString(upperlimit) {
    return Math.random().toString(36).substring(upperlimit);
}

function generateRandomDate() {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
}

function generateCurrentDate(format) {
    if (typeof format == 'undefined') {
        return moment().format();
    } else {
        return moment().format(format);
    }
}

function generateRandomAmount() {
    let precision = 100;
    return Math.floor(Math.random() * (1000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
}

function generateTransactionsData(upperlimit) {
    const data = [];
    for (let i = 0; i < upperlimit; i++) {
        data.push(new Transaction.Builder().withInvestorId('60963').withGLDate(generateRandomDate()).withEffectiveDate(generateRandomDate()).withAmount(generateRandomAmount().toString()).build());
    }
    return data.map((key) => {
        return { 'Investor Id': key.investorId, 'GL Date': key.gLDate, 'Effective Date': key.effectiveDate, 'Amount': key.amount };
    })
}

function generateValidInvestorData(upperlimit) {
    const data = [];
    for (let i = 0; i < upperlimit; i++) {
        data.push(new InvestorData.Builder().withInvestorId('47104').withInvestorName('Investor 2').build());
        data.push(new InvestorData.Builder().withInvestorId('60963').withInvestorName('Investor 1').build());
    }
    return data.map((key) => {
        return { 'Investor Name': key.investorName, 'Investor Id': key.investorId };
    })
}

function regenerateValidInvestorData(upperlimit) {
    const data = [];
    for (let i = 0; i < upperlimit; i++) {
        data.push(new InvestorData.Builder().withInvestorId('47104').withInvestorName('Investor 2').build());
        data.push(new InvestorData.Builder().withInvestorId('60963').withInvestorName('Investor 1').build());
    }
    return data.map((key) => {
        return { 'Investor Name': key.investorName, 'Investor Id': key.investorId };
    })
}

function generateInvalidInvestorData(upperlimit) {
    const data = [];
    for (let i = 0; i < upperlimit; i++) {
        data.push(new InvestorData.Builder().withInvestorId('60963').withInvestorName('').build());
        data.push(new InvestorData.Builder().withInvestorId('47104').withInvestorName('').build());
    }
    return data.map((key) => {
        return { 'Investor Name': key.investorName, 'Investor Id': key.investorId };
    })
}

function generateInvalidInvestorTermsData(upperlimit) {
    const data = [];
    for (let i = 0; i < upperlimit; i++) {
        data.push(new InvestorTermsData.Builder().withInvestorId('60963').withInvestorName('').build());
    }
    return data.map((key) => {
        return { 'Investor Name': key.investorName, 'Investor Id': key.investorId };
    })
}

function cleanUp(clientName, waterfallName) {
    let clientId = '';
    let client = '';
    let waterfallId = '';
    let token = {};
    var shell = require('shelljs');
    shell.exec(`node generateCredentials.js -- --env ${process.argv[process.argv.length - 1]}`).stdout;
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, info) {
        if (err) {
            console.log(err);
        } else {
            token = JSON.parse(info);
            let firstcall = shell.exec(`curl --insecure -H "Cookie: JWT=${token.jwt}; SMSESSION= ${token.smsession}" ${token.url}core/clients`);
            let data = JSON.parse(firstcall);
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i]['attributes']['name'] === clientName) {
                    client = data.data[i]['attributes']['name'];
                    clientId = data.data[i]['attributes']['clientId'];
                }
            }
            let secondcall = shell.exec(`curl --insecure -H "Cookie: JWT=${token.jwt}; SMSESSION= ${token.smsession}" ${token.url}core/waterfalls/${clientId}?clientId=${clientId}`);
            data = JSON.parse(secondcall);
            console.log(`\n\n\n-- -- ` + ` Total Waterfall Count in ${client} - ` + data.data.length + '\n');
            for (var k = 0; k < data.data.length; k++) {
                if (data.data[k]['attributes']['name'].includes('Automation-', 0) === false && data.data[k]['attributes']['name'].includes(waterfallName, 0) && waterfallName !== 'all' && !['UX', 'BIZ', 'BIZ 2', 'BIZ 3'].includes(client)) {
                    waterfallId = data.data[k]['attributes']['waterfallId'];
                    let name = data.data[k]['attributes']['name'];
                    let thirdcall = shell.exec(`curl --insecure -H "Cookie: JWT=${token.jwt}; SMSESSION= ${token.smsession}" -X "DELETE" ${token.url}core/waterfalls/${clientId}/${waterfallId}?clientId=${clientId}&waterfallId=${waterfallId}`);
                    let deldata = JSON.parse(thirdcall);
                    console.log(`\n-- -- ` + name + ` -- -- ` + deldata.data['attributes'] + '\n');
                    (deldata.data['attributes']).should.contain("has been deleted.");
                } else if (data.data[k]['attributes']['name'].includes('Automation-', 0) === false && waterfallName === 'all' && !['UX', 'BIZ', 'BIZ 2', 'BIZ 3'].includes(client)) {
                    waterfallId = data.data[k]['attributes']['waterfallId'];
                    let name = data.data[k]['attributes']['name'];
                    let thirdcall = shell.exec(`curl --insecure -H "Cookie: JWT=${token.jwt}; SMSESSION= ${token.smsession}" -X "DELETE" ${token.url}core/waterfalls/${clientId}/${waterfallId}?clientId=${clientId}&waterfallId=${waterfallId}`);
                    let deldata = JSON.parse(thirdcall);
                    console.log(`\n-- -- ` + name + ` -- -- ` + deldata.data['attributes'] + '\n');
                    (deldata.data['attributes']).should.contain("has been deleted.");
                }
            }
        }
    });
}

function fullCleanUp() {
    let clientId = '';
    let clientName = '';
    let waterfallId = '';
    let token = {};
    var shell = require('shelljs');
    shell.exec(`node generateCredentials.js -- --env ${process.argv[process.argv.length - 1]}`).stdout;
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, info) {
        if (err) {
            console.log(err);
        } else {
            token = JSON.parse(info);
            let firstcall = shell.exec(`curl --insecure -H "Cookie: JWT=${token.jwt}; SMSESSION= ${token.smsession}" ${token.url}core/clients`);
            let data = JSON.parse(firstcall);
            for (var i = 0; i < data.data.length; i++) {
                clientId = data.data[i]['attributes']['clientId'];
                clientName = data.data[i]['attributes']['name'];
                let secondcall = shell.exec(`curl --insecure -H "Cookie: JWT=${token.jwt}; SMSESSION= ${token.smsession}" ${token.url}core/waterfalls/${clientId}?clientId=${clientId}`);
                let secondCallData = JSON.parse(secondcall);
                console.log(`\n\n\n-- -- ` + ` Total Waterfall Count in ${clientName} - ` + secondCallData.data.length + '\n');
                for (var k = 0; k < secondCallData.data.length; k++) {
                    if (secondCallData.data[k]['attributes']['name'].includes('Automation-', 0) === false && !['UX', 'BIZ', 'BIZ 2', 'BIZ 3'].includes(clientName)) {
                        waterfallId = secondCallData.data[k]['attributes']['waterfallId'];
                        let name = secondCallData.data[k]['attributes']['name'];
                        let thirdcall = shell.exec(`curl --insecure -H "Cookie: JWT=${token.jwt}; SMSESSION= ${token.smsession}" -X "DELETE" ${token.url}core/waterfalls/${clientId}/${waterfallId}?clientId=${clientId}&waterfallId=${waterfallId}`);
                        let deldata = JSON.parse(thirdcall);
                        console.log(`\n-- -- ` + name + ` -- -- ` + deldata.data['attributes'] + '\n');
                        (deldata.data['attributes']).should.contain("has been deleted.");
                    }
                }
            }
        }
    });
}

function deleteWaterfall(clientName, waterfallName) {
    let clientId = '';
    let waterfallId = '';
    let token = {};
    var shell = require('shelljs');
    shell.exec("node generateCredentials.js").stdout;
    fs.readFile('tokens.json', 'utf8', function readFileCallback(err, info) {
        if (err) {
            console.log(err);
        } else {
            token = JSON.parse(info);
            let firstcall = shell.exec(`curl --insecure -H "Cookie: JWT=${token.jwt}; SMSESSION= ${token.smsession}" ${process.env.API_URL}core/clients`).stdout;
            let data = JSON.parse(firstcall);
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i]['attributes']['name'] === clientName) {
                    clientId = data.data[i]['attributes']['clientId'];
                }
            }
            let secondcall = shell.exec(`curl --insecure -H "Cookie: JWT=${token.jwt}; SMSESSION= ${token.smsession}" ${process.env.API_URL}core/waterfalls/${clientId}`).stdout;
            data = JSON.parse(secondcall);
            for (var k = 0; k < data.data.length; k++) {
                waterfallId = data.data[k]['attributes']['waterfallId'];
                shell.exec(`curl --insecure -H "Cookie: JWT=${token.jwt}; SMSESSION= ${token.smsession}" -X "DELETE" ${process.env.API_URL}core/waterfalls/${clientId}/${waterfallId}`).stdout;
            }
        }
    });
}

async function getWaterfallId(clientName, waterfallName) {
    let clientId = '';
    let waterfallId = '';
    let token = {};
    var shell = require('shelljs');
    shell.exec("node generateCredentials.js").stdout;
    await fs.readFile('tokens.json', 'utf8', function readFileCallback(err, info) {
        if (err) {
            console.log(err);
        } else {
            token = JSON.parse(info);
            let firstcall = shell.exec(`curl --insecure -H "Cookie: JWT=${token.jwt}; SMSESSION= ${token.smsession}" ${process.env.API_URL}core/clients`).stdout;
            let data = JSON.parse(firstcall);
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i]['attributes']['name'] === clientName) {
                    clientId = data.data[i]['attributes']['clientId'];
                }
            }
            let secondcall = shell.exec(`curl --insecure -H "Cookie: JWT=${token.jwt}; SMSESSION= ${token.smsession}" ${process.env.API_URL}core/waterfalls/${clientId}`).stdout;
            data = JSON.parse(secondcall);
            for (var k = 0; k < data.data.length; k++) {
                if (data.data[k]['attributes']['name'] === waterfallName) {
                    waterfallId = data.data[k]['attributes']['waterfallId'];
                }
            }
            return {
                clientId: clientId,
                waterfallId: waterfallId
            }
        }
    });
}

function checkBrowserLogs() {
    console.log(browser.options.desiredCapabilities.browserName);
    if (browser.options.desiredCapabilities.browserName == 'chrome') {
        let data = browser.log('browser').value;
        data.forEach((element) => {
            expect(element.level).to.be.oneOf(['INFO', 'WARNING', 'SEVERE'], 'Browser Log Error - ' + element.level + ' - ' + element.message);
        });
    }
}

function eventsCalculationDetails(cdEventName, udEventName, waterfallName) {
    var json = JSON.stringify({ cdEventName: cdEventName, udEventName: udEventName });
    if (process.platform == 'win32') {
        fs.writeFile(`${waterfallName}.json`, json, 'utf8');
    } else {
        fs.writeFile(`/var/lib/jenkins/workspace/E2E-Download/${waterfallName}.json`, json, 'utf8');
    }

}

export default { writeFile, readFile, readXLSXFile, readTermsTemplateFile, readXLSXFileForCustom, readXLSXFileForDealbyDeal, removeTermsTemplateFile, clients, cleanUp, fullCleanUp, getWaterfallId, startDocker, stopDocker, generateRandomDate, generateCurrentDate, generateRandomAmount, generateRandomString, generateTransactionsData, generateValidInvestorData, generateInvalidInvestorData, regenerateValidInvestorData, investranDomain, generateInvalidInvestorTermsData, deleteWaterfall, readNavXLSXFile, checkBrowserLogs, calculationMethod, readXLSXFileForEventResult, readXLSXFileForCalculationDetails, readXLSXFileForCalculationDetailsTotalReturn, readXLSXFileForPreferredReturnSheet, eventsCalculationDetails, readXLSXFileForAggregateExpense, readXLSXFileForDayIntervalAdjustment };
