import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import InfoPage from '../../../src/pageobjects/info.page';
import utils from '../../../src/utils/utilities';
import InvestorsDataPage from '../../../src/pageobjects/investors.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';

describe('Investran Sync Spec', () => {

    let client, waterfallName;

    before(() => {
        reporter.feature('Login to Waterfall App');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Create a Waterfall and Verify Realized Return of Capital workflow in Add-Waterfall also Verify Build tiers error msg ', () => {
        reporter.feature('Verify Build Tiers Error Messages');
        client = HomePage.selectSeedClient();
        waterfallName = HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfallWithInvestranLink();
        HomePage.addTiers().clickSave();
        WaterfallDetailsPage.waitForInvestranTermsSync('0');
        WaterfallDetailsPage.clickSave();
        WaterfallDetailsPage.submitWaterfallForApproval();
        WaterfallDetailsPage.searchAndEditWaterfall(waterfallName);
        HomePage.editInvestranLinkWaterfall();
        HomePage.addTiers().clickSave();
        WaterfallDetailsPage.waitForInvestranTermsSync('22');
        utils.checkBrowserLogs();
    });
})
