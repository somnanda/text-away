import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import HomePage from '../../../src/pageobjects/home.page';
import utils from '../../../src/utils/utilities';

describe('Waterfall Submit for Approval', () => {

    let waterfallName, client, investorTermsFile;

    before( () => { 
        reporter.feature('Login to Waterfall App');
        LoginPage.open();        
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Create a Waterfall and Submit it for Approval' , () => {
        reporter.feature('Create and Submit Waterfall');
        client = HomePage.selectDefaultClient();
        waterfallName = HomePage.clickExpandMenu().selectRandomlyCreatedWaterfall();
        HomePage.addTiers();
        investorTermsFile = './resources/updated_terms.xlsx';
        HomePage.uploadInvestorTerms(investorTermsFile);
        HomePage.confirmNoCIPInvestorTerms();
        WaterfallDetailsPage.submitWaterfallForApproval();
        LoginPage.longWait().logout();
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticateSecondUser().currentPageTitle().should.equal('Citco Waterfall');
        client = HomePage.selectDefaultClient();
        WaterfallDetailsPage.searchForWaterfallForApproval(waterfallName);
        WaterfallDetailsPage.approveWaterfall();
        WaterfallDetailsPage.searchForWaterfallForApproval(waterfallName);
        WaterfallDetailsPage.approvedWaterfall();
        utils.checkBrowserLogs();
     });

    it('Validate build tiers screen for blank ' , () => {
        reporter.feature('Create and Submit Waterfall');
        waterfallName = HomePage.clickExpandMenu().selectRandomlyCreatedWaterfall();
        HomePage.addTiersWithoutCalculationMethod();
        HomePage.addTiers();
        investorTermsFile = './resources/updated_terms_withCIP.xlsx';
        HomePage.uploadInvestorTerms(investorTermsFile);
        HomePage.clickSave();
        WaterfallDetailsPage.submitWaterfallForApproval();
        LoginPage.longWait().logout();
        reporter.feature('Create New Waterfall');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticateSecondUser().currentPageTitle().should.equal('Citco Waterfall');
        HomePage.selectDefaultClient();
        let newWaterfallName = HomePage.clickExpandMenu().selectRandomlyCreatedWaterfall();
        HomePage.validateTiersForBlank();
        utils.checkBrowserLogs();
     });
})

