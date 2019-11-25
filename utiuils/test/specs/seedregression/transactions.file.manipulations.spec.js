import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';
import TransactionPage from '../../../src/pageobjects/transaction.page';

describe('Transaction File Uploads and Deletes', () => {

    let transactionContributionFile, transactionDistributionFile, priorCarriedInterestRealizedFile, priorCarriedInterestUnrealizedFile, navFile, transactionPriorCarryRealizedFile, priorCarriedInterestRealizedNoTransactionsFile;

    before(() => {
        reporter.feature('Login to Waterfall App to Upload and Delete Transaction Files');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should Upload Transaction Files - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.wait().selectSeedWaterfallForTotalReturnFileUploads();
        WaterfallDetailsPage.goToTransactionsTab();
        reporter.feature('NAV Creation Feature for Events');
        navFile = './resources/nav.xlsx';
        let inCorrectNavFile = './resources/Incorrect-Nav.xlsx';
        WaterfallDetailsPage.uploadIncorrectTotalReturnTransactionsDataFile(inCorrectNavFile);
        WaterfallDetailsPage.uploadToralReturnTransactionsDataFile(navFile);
        WaterfallDetailsPage.deleteTotalReturnTransactionsDataFile(navFile);

        // reporter.feature('Contribution Creation Feature for Events')
        // transactionContributionFile = './resources/contributions.xlsx';
        // WaterfallDetailsPage.uploadToralReturnTransactionsDataFile(transactionContributionFile);
        // WaterfallDetailsPage.deleteTotalReturnTransactionsDataFile(transactionContributionFile);

        // reporter.feature('Distribution Creation Feature for Events');
        // transactionDistributionFile = './resources/distributions.xlsx';
        // WaterfallDetailsPage.uploadToralReturnTransactionsDataFile(transactionDistributionFile);
        // WaterfallDetailsPage.deleteTotalReturnTransactionsDataFile(transactionDistributionFile);

        // reporter.feature('Prior Carried Interest Realized Creation Feature for Events');
        // priorCarriedInterestRealizedFile = './resources/prior_carry_realized.xlsx';
        // WaterfallDetailsPage.uploadToralReturnTransactionsDataFile(priorCarriedInterestRealizedFile);
        // WaterfallDetailsPage.deleteTotalReturnTransactionsDataFile(priorCarriedInterestRealizedFile);

        // reporter.feature('Prior Carried Interest Unrealized Creation Feature for Events');
        // priorCarriedInterestUnrealizedFile = './resources/prior_carry_unrealized.xlsx';
        // WaterfallDetailsPage.uploadToralReturnTransactionsDataFile(priorCarriedInterestUnrealizedFile);
        // WaterfallDetailsPage.deleteTotalReturnTransactionsDataFile(priorCarriedInterestUnrealizedFile);
        utils.checkBrowserLogs();
    });

    it('Validate Update and Delete Status for Zero Transactions File - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Prior Carried Interest Realized Creation Feature for Events');
        priorCarriedInterestRealizedNoTransactionsFile = './resources/prior_carry_realized_no_transactions.xlsx';
        WaterfallDetailsPage.validateNoTransactionsUploadFileStatus(priorCarriedInterestRealizedNoTransactionsFile);
        priorCarriedInterestRealizedFile = './resources/totalreturn_prior_carry_realized.xlsx';
        WaterfallDetailsPage.uploadToralReturnTransactionsDataFile(priorCarriedInterestRealizedFile);
        TransactionPage.selectPriorCarryRealizedTrxn.click();
        TransactionPage.transactionGridData();
        utils.checkBrowserLogs();  
    });
});
