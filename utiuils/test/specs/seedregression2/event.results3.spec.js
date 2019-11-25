import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';

describe('Calculate Events Flow Verification - III', () => {

    let cdInEventName;

    before(() => {
        reporter.feature('Login to Waterfall App to Calculate Events For Investran Linked Clients');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticateThirdUser().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should validate that Event can only have one Approved Result - ' + utils.generateCurrentDate('LLL'), () => {
        HomePage.selectSpecificClient('Deerfield');
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        cdInEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().validateEventApprovalFlow('10 Sep 2018');
        WaterfallDetailsPage.generateMultipleEventResults(cdInEventName);
        LoginPage.longWait().logout();
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticateSecondUser().currentPageTitle().should.equal('Citco Waterfall');
        HomePage.selectSpecificClient('Deerfield');
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        WaterfallDetailsPage.goToEventsTab().validateApprovedMultipleEventResults(cdInEventName);
        utils.checkBrowserLogs();
    });
});
