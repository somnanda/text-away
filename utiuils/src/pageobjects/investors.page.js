import BasePage from './base.page';
import HomePage from './home.page';

class InvestorsDataPage extends BasePage {

    get uploadIcon()                     { return $('//*[@id="upload"]'); }
    get downloadIcon()                   { return $('//*[@id="download"]'); }
    get chooseFileButton()               { return $('//*[@id="file"]'); }
    get uploadSubmitButton()             { return $('//*[@id="upload-file-button"]'); }
    get uploadText()                     { return $('.modal-content .modal-body').getText(); }
    get deleteOkButton()                 { return $('//*[@id="modal-confirm-button"]'); }
    get uploadOkButton()                 { return $('//*[@id="modal-close-button"]'); }
    get invalidUploadText()              { return $(""); }
    get investorsIdNameData()            { return $$(".rt-tr-group"); }
    get deleteInvestorButton()           { return $('//*[@id="delete"]'); }
    get deleteInvestorText()             { return $('.modal-body'); }
    get emptyGrid()                      { return $('/html/body/div/div/main/div[2]/div/div[2]/div/div/div/div/div/div[1]/div/div[3]/div[2]/div'); }
    get tableGrid()                      { return $("/html/body/div/div/main/div[2]/div/div[2]/div/div/div/div/div/div[1]/div/div[3]/div[2]/div"); }
    get manageInvestors()                { return $('//a[@id="manage-investors"] //div[@id="lii-div"]'); }
    get breadcrumbText()                 { return $("ol > li").getText(); }
    get fileUploadButton()               { return $("input[type='file']"); }

    get strings() {
        return {
            expectedBreadcrumbText: 'INVESTORS',
            expectedUploadSuccessMessage: 'Values Have been Updated',
            expectedUploadUnsuccessMessage: 'Null value on line: 2, 3',
            expectedDuplicateMessage: 'Duplicate value on line: 3',
            expectedDeleteInvestorMessage: 'Are you sure you want to delete all investor data?',
            expectedEmptyGridMessage: 'No Rows To Show'
        };
    }

    manageInvestorsTab() {
        this.manageInvestors.click();
        this.breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
    }

    tableGridSize() {
        let grid = this.wait().tableGrid.getText().split('\n');
        return grid.length;
    }

    isDataPrepopulated() {
        if (this.tableGrid.getText().trim()) {
            return true;
        } else {
            return false;
        }
    }

    uploadValidInvestorsData(filename) {
        this.wait().uploadIcon.click();
        this.fileUploadButton.chooseFile(filename);
        this.wait().uploadSubmitButton.click();
        this.longerWait().uploadText.should.contain(this.strings.expectedUploadSuccessMessage);
        this.wait().uploadOkButton.click();
    }

    uploadInvalidInvestorData(filename) {
        this.uploadIcon.click();
        this.fileUploadButton.chooseFile(filename);
        this.uploadSubmitButton.click(); 
        this.longerWait().uploadText.should.contain(this.strings.expectedUploadUnsuccessMessage);
        this.wait().uploadOkButton.click();
    }

    uploadDuplicateInvestorData(filename) {
        this.uploadIcon.click();
        this.fileUploadButton.chooseFile(filename);
        this.uploadSubmitButton.click(); 
        this.longerWait().uploadText.should.contain(this.strings.expectedDuplicateMessage);
        this.wait().uploadOkButton.click();
    }

    deleteInvestorData() {
        this.wait().deleteInvestorButton.click();
        this.wait().deleteInvestorText.getText().should.contain(this.strings.expectedDeleteInvestorMessage);
        this.wait().deleteOkButton.click();
        return this;
    }

    noDataGrid() {
        this.wait().emptyGrid.getText().should.contain('');
    }
 } 
 
export default new InvestorsDataPage();
