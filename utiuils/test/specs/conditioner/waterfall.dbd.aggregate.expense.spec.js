import LoginPage from '../../../src/pageobjects/login.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import HomePage from '../../../src/pageobjects/home.page';
import utils from '../../../src/utils/utilities';

describe('AggregateExpense Waterfall Environment Conditioner', () => {

    let waterfallName, client, investorTermsFile;

    before( () => {
        LoginPage.open();        
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Create an AggregateExpense Waterfall' , () => {
        waterfallName = 'Automation-AggregateExpense';
        client = HomePage.selectSeedClient();
        WaterfallDetailsPage.searchAndManageWaterfall(waterfallName, false, utils.calculationMethod.SIMPLE_INTEREST.NAME);
        WaterfallDetailsPage.searchForWaterfall(waterfallName).uploadTransactionFiles(waterfallName);
        HomePage.goToHomePage();
    });
})

