import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import HomePage from '../../../src/pageobjects/home.page';
import utils from '../../../src/utils/utilities';

describe('Events Calculation Total-Return Environment Conditioner', () => {

    let waterfallName, client, investorTermsFile;

    before( () => {
        LoginPage.open();        
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Create an IRR calculation method Investran linked Waterfall ' , () => {
        reporter.feature('Create and Submit Waterfall');
        waterfallName = 'Automation-Investran';
        client = HomePage.selectSeedClient();
        WaterfallDetailsPage.searchAndManageWaterfall(waterfallName, true, utils.calculationMethod.IRR.NAME);
        WaterfallDetailsPage.searchForWaterfall(waterfallName).syncInvestranTransactions();
        HomePage.goToHomePage();
    });

    it('Create an IRR calculation method Non-Investran linked Waterfall ' , () => {
        reporter.feature('Create and Submit Waterfall');
        waterfallName = 'Automation-TotalReturn';
        client = HomePage.selectSeedClient();
        WaterfallDetailsPage.searchAndManageWaterfall(waterfallName, false, utils.calculationMethod.IRR.NAME);
        WaterfallDetailsPage.searchForWaterfall(waterfallName).uploadTransactionFiles(waterfallName);
        HomePage.goToHomePage();
    });
})

