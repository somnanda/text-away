import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import results from '../../../src/models/custom.tr.response';

describe('Custom Deal by Deal Download Events', () => {

    let cdEventName, udEventName, waterfallName;

    before(() => {
        reporter.feature('Login to Waterfall App to Download Events Deal By Deal');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should validate Calculation Details Sheet for IRR Deal by Deal - ' + utils.generateCurrentDate('LLL'), () => {
        waterfallName = 'Automation-DealByDeal';
        let events = {};
        fs.readFile(`${waterfallName}.json`, 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                events = JSON.parse(data);
                cdEventName = events.cdEventName;
                udEventName = events.udEventName;
            }
        });

        HomePage.selectSeedClient();
        WaterfallDetailsPage.selectSeedWaterfallForDealByDeal();
        WaterfallDetailsPage.goToEventsTab();
        WaterfallDetailsPage.searchEvent(cdEventName);
        WaterfallDetailsPage.downloadEvents();
        utils.readXLSXFileForDealbyDeal(cdEventName);
        WaterfallDetailsPage.comeBack();
        WaterfallDetailsPage.searchEvent(udEventName);
        WaterfallDetailsPage.downloadEvents();
        utils.readXLSXFileForDealbyDeal(udEventName);
    });
});
