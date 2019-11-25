import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import utils from '../../../src/utils/utilities';
import AdminPage from '../../../src/pageobjects/admin.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import InvestorTermsPage from '../../../src/pageobjects/investor.terms.page';

describe('Upload and Validate Invalid Terms - 3', () => {
    
    let invalidTermsDataFile, duplicateTermsDataFile, client, waterfallName, investorTermsFile, updatedInvestorTermsFile, duplicateInvestorNamesFile, duplicateInvestorIdFile, onlyInvestorNameFile, onlyInvestorIdFile;
    
    before( () => { 
        reporter.feature('Login to Waterfall App to Upload Invalid and Duplicate Investor Terms');
        LoginPage.open();        
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Go to Investors Terms and Upload INVALID/DUPLICATE/MISSING Investor Terms Data and Validate unique values for Investor Terms', () => {
        reporter.feature('Invalid Investor Terms Upload');
        client = HomePage.selectRandomClient();
        reporter.feature('Create new Waterfall');
        waterfallName = HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfall();
        invalidTermsDataFile = 'InvestorTermsInvalidData-' + utils.generateRandomString(3) + '.xlsx';
        let data = utils.generateInvalidInvestorTermsData(1);
        utils.writeFile(invalidTermsDataFile, data);
        HomePage.addTiers();
        reporter.feature('CWF-1256');
        duplicateInvestorNamesFile = './resources/duplicateInvestorNamesFile.xlsx';
        HomePage.wait().uploadInvestorTerms(duplicateInvestorNamesFile);
        duplicateInvestorIdFile = './resources/duplicateInvestorIdFile.xlsx';
        HomePage.wait().uploadDuplicateIdInvestorTerms(duplicateInvestorIdFile);
        onlyInvestorNameFile = './resources/onlyInvestorNameFile.xlsx';
        HomePage.wait().uploadMissingIdOrNameInvestorTerms(onlyInvestorNameFile);
        onlyInvestorIdFile = './resources/onlyInvestorIdFile.xlsx';
        HomePage.wait().uploadMissingIdOrNameInvestorTerms(onlyInvestorIdFile);
        investorTermsFile = './resources/updated_terms.xlsx';
        HomePage.wait().uploadInvestorTerms(investorTermsFile);
        HomePage.clickSave();
        InvestorTermsPage.confirmNoCIPInvestorTerms(); 
        WaterfallDetailsPage.submitWaterfallForApproval();
        HomePage.addWaterfall.isEnabled().should.be.true;
        utils.checkBrowserLogs();
    });
});