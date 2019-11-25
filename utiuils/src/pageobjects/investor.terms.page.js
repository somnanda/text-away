import BasePage from './base.page';

class InvestorTermsPage extends BasePage {

    get termsMenu()                         { return $("[class] .nav-item:nth-of-type(4) [tabindex]"); }
    get investorTermsTab()                  { return $("[class] .nav-item:nth-of-type(4) .collapse .nav-link"); }
    get uploadIcon()                        { return $('//*[@id="upload-investor-terms-button"]'); }
    get fileUploadButton()                  { return $("[type='file']"); }
    get uploadSubmitButton()                { return $('//*[@id="upload-file-button"]'); }
    get breadcrumbText()                    { return $(".breadcrumb").getText(); }
    get uploadDownloadText()                { return $('.modal-body').getText(); }
    get okButton()                          { return $('//*[@id="modal-close-button"]'); }
    get tableGrid()                         { return $(".rt-tbody"); }
    get noCIPInvestorTerm()                 { return $("//*[@id='modal-title']").getText(); } 
    get okConfirmButton()                   { return $('//*[@id="modal-confirm-button"]'); }     

    get strings() {
        return {
            expectedTermsBreadcrumbText: 'Ui\nTerms',
            expectedUploadSuccessMessage: 'Values have been updated',
            expectedNoCIPInvestorTermMessage: 'No Investors were identified as the CIP.'
        };
    }

    confirmNoCIPInvestorTerms() {
        this.wait().noCIPInvestorTerm.should.equal(this.strings.expectedNoCIPInvestorTermMessage);
        this.okConfirmButton.click();
    }
       

    uploadInvestorTermsFile(filename) {
        this.wait().uploadIcon.click();
        this.fileUploadButton.chooseFile(filename);
        this.wait().uploadSubmitButton.click();
        this.longerWait().uploadDownloadText.should.contain(this.strings.expectedUploadSuccessMessage);
        this.okButton.click();
    }
}

export default new InvestorTermsPage();
