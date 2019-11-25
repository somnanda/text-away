import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import utils from '../../../src/utils/utilities';
import AdminPage from '../../../src/pageobjects/admin.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import InvestorTermsPage from '../../../src/pageobjects/investor.terms.page';

describe('Validate Investor Type and Term error message', () => {

    let client, waterfallName, investorTermsFile, updatedInvestorTermsFile, clientId, env;

    before(() => {
        reporter.feature('Login to Waterfall App to Upload Invalid and Duplicate Investor Terms');
        LoginPage.open();
        env = LoginPage.open();
        if (env == 'qat') {
            clientId = '20';
        } else {
            clientId = '28';
        };
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    // TODO: Still failing on DEV

    // it('Validate Investran Terms does not always have default Type as LP post Sync ', () => {
    //     reporter.feature('CWF-1498');
    //     client = HomePage.selectSpecificClient('QA');
    //     reporter.feature('Pick Waterfall');
    //     WaterfallDetailsPage.selectandEditSeedWaterfallWithInvestranLink();
    //     HomePage.clickSave();
    //     HomePage.clickSave();
    //     HomePage.clickSave();
    //     WaterfallDetailsPage.editInvestorTermsType();
    //     utils.checkBrowserLogs();
    // });

    //TODO: Issue in this Test @hitesh

    // it('Validate Investran Terms values post synch for Multiplier ', () => {
    //     client = HomePage.selectSpecificClient('QA');
    //     WaterfallDetailsPage.searchAndEditWaterfall('Automation-Investran-Multiplier');
    //     HomePage.clickSave();
    //     HomePage.clickSave();
    //     HomePage.clickSave();
    //     WaterfallDetailsPage.validateMultiplierTerm();
    //     utils.checkBrowserLogs();
    // });
});