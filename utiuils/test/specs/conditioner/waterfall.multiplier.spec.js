import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import HomePage from '../../../src/pageobjects/home.page';
import utils from '../../../src/utils/utilities';

describe('Multiplier Waterfall Types Environment Conditioner', () => {

    let waterfallName, client, investorTermsFile;

    before( () => {
        LoginPage.open();        
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Create Automation-Multiplier Waterfall' , () => {
        reporter.feature('Create and Submit Waterfall');
        waterfallName = 'Automation-Multiplier';
        client = HomePage.selectSeedClient();
        WaterfallDetailsPage.searchAndManageWaterfall(waterfallName, false, utils.calculationMethod.MULTIPLIER.NAME);
        WaterfallDetailsPage.searchForWaterfall(waterfallName).uploadTransactionFiles(waterfallName);
    });

    it('Create Automation-Investran-Multiplier Waterfall' , () => {
        reporter.feature('Create and Submit Waterfall');
        waterfallName = 'Automation-Investran-Multiplier';
        client = HomePage.selectSeedClient();
        WaterfallDetailsPage.searchAndManageWaterfall(waterfallName, true, utils.calculationMethod.MULTIPLIER.NAME);
        WaterfallDetailsPage.searchForWaterfall(waterfallName).syncInvestranTransactions();
    });

    it('Create Automation-Multiplier-DbyD Waterfall' , () => {
        reporter.feature('Create and Submit Waterfall');
        waterfallName = 'Automation-Multiplier-DbyD';
        client = HomePage.selectSeedClient();
        WaterfallDetailsPage.searchAndManageWaterfall(waterfallName, false, utils.calculationMethod.MULTIPLIER.NAME);
        WaterfallDetailsPage.searchForWaterfall(waterfallName).uploadTransactionFiles(waterfallName);
    });
})

