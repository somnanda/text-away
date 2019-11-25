import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import utils from '../../../src/utils/utilities';
import AdminPage from '../../../src/pageobjects/admin.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import InvestorTermsPage from '../../../src/pageobjects/investor.terms.page';

describe('Upload and Validate Invalid Terms - 1', () => {

    let invalidTermsDataFile, duplicateTermsDataFile, client, waterfallName, investorTermsFile, updatedInvestorTermsFile, duplicateInvestorNamesFile, duplicateInvestorIdFile, onlyInvestorNameFile, onlyInvestorIdFile;

    before(() => {
        reporter.feature('Login to Waterfall App to Upload Invalid and Duplicate Investor Terms');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    }, 2);

    it('Go to Investors Terms and Upload INVALID/DUPLICATE/MISSING Investor Terms Data and Validate unique values for Investor Terms', () => {
        reporter.feature('Invalid Investor Terms Upload');
        client = HomePage.selectRandomClient();
        reporter.feature('Create new Waterfall');
        waterfallName = HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfall();
        invalidTermsDataFile = 'InvestorTermsInvalidData-' + utils.generateRandomString(3) + '.xlsx';
        let data = utils.generateInvalidInvestorTermsData(1);
        utils.writeFile(invalidTermsDataFile, data);
        HomePage.addTiers();
        HomePage.uploadInvalidInvestorTerms(invalidTermsDataFile);
        reporter.feature('Duplicate Investor Terms Upload');
        duplicateTermsDataFile = './resources/duplicate_investor_terms.xlsx';
        HomePage.wait().uploadDuplicateInvestorTerms(duplicateTermsDataFile);
        reporter.feature('Missing Investor Terms Upload');
        HomePage.skipInvestorTerms();
        InvestorTermsPage.confirmNoCIPInvestorTerms();
        WaterfallDetailsPage.hitSubmitWaterfall();
        HomePage.wait().validateInvestorTermPopup();
        utils.checkBrowserLogs();
    });

    it('Validate build tiers values remain after coming back from next screen', () => {
        reporter.feature('CWF-1328');
        HomePage.wait();
        HomePage.selectDefaultClient();
        HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfallWithInvestranLink();
        HomePage.addTiers();
        HomePage.clickPreviousButton();
        HomePage.checkTotalReturnBuildTiersValues();
        HomePage.clickExpandMenu().wait().selectInvestranLinkedRealizedReturnCapitalWaterfall();
        HomePage.addRRCTiers();
        HomePage.clickPreviousButton();
        HomePage.checkDealByDealBuildTiersValues();
    });
});