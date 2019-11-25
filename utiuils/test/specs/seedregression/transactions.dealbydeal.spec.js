import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';

describe('Upload Deal By Deal Transaction', () => {

    let realizedInvestmentContributionFile;

    before(() => {
        reporter.feature('Login to Waterfall');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Upload Deal By Deal Transaction file - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallForDealByDeal();
        WaterfallDetailsPage.goToTransactionsTab();
        realizedInvestmentContributionFile = './resources/realized_investment_contributions.xlsx';
        WaterfallDetailsPage.uploadDealByDealTransactionsDataFile(realizedInvestmentContributionFile);
        utils.checkBrowserLogs();
    });

    it('Validate Aggregate Expense UI Changes - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.searchAndEditWaterfall('Automation-AggregateExpense');
        WaterfallDetailsPage.validateAggregateExpenseTransaction('Automation-AggregateExpense');
        utils.checkBrowserLogs();
    });
});
