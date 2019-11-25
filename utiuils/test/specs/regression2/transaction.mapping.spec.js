import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import TransactionPage from '../../../src/pageobjects/transaction.page';
import InvestorsDataPage from '../../../src/pageobjects/investors.page';
import utils from '../../../src/utils/utilities';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import homePage from '../../../src/pageobjects/home.page';

describe('Select Transaction Type and Hierarchy', () => {
    
    let investorFile, transactionNavFile;
    let client, waterfallName, dealByDealWaterfallName;
    
    before( () => { 
        reporter.feature('Login to Waterfall App to Select Transaction Type and Hierarchy');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should select and remove correct hierarchy and transactions - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Bug- CWF-1164');
        client = HomePage.selectSpecificClient('TIFF');
        reporter.feature('Create new Waterfall');
        waterfallName = HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfallWithInvestranLink();
        HomePage.addTiers();
        TransactionPage.selectHierarchyForRemoveTranType();
        TransactionPage.validateRemovedTransTypeCounter();
        utils.checkBrowserLogs();
    });

    it('Should Add and count transactions type - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Bug- CWF-1196');
        TransactionPage.selectHierarchyForAddTranType();
        TransactionPage.validateAddedTransTypeCounter(waterfallName);
        utils.checkBrowserLogs();
        // utils.cleanUp('TIFF', waterfallName);
    });

    it('Should validate unique value of Expense Contributions Transactions for DBD - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Bug- CWF-1714');
        client = HomePage.selectSpecificClient('QA');
        waterfallName = HomePage.clickExpandMenu().wait().selectInvestranLinkedRealizedReturnCapitalWaterfall();
        HomePage.addRRCTiers('T1', 'T2', 'T3', 'T4');
        HomePage.validateUniqueValueForExpenseContributionsDBD();
        utils.checkBrowserLogs();
        // utils.cleanUp('TIFF', waterfallName);
    });

    it('Validate No Empty Transactions Buckets for Deal By Deal - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Bug- CWF-1796');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfall('Automation-InvestranDbyD');
        WaterfallDetailsPage.goToSyncTab();
        WaterfallDetailsPage.goToTransactionsTab();
        TransactionPage.validateNoEmptyTransactionsBucketDBD();
        utils.checkBrowserLogs();
    });
    
    it('Verify transaction mapping buckets & default hierarchies based on waterfall type', () => { 
        reporter.feature('CWF-1032');
        client = HomePage.selectDefaultClient();
        waterfallName = HomePage.clickExpandMenu().selectRandomlyCreatedWaterfallWithInvestranLink();
        HomePage.addTiers();
        TransactionPage.totalReturnBuckets();
        WaterfallDetailsPage.clickListItemIcon();
        dealByDealWaterfallName = HomePage.clickExpandMenu().selectInvestranLinkedRealizedReturnCapitalWaterfall();
        HomePage.addRRCTiers('T1', 'T2', 'T3', 'T4');
        TransactionPage.dealByDealBucket();
    });
});
