import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import InfoPage from '../../../src/pageobjects/info.page';
import utils from '../../../src/utils/utilities';
import _ from 'lodash';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import TransactionPage from '../../../src/pageobjects/transaction.page'
import results from '../../../src/models/deal.by.deal.transactions.response';


describe('Transaction Download', () => {
    
    // before( () => { 
    //     reporter.feature('Login to Waterfall App');
    //     LoginPage.open();
    //     LoginPage.currentPageTitle().should.equal('Citco Login');
    //     LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    // });

    // it('Validate download (Deal By Deal) transactions files for all Buckets - ' + utils.generateCurrentDate('LLL'), () => {
    //     reporter.feature('Pick Client');
    //     HomePage.selectSeedClient();
    //     reporter.feature('Pick Waterfall');
    //     WaterfallDetailsPage.selectSeedWaterfallForDByDFileUploads();
    //     WaterfallDetailsPage.goToTransactionsTab();

    //     TransactionPage.downloadDealByDealTransactionsDataFile();
    //     let realizedInvestmentContributionsDatafilename = 'Automation-NonInvestran-DbyD-Realized Investment Contributions.xlsx';
    //     let realizedInvestmentContributionsData = utils.readTermsTemplateFile(realizedInvestmentContributionsDatafilename);
    //     expect(_.isMatch(realizedInvestmentContributionsData, results.realizedInvestmentContributionTemplateResultDetails())).to.be.true;

    //     let realizedGainLossDatafilename = 'Automation-NonInvestran-DbyD-Realized Gain _ Loss.xlsx';
    //     let realizedGainLossData = utils.readTermsTemplateFile(realizedGainLossDatafilename);
    //     expect(_.isMatch(realizedGainLossData, results.realizedGainLossTemplateResultDetails())).to.be.true;

    //     let investmentContributionsDatafilename = 'Automation-NonInvestran-DbyD-Investment Contributions.xlsx';
    //     let investmentContributionsData = utils.readTermsTemplateFile(investmentContributionsDatafilename);
    //     expect(_.isMatch(investmentContributionsData, results.investmentContributionTemplateResultDetails())).to.be.true;

    //     let writeOffsDatafilename = 'Automation-NonInvestran-DbyD-Write-Offs.xlsx';
    //     let writeOffsData = utils.readTermsTemplateFile(writeOffsDatafilename);
    //     expect(_.isMatch(writeOffsData, results.writeOffTemplateResultDetails())).to.be.true;

    //     let expenseContributionsDatafilename = 'Automation-NonInvestran-DbyD-Expense Contributions.xlsx';
    //     let expenseContributionsData = utils.readTermsTemplateFile(expenseContributionsDatafilename);
    //     expect(_.isMatch(expenseContributionsData, results.expenseContributionTemplateResultDetails())).to.be.true;

    //     let AFENumeratorDatafilename = 'Automation-NonInvestran-DbyD-AFE Numerator.xlsx';
    //     let AFENumeratorData = utils.readTermsTemplateFile(AFENumeratorDatafilename);
    //     expect(_.isMatch(AFENumeratorData, results.AFENumberatorTemplateResultDetails())).to.be.true;

    //     let AFEDenominatorDatafilename = 'Automation-NonInvestran-DbyD-AFE Denominator.xlsx';
    //     let AFEDenominatorData = utils.readTermsTemplateFile(AFEDenominatorDatafilename);
    //     expect(_.isMatch(AFEDenominatorData, results.AFEDenominatorTemplateResultDetails())).to.be.true;

    //     let priorCarriedInterestRealizedDatafilename = 'Automation-NonInvestran-DbyD-Prior Carried Interest - Realized.xlsx';
    //     let priorCarriedInterestRealizedData = utils.readTermsTemplateFile(priorCarriedInterestRealizedDatafilename);
    //     expect(_.isMatch(priorCarriedInterestRealizedData, results.priorCarriedRealizedTemplateResultDetails())).to.be.true;

    //     let priorCarriedInterestUnRealizedDatafilename = 'Automation-NonInvestran-DbyD-Prior Carried Interest - Unrealized.xlsx';
    //     let priorCarriedInterestUnRealizedData = utils.readTermsTemplateFile(priorCarriedInterestUnRealizedDatafilename);
    //     expect(_.isMatch(priorCarriedInterestUnRealizedData, results.priorCarriedUnRealizedTemplateResultDetails())).to.be.true;

    //     let navDatafilename = 'Automation-NonInvestran-DbyD-NAV.xlsx';
    //     let navData = utils.readTermsTemplateFile(navDatafilename);
    //     expect(_.isMatch(navData, results.navTemplateResultDetails())).to.be.true;

    // });

})
