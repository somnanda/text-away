import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import AdminPage from '../../../src/pageobjects/admin.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';

describe('Verify Admin User - II', () => {

    let investorTermsFile, waterfallName, client;

    before(() => {
        reporter.feature('Login to Waterfall App and upload Events Pre-requisite Data');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticateThirdUser().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Validate the permission for Accountant and Controller Role Also Validate Access to the Client Admin Screen only for Admin User  ', () => {
        reporter.feature('CWF-1061');
        client = HomePage.selectSpecificClient('AVENUE_CAPITAL');
        AdminPage.selectAdmin(client);
        AdminPage.bottomNavigationBar();
        AdminPage.searchForWaterfallForActionButtons('Automation-ValidateWaterfall');
        AdminPage.validateActionButtons();

        reporter.feature('CWF-1419');
        HomePage.selectSpecificClient('QA');
        AdminPage.selectAdmin('QA');
        AdminPage.bottomNavigationBar();
        AdminPage.searchForWaterfallForActionButtonsAndValidateEventFlow('Automation-Investran');
        WaterfallDetailsPage.goToEventsTab();
        AdminPage.validateAddEventButton();
        AdminPage.validateEventResultSubmitForApproveButton('Submit For Approval Button');
        AdminPage.validateEventResultApproveButton('Approve-Events');
        AdminPage.validateSyncFromInvestranButton();

        HomePage.selectSpecificClient('BIZ');
        browser.refresh();
        AdminPage.searchForWaterfallForActionButtonsAndValidateEventFlow('Automation-Investran');
        WaterfallDetailsPage.goToEventsTab();
        AdminPage.validateAddEventButton();
        WaterfallDetailsPage.calculateCashDistibutionEventForTotalReturnReadOnlyRole('10 Sep 2019')
        AdminPage.validateEventResultSubmitForApproveButton('Submit For Approval Button');
        AdminPage.validateEventResultApproveButton('BIZ - Approve- Events');
        AdminPage.validateSyncFromInvestranButton();

        HomePage.selectSpecificClient('QA_UI');
        browser.refresh();
        AdminPage.searchForWaterfallForActionButtonsAndValidateEventFlow('Automation-Investran');
        WaterfallDetailsPage.goToEventsTab();
        AdminPage.validateAddEventButton();
        AdminPage.validateEventResultSubmitForApproveButton('QA_UI - Submit For Approval Button');
        AdminPage.validateEventResultApproveButton('QA_UI - Approve- Events');
        AdminPage.validateSyncFromInvestranButton('QA_UI - Approve- Events');
        WaterfallDetailsPage.goToTransactionsTab();
        WaterfallDetailsPage.validateUploadTransactionsForReadOnlyRole();

        HomePage.selectSpecificClient('QA_API');
        browser.refresh();
        WaterfallDetailsPage.searchForWaterfallForAddEvents('Automation-Investran');
        WaterfallDetailsPage.goToEventsTab();
        AdminPage.validateEventResultApproveButton('QA_API - Approve-Events');
        utils.checkBrowserLogs();
    });
});