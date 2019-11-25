import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import InfoPage from '../../../src/pageobjects/info.page';
import utils from '../../../src/utils/utilities';
import _ from 'lodash';
import results from '../../../src/models/terms.response';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';

describe('Terms Download', () => {

    let investorTermsFile, clientId, waterfallName, env;
    
    before( () => { 
        reporter.feature('Login to Waterfall App');
        env = LoginPage.open();
        if(env == 'qat') {
            clientId = '20';
        } else {
            clientId = '28';
        };
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Download Default Investor Terms file', () => {
        reporter.feature('Verify Build Tiers Error Messages');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfall('Automation-EmptyTerms');
        let waterfallId = WaterfallDetailsPage.goToTermsTab().getWaterfallIdFromURL();
        WaterfallDetailsPage.downloadInvestorTermsTemplate();
        let filename = `investor_terms_${clientId}_a0137699-ec88.xlsx`;
        let termsTemplateData = utils.readTermsTemplateFile(filename);
        expect(_.isMatch(termsTemplateData, results.termsTemplateResultDetails())).to.be.true;
        utils.removeTermsTemplateFile(filename);
    });

    // it('Upload and Download Investor Terms file', () => {
    //     HomePage.selectSeedClient();
    //     reporter.feature('Pick Waterfall');
    //     waterfallName = HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfall();
    //     HomePage.addTiers();
    //     investorTermsFile = './resources/updated_terms.xlsx';
    //     HomePage.uploadInvestorTerms(investorTermsFile);
    //     HomePage.confirmNoCIPInvestorTerms();
    //     WaterfallDetailsPage.submitWaterfallForApproval();
    //     WaterfallDetailsPage.selectSeedWaterfall(waterfallName);
    //     let waterfallId = WaterfallDetailsPage.goToTermsTab().getWaterfallIdFromURL();
    //     WaterfallDetailsPage.downloadInvestorTermsTemplate();
    //     let filename = `investor_terms_${clientId}_${waterfallId}.xlsx`;
    //     let termsTemplateData = utils.readTermsTemplateFile(filename);
    //     expect(_.isMatch(termsTemplateData, results.termsDownloadDetails())).to.be.true;
    //     utils.removeTermsTemplateFile(filename);
    // });
})
