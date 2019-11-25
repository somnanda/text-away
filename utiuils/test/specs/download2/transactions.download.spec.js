import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import InfoPage from '../../../src/pageobjects/info.page';
import utils from '../../../src/utils/utilities';
import _ from 'lodash';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import TransactionPage from '../../../src/pageobjects/transaction.page'
import results from '../../../src/models/nav.transaction.reponse';

describe('Transaction Download', () => {
    
    // before( () => { 
    //     reporter.feature('Login to Waterfall App');
    //     LoginPage.open();
    //     LoginPage.currentPageTitle().should.equal('Citco Login');
    //     LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    // });

    // it('Validate Download and Upload back transactions file - ' + utils.generateCurrentDate('LLL'), () => {
    //     reporter.feature('Pick Client');
    //     HomePage.selectSeedClient();
    //     reporter.feature('Pick Waterfall');
    //     WaterfallDetailsPage.selectSeedWaterfallForTotalReturnFileUploads();
    //     WaterfallDetailsPage.goToTransactionsTab();
    //     let transactionNavFile = './resources/nav.xlsx';
    //     WaterfallDetailsPage.uploadToralReturnTransactionsDataFile(transactionNavFile);
    //     TransactionPage.downloadTransactionsFile();
    //     let filename = 'Automation-NonInvestran-NAV.xlsx';
    //     let navData = utils.readTermsTemplateFile(filename);
    //     expect(_.isMatch(navData, results.navTransactionTemplateResultDetails())).to.be.true;
    //     WaterfallDetailsPage.uploadToralReturnTransactionsDataFile(transactionNavFile);
    //     utils.removeTermsTemplateFile(filename);
    // });

    // it('Validate download (Total Return) transactions file for all Buckets - ' + utils.generateCurrentDate('LLL'), () => {
    //     TransactionPage.downloadContributionTransactionsFile();
    //     let filename = 'Automation-NonInvestran-Contributions.xlsx';
    //     let contributionData = utils.readTermsTemplateFile(filename);
    //     expect(_.isMatch(contributionData, results.contributionTransactionTemplateResultDetails())).to.be.true;

    //     TransactionPage.downloadDistributionTransactionsFile();
    //     let distriubutionfilename = 'Automation-NonInvestran-Distributions Net of Carry.xlsx';
    //     let distributionData = utils.readTermsTemplateFile(distriubutionfilename);
    //     expect(_.isMatch(distributionData, results.distributionTemplateResultDetails())).to.be.true;

    //     TransactionPage.downloadPCRealizedTransactionsFile();
    //     let pcRealizedfilename = 'Automation-NonInvestran-Prior Carried Interest - Realized.xlsx';
    //     let pcRealizedData = utils.readTermsTemplateFile(pcRealizedfilename);
    //     expect(_.isMatch(pcRealizedData, results.pcRealizedTransactionTemplateResultDetails())).to.be.true;

    //     TransactionPage.downloadPCUnrealizedTransactionsFile();
    //     let pcUnRealizedfilename = 'Automation-NonInvestran-Prior Carried Interest - Unrealized.xlsx';
    //     let pcUnRealizedData = utils.readTermsTemplateFile(pcUnRealizedfilename);
    //     expect(_.isMatch(pcUnRealizedData, results.pcUnRealizedTransactionTemplateResultDetails())).to.be.true;
    // });
})
