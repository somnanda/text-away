import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';

describe('Calculate Events Flow Verification - II', () => {

    let cdInEventName;

    before(() => {
        reporter.feature('Login to Waterfall App to Calculate Events For Investran Linked Clients');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should validate the Events Approval Buttons for respective roles - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSpecificClient('Deerfield');
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        cdInEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().validateEventApprovalFlow('10 Sep 2018');

        HomePage.selectSpecificClient('QA_API');
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        let cdInEventName2 = WaterfallDetailsPage.goToEventsTab().clickAddEvent().validateEventApprovalFlow('10 Sep 2018');
        HomePage.browserRefresh();
        WaterfallDetailsPage.goToEventsTab().clickEventSubmitForApproval(cdInEventName2);

        HomePage.selectSpecificClient('Bluedrive');
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        let cdInEventName3 = WaterfallDetailsPage.goToEventsTab().clickAddEvent().validateEventApprovalFlow('10 Sep 2018');
        HomePage.browserRefresh();
        WaterfallDetailsPage.goToEventsTab().clickEventSubmitForApproval(cdInEventName3);

        LoginPage.longWait().logout();
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticateThirdUser().currentPageTitle().should.equal('Citco Waterfall');
        HomePage.selectSpecificClient('Deerfield');
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        WaterfallDetailsPage.goToEventsTab();
        WaterfallDetailsPage.validateButtonsForAccountantControllerAdminRole(cdInEventName);

        HomePage.selectSpecificClient('QA_API');
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        WaterfallDetailsPage.goToEventsTab();
        WaterfallDetailsPage.validateButtonsForAccountantRole(cdInEventName2);

        HomePage.selectSpecificClient('Bluedrive');
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        WaterfallDetailsPage.goToEventsTab();
        WaterfallDetailsPage.validateButtonsForAdminControllerRole(cdInEventName3);
        WaterfallDetailsPage.validateApprovedUnApprovedForAdminControllerRole(cdInEventName3);
        utils.checkBrowserLogs();
    });

    it('Should validate the Events Reject Buttons for respective roles - ' + utils.generateCurrentDate('LLL'), () => {
        LoginPage.longWait().logout();
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
        reporter.feature('Pick Client');
        HomePage.selectSpecificClient('Bluedrive');
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        let cdInEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().validateEventApprovalFlow('10 Sep 2018');
        HomePage.browserRefresh();
        WaterfallDetailsPage.goToEventsTab().clickEventSubmitForApproval(cdInEventName);

        LoginPage.longWait().logout();
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticateThirdUser().currentPageTitle().should.equal('Citco Waterfall');
        HomePage.selectSpecificClient('Bluedrive');
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        WaterfallDetailsPage.goToEventsTab();
        WaterfallDetailsPage.validateRejectButtonsForAdminControllerRole(cdInEventName);
        utils.checkBrowserLogs();
    });
});
