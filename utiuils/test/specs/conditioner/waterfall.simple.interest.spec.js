import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import HomePage from '../../../src/pageobjects/home.page';
import utils from '../../../src/utils/utilities';

describe('Simple Interest Waterfall Types Environment Conditioner', () => {

    let waterfallName, client, investorTermsFile;

    before( () => {
        LoginPage.open();        
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Create Automation-Simple Interest Waterfall' , () => {
        reporter.feature('Create and Submit Waterfall');
        waterfallName = 'Automation-Simple Interest';
        client = HomePage.selectSeedClient();
        WaterfallDetailsPage.searchAndManageWaterfall(waterfallName, false, utils.calculationMethod.IRR.NAME);
        WaterfallDetailsPage.searchForWaterfall(waterfallName).uploadTransactionFiles(waterfallName);
    });

    it('Create Automation-Simple Interest Deal-By-Deal Waterfall' , () => {
        reporter.feature('Create and Submit Waterfall');
        waterfallName = 'Automation-Simple Interest-DbyD';
        client = HomePage.selectSeedClient();
        WaterfallDetailsPage.searchAndManageWaterfall(waterfallName, false, utils.calculationMethod.IRR.NAME);
        WaterfallDetailsPage.searchForWaterfall(waterfallName).uploadTransactionFiles(waterfallName);
    });
})

