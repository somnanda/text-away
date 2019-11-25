import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';
import TransactionPage from '../../../src/pageobjects/transaction.page';

describe('Time Format ', () => {

    before(() => {
        reporter.feature('Login to Waterfall App');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should Check for the 24 Hour Time Format for Sync Investran ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        WaterfallDetailsPage.goToEventsTab().clickAddEvent();
        TransactionPage.calculateEventForSync('10 Sep 2018');
        TransactionPage.eventScreenTansactionsSync();
        reporter.feature('Investran Sync Time Format');
        TransactionPage.validateTimeFormat();
        utils.checkBrowserLogs();
    }); 

    it('Should Check for the 24 Hour Time Format Event Results' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        WaterfallDetailsPage.goToEventsTab().clickAddEvent();
        reporter.feature('Event Result Time Format');
        TransactionPage.validateTimeFormatForEventsResult('10 Sep 2018');
        reporter.feature('Sync Tab Time Format');
        TransactionPage.validateTimeFormatForSyncTab();
        utils.checkBrowserLogs();
    }); 

});
