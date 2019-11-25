import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';
import TransactionPage from '../../../src/pageobjects/transaction.page';

describe('Transaction File Uploads', () => {

    let oneRow, multipleRow, incorrectRows, wrongSchema;

    before(() => {
        reporter.feature('Login to Waterfall App to Upload and Delete Transaction Files');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Validate Upload Transaction Files for TPG Client - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSpecificClient('TPG');
        reporter.feature('Pick Waterfall');
        HomePage.wait().selectRealizedReturnCapitalWaterfall();
        HomePage.addRRCTiers('T1', 'T2', 'T3', 'T4');
        HomePage.validateTPGTransactionsUpload();
        oneRow = './resources/TPG_One row.xlsx';
        HomePage.uploadTPGOneRowTransactionsFiles(oneRow);
        multipleRow = './resources/TPG_Multiple rows.xlsx';
        HomePage.uploadTPGMultipleRowsTransactionsFiles(multipleRow);
        incorrectRows = './resources/TPG_Incorrect_rows.xlsx';
        HomePage.uploadTPGOneIncorrectRowsTransactionsFiles(incorrectRows);
        wrongSchema = './resources/TPG_Wrong_Schema.xlsx';
        HomePage.uploadTPGWrongSchemaTransactionsFiles(wrongSchema);
        utils.checkBrowserLogs();
    });

});
