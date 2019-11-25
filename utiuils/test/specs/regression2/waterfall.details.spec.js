import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import HomePage from '../../../src/pageobjects/home.page';
import InvestorsDataPage from '../../../src/pageobjects/investors.page';
import utils from '../../../src/utils/utilities';
import TransactionPage from '../../../src/pageobjects/transaction.page';
import waterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';

describe('Waterfalldetails page', () => {

    let client, waterfallName;

    before(() => {
        reporter.feature('Login to Waterfall App and upload Events Pre-requisite Data');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Create waterfall and go to Waterfall Details screen and Validate the Waterfall Details', () => {
        reporter.feature('Waterfall Creation Feature');
        client = HomePage.selectDefaultClient();
        waterfallName = HomePage.waterfallDetailsScreen();
        utils.checkBrowserLogs();
    });

    it('Create waterfall and validate compounding calculation and basis in build tiers screen', () => {
        reporter.feature('Waterfall Creation Feature');
        client = HomePage.selectRandomClient();
        waterfallName = HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfall();
        HomePage.validateCompoundingCalculationAndBasis();
        let calculationMethod = HomePage.wait().selectRealizedReturnCapitalWaterfallForCompounding();
        HomePage.validateCompoundingCalculationAndBasis(calculationMethod);
        utils.checkBrowserLogs();
    });

    it('Validate Calculate Results On only if Reporting Group is Selected', () => {
        reporter.feature('Waterfall Creation Feature');
        HomePage.selectDefaultClient();
        HomePage.validateCalculateResultsOn();
        utils.checkBrowserLogs();
    });

    it('Create waterfall and Validate Waterfall Wizard for TPG Client', () => {
        reporter.feature('Waterfall Creation Feature');
        HomePage.selectSpecificClient('TPG');
        HomePage.waterfallDetailsScreenForTPG();
        utils.checkBrowserLogs();
    });

})
