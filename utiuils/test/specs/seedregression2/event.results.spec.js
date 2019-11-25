import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';

describe('Calculate Events Flow Verification - I', () => {

    let cdInEventName;

    before(() => {
        reporter.feature('Login to Waterfall App to Calculate Events For Investran Linked Clients');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should validate the Events workflow - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        cdInEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().validateEventFlow('10 Sep 2018');
        utils.checkBrowserLogs();
    });

    it('Should validate the Events Approval workflow - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        cdInEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().validateEventApprovalFlow('10 Sep 2018');
        LoginPage.longWait().logout();
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticateSecondUser().currentPageTitle().should.equal('Citco Waterfall');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        WaterfallDetailsPage.goToEventsTab();
        WaterfallDetailsPage.clickEventMarkedAsReviewd(cdInEventName);
        WaterfallDetailsPage.validateEventResultMarkedAsReviewdPermission(cdInEventName);
        WaterfallDetailsPage.clickEventSubmitForApproval(cdInEventName);
        WaterfallDetailsPage.validateEventResultApprovalPermission(cdInEventName);
        utils.checkBrowserLogs();
    });
});
