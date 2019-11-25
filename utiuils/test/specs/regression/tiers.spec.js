import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import utils from '../../../src/utils/utilities';

describe('Tiers page', () => {

    let client, waterfallName; 

    before(() => {
        reporter.feature('Login to Waterfall App ');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

     it('Create waterfall and go to build tiers screen and build tiers from scratch', () => {
        reporter.feature('Waterfall Creation Feature');
        client = HomePage.selectRandomClient();
        waterfallName = HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfall();
        HomePage.buildTiers();
        HomePage.buildTiersFromScratch();
        utils.checkBrowserLogs();
    });

})

