import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import AdminPage from '../../../src/pageobjects/admin.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';

describe('Verify Admin User - I', () => {

    let investorTermsFile, waterfallName, client;

    before(() => {
        reporter.feature('Login to Waterfall App and upload Events Pre-requisite Data');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Select a Client and Verify it under Client Administration Screen', () => {
        reporter.feature('Select Client Admin Feature');
        client = HomePage.selectRandomClient();
        AdminPage.selectAdmin(client);
        let newClient = HomePage.selectSpecificClient('QA');
        AdminPage.selectAdmin(newClient);
        utils.checkBrowserLogs();
    });

    it('Check that Add Events is working for unlinked Investran', () => {
        reporter.feature('BUG: CWF-1150');
        WaterfallDetailsPage.searchForWaterfallForAddEvents('Automation-NonInvestran');
        WaterfallDetailsPage.goToEventsTab().clickAddEvent();
        WaterfallDetailsPage.searchForWaterfallForAddEvents('Automation-Investran');
        WaterfallDetailsPage.goToEventsTab().clickAddEvent();
        utils.checkBrowserLogs();
    });

    it('Unlinking Investran Popup shows correct list of Waterfall', () => {
        reporter.feature('CWF-1193');
        client = HomePage.selectSeedClient();
        waterfallName = HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfallWithInvestranLink();
        HomePage.addTiers();
        HomePage.clickSave();
        HomePage.clickSave();
        WaterfallDetailsPage.confirmNoCIPInvestorTerms();
        WaterfallDetailsPage.submitWaterfallForApproval();
        AdminPage.selectAdmin(client);
        AdminPage.unlinkPopup(waterfallName);
    });
});