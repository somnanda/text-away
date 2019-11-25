import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import InfoPage from '../../../src/pageobjects/info.page';
import utils from '../../../src/utils/utilities';
import InvestorsDataPage from '../../../src/pageobjects/investors.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';

describe('Creating and Managing Waterfall', () => {

    let client, investorTermsFile, investorFile, downloadedExcelData, validTermsDataFile;

    before(() => {
        reporter.feature('Login to Waterfall App');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Build Tiers Error validation Check', () => {
        reporter.feature('Verify Build Tiers Error Messages');
        let client = HomePage.selectRandomClient();
        let waterfallName = HomePage.clickExpandMenu().wait().selectRealizedReturnCapitalWaterfall();
        HomePage.addTiersErrorMessageValidation('T1', 'T2', 'T3', 'T4');
    });

    it('Create a Waterfall and Verify Realized Return of Capital workflow in Add-Waterfall also Verify Build tiers error msg ', () => {
        reporter.feature('Verify Build Tiers Error Messages');
        let client = HomePage.selectRandomClient();
        let waterfallName = HomePage.wait().selectRealizedReturnCapitalWaterfall();
        reporter.feature('Realized Return of Capital Workflow');
        HomePage.addRRCTiers('T1', 'T2', 'T3', 'T4');
        investorTermsFile = './resources/updated_terms.xlsx';
        HomePage.uploadInvestorTerms(investorTermsFile);
        HomePage.confirmNoCIPInvestorTerms();
        let list = HomePage.getWaterfallDetails().split('\n');
        list.should.include.members(['EXPORT PAGE', 'Waterfall Details', 'Waterfall Name', waterfallName, 'Waterfall Type',
            'Realized Return of Capital (American / Deal-by-Deal)', 'Currency', 'Calculation Results Method',
            'Specific Investor ID', 'Tier Details', 'Tier 1 - Return of Realized Investment Capital',
            'LPA Reference', 'T1', 'Tier 2 - Return of Write-Offs', 'T2', 'Tier 3 - Return of Expense (Allocable)',
            'T3', 'Tier 4 - Pref. Return', 'Day-Count Method', 'T4', 'Compounding Frequency',
            'Annually', 'Default Target (% to LP)', '1', 'Calc. Method', 'IRR', 'Tier 5 - Catch-Up', 'Default Allocation (% to CIP)',
            'Default Target (% to CIP)', 'Tier 6 - Final Split', 'Investor Terms', 'To view investor terms please download the file', 'DOWNLOAD']);
        utils.checkBrowserLogs();
    });

    it('Create a Custom Investor Id Waterfall', () => {
        reporter.feature('Verify Build Tiers Error Messages');
        client = HomePage.selectSeedClient();
        reporter.feature('Create new Waterfall');
        HomePage.wait().selectRandomlyCreatedWaterfallWithInvestranLink(true);
        HomePage.addTiers();
        HomePage.saveTranscationMappings();
        HomePage.clickSave();
        browser.waitUntil(() => {
            return HomePage.noInvestorsWithCIPPopUp.isVisible();
        }, 30000, "Pop up Message did not show up");
        HomePage.noCIPInvestorTerm.should.equal(HomePage.strings.expectedNoCIPInvestorTermMessage);
        HomePage.wait().okConfirmButton.click();
        browser.waitUntil(() => {
            return HomePage.submitForApproval.isVisible();
        }, 30000, "Waterfall Details page did not load.");
        HomePage.validateCalculationMethod('Common Investor ID');
        utils.checkBrowserLogs();
    });

    it('Validate Next button is enabled even after creating duplicate Waterfall Name', () => {
        reporter.feature('Bug - CWF-1335');
        HomePage.selectSpecificClient('QA');
        HomePage.wait().selectDuplicateWaterfallName();
        utils.checkBrowserLogs();
    });

    it('Validate Snack Bar Message', () => {
        reporter.feature('Bug - CWF-1335');
        HomePage.selectSpecificClient('QA');
        HomePage.verifySnackBarForInProgresStatus();
    });

    it('Validate default hierarchy for Aggregate Expense Tier', () => {
        reporter.feature('Waterfall Creation Feature');
        client = HomePage.selectSpecificClient('QA');
        const waterfallName = HomePage.clickExpandMenu().wait().selectRandomlyCreatedWaterfallWithInvestranLinkDBD();
        HomePage.addRRCTiersWithAggregateExpense('T1', 'T2', 'T3', 'T4');
        HomePage.validateAggregateExpenseDefaultHierarchy();
        utils.checkBrowserLogs();
    });

})
