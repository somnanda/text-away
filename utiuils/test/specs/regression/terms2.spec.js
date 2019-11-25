import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import utils from '../../../src/utils/utilities';
import AdminPage from '../../../src/pageobjects/admin.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import InvestorTermsPage from '../../../src/pageobjects/investor.terms.page';

describe('Validate Investor Type and Term error message', () => {
    
    let client, waterfallName, investorTermsFile, updatedInvestorTermsFile, clientId, env;
    
    before( () => { 
        reporter.feature('Login to Waterfall App to Upload Invalid and Duplicate Investor Terms');
        LoginPage.open();        
        env = LoginPage.open();
        if(env == 'qat') {
            clientId = '20';
        } else {
            clientId = '28';
        };
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    // Just uncomment this test once Bug for Edit default terms is fixed 

    // it('Validate default Investor term column ', () => {
    //     reporter.feature('CWF-1374');
    //     client = HomePage.selectSpecificClient('QA');
    //     waterfallName = HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfallWithInvestranLink();
    //     HomePage.addTiers().clickSave();
    //     HomePage.validateDefaultTermColumn();
    //     utils.checkBrowserLogs();
    // });

    it('Validation of error message when uploading new investor term file and Updated terms file post Sync and Uploading', () => {
        reporter.feature('CWF-1184');
        client = HomePage.selectSpecificClient('QA');
        waterfallName = HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfallWithInvestranLink();
        HomePage.addTiers().clickSave();
        HomePage.toggleTermsWithTab();
        investorTermsFile = './resources/updated_terms.xlsx';
        HomePage.deleteAndUploadNewInvestorTermFile(investorTermsFile);
    });


    // Need to run and test later once we have Downloads in new jenkins

    // it('Validate Download and Upload back of Same Invesor Terms file ', () => {
    //     HomePage.selectSeedClient();
    //     reporter.feature('Pick Waterfall');
    //     waterfallName = HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfall();
    //     HomePage.addTiers();
    //     investorTermsFile = './resources/updated_terms.xlsx';
    //     HomePage.uploadInvestorTerms(investorTermsFile);
    //     HomePage.confirmNoCIPInvestorTerms();
    //     WaterfallDetailsPage.submitWaterfallForApproval();
    //     WaterfallDetailsPage.searchAndEditWaterfall(waterfallName);
    //     HomePage.clickSave();
    //     HomePage.clickSave();
    //     let downloadedInvestorTerm = `/var/lib/jenkins/file-downloads/inv_terms_${clientId}_${waterfallName}.xlsx`
    //     HomePage.downloadAndUploadSameFile(downloadedInvestorTerm);
    // });

});