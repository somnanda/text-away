import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import AdminPage from '../../../src/pageobjects/admin.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';

describe('Verify Sync for User with Controller Role', () => {

    let investorTermsFile, waterfallName, client;

    before(() => {
        reporter.feature('CWF-1673');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticateThirdUser().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Validate Investran Sync for User with Controller Role', () => {
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        WaterfallDetailsPage.goToSyncTab();
    });
});