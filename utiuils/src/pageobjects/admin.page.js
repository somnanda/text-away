import BasePage from "./base.page";
import util from '../utils/utilities';

class AdminPage extends BasePage {
    get admin()                                 {return $('//*[@id="admin"]/li'); }
    get breadcrumbText()                        { return $(" div > h4 ").getText(); }
    get adminClientName()                       { return $("//*[@id='admin-client-name-value']").getText(); };
    get unlink()                                { return $("//button[@id='unlink-client-config-button']"); }
    get investrandDb()                          { return $("//div[@id='select-investranDb']"); }
    get investrandDomain()                      { return $("//div[@id='select-investranDomainName']"); }
    get cancelSaveClient()                      { return $("//button[@id='cancel-save-client-config-button']"); }
    get saveClientButton()                      { return $("//button[@id='save-client-config-button']"); } 
    get unlinkPopUpMessage()                    { return $("//*[@id='modal-body']"); }  
    get okPopup()                               { return $("//*[@id='modal-close-button']"); }   
    get closeUnlinkPopupMessage()               { return $("//button[@id='close-modal']"); }
    get approveWaterfallIcon()                  { return $("//button[@aria-label='Approve Waterfall']"); }
    get editWaterfallIcon()                     { return $("//button[@aria-label='Edit Waterfall']"); }
    get deleteWaterfallIcon()                   { return $("//button[@aria-label='Delete Waterfall']"); }
    get waterfallOption()                       { return $("(//div[@id='lii-div'])[1]"); }
    get waterfallMenuButton()                   { return $('(//span[@ref="eMenu"])[1]'); }
    get waterfallDropDownEquals()               { return $("//*[@value='equals']"); }        
    get waterfallDropDownText()                 { return $('(//*[@type="text"])[3]'); }
    get selectDropdown()                        { return $('//*[@class="ag-filter-select"]'); }
    get searchFilter()                          { return $("(//*[@class='ag-tab'])[1]"); }
    get eventNameSearchIconFilter()             { return $("(//span[@ref='eMenu'])[1]"); }
    get setEventFilterToEquals()                { return $("//option[@value='equals']"); }
    get eventNameSearch()                       { return $('(//*[@type="text"])[3]'); }
    get eventNameSearchResult()                 { return $("//div[@col-id='eventName'] [@role='gridcell']"); }
    get selectedEventResult()                   { return $('//div[@col-id="eventResultNumber"] [@role="gridcell"]'); }
    get approveEventResultButton()              { return $("//*[@id='approve-button']"); }
    get addWaterfall()                          { return $('//*[@id="add-waterfall-button"]'); }
    get submitForApproval()                     { return $('//*[@id="submit-for-approval-button"]'); }
    get eventMarkAsReviewdButton()              { return $("//*[@id='mark-as-reviewed-button']"); }
    get backButton()                            { return $('//button[@id="back-to-home-button"]'); }
    get waterfallForEvents()                    { return $("(//div[@col-id='name'])[2]"); }
    get syncTab()                               { return $('//*[@id="Sync"]'); }
    get syncFromInvestranButton()               { return $("//*[@id='sync-from-investran-button']"); }
    get clientDropdDownName()                   { return $('//*[@id="client-selector"]/div/div/div/div[1]/p'); }
    get addEventButton()                        { return $('//*[@id="add-event-button"]'); }

    

    get strings() {
        return {
            expectedBreadcrumbText: 'Client Administration'
        };
    }

    get randomInvestranDomain() {
        const investranDomain = [util.investranDomain.AIGF, util.investranDomain.AIIF,util.investranDomain.ALGEBRISNPL,util.investranDomain.AVENUE,util.investranDomain.BLACKSTONE];
        return investranDomain[Math.floor(Math.random() * investranDomain.length)];
    }

    selectAdmin(client) {
        this.wait().admin.click();
        this.breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        let clientName = this.adminClientName;
        this.clientName == client;
    }

    selectInvestranDb() {
        this.wait().investrandDb.click();
        $(`li[data-value='INVPRD']`).click();
    }

    selectRandomInvestranDomain() {
        this.wait().investrandDomain.click();
        this.wait();
        let investrandDomain = this.randomInvestranDomain;
        this.wait();
        $(`li[data-value='${investrandDomain.NAME}']`).click();
    }

    selectInvestranDomain() {
        this.wait().investrandDomain.click();
        $(`li[data-value='Algebris NPL']`).click();
    }

    waitForDeletion() {
        this.longerWait();
    }

    unlinkInvestranConnectivity() {
        if(this.wait().unlink.isExisting()) {
            this.wait().unlink.click();
        }
        this.wait().saveClientButton.isEnabled().should.be.false;
    }

    toggleInvestranConnectivity() {
        if(this.wait().unlink.isExisting()) {
            this.wait().unlink.click();
            this.wait().saveClientButton.isEnabled().should.be.false;
        } else if(this.wait().saveClientButton.isExisting()) {
            this.wait().selectInvestranDb();
            this.wait().saveClientButton.isEnabled().should.be.false;
            this.wait().selectRandomInvestranDomain();
            this.wait().saveClientButton.click();
            this.wait().unlink.isEnabled().should.be.true;
        }
    }

    toggleInvestranConnectivityForPopup() {
        if(this.wait().unlink.isExisting()) {
            this.wait().unlink.click();
            if(this.wait().closeUnlinkPopupMessage.isExisting()) {
                this.wait().closeUnlinkPopupMessage.click();
            } else {
                this.wait().selectInvestranDb();
                this.wait().selectInvestranDomain();
                this.wait().saveClientButton.click();
            }
        } else if(this.wait().saveClientButton.isExisting()) {
            this.wait().selectInvestranDb();
            this.wait().saveClientButton.isEnabled().should.be.false;
            this.wait().selectInvestranDomain();
            this.wait().saveClientButton.click();
            this.wait().unlink.isEnabled().should.be.true;
        }
    }

    unlinkPopup(waterfall) {
        if(this.unlink.isExisting()) {
            this.unlink.click();
            this.okPopup.waitForVisible(15000);
            this.unlinkPopUpMessage.getText().should.contain(waterfall);
            this.okPopup.click();
        }
    }

    bottomNavigationBar() {
        this.unlink.isExisting().should.be.false;
    }

    searchForWaterfallForActionButtons(waterfall) {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue(waterfall);
        return this;
    }

    searchForWaterfallForActionButtonsAndValidateEventFlow(waterfall) {
        this.wait().waterfallOption.click();
        this.waterfallMenuButton.click();
        if(this.wait().clientDropdDownName.getText() == 'BIZ' || this.wait().clientDropdDownName.getText() == 'QA_UI' || this.wait().clientDropdDownName.getText() == 'QA') {
            this.wait().addWaterfall.isEnabled().should.be.false;
        }
        this.searchFilter.click();
        this.selectDropdown.click();
        this.waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue(waterfall);
        this.validateActionButtons();
        this.wait().waterfallForEvents.click();
        return this;
    }

    validateActionButtons() {
        this.wait().editWaterfallIcon.isEnabled().should.be.false;
        this.wait().deleteWaterfallIcon.isEnabled().should.be.false;
        this.wait().addWaterfall.isEnabled().should.be.false;
    }

    validateAddEventButton() {
        if (this.wait().clientDropdDownName.getText() == 'QA_UI') {
            this.addEventButton.isEnabled().should.be.false;
        } else {
            this.addEventButton.isEnabled().should.be.true;
        }
    }

    validateEventResultSubmitForApproveButton(eventName) {
        this.wait().eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.wait().selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.wait().eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        this.wait().eventNameSearchResult.click();
        this.longWait();
        this.selectedEventResult.waitForVisible();
        this.wait().selectedEventResult.click();
        this.submitForApproval.waitForVisible();
        if(eventName == 'QA_UI - Submit For Approval Button') {
            this.wait().submitForApproval.isEnabled().should.be.false;
            this.wait().eventMarkAsReviewdButton.isEnabled().should.be.false;
        } else {
            this.wait().submitForApproval.isEnabled().should.be.true;
            this.wait().eventMarkAsReviewdButton.isEnabled().should.be.true;
        }  
        this.wait().backButton.click();
    }

    validateEventResultApproveButton(eventName) {
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        this.eventNameSearchResult.waitForVisible();
        this.wait().eventNameSearchResult.click();
        this.longWait();
        this.selectedEventResult.waitForVisible();
        this.wait().selectedEventResult.click();
        this.approveEventResultButton.waitForVisible();
        if(eventName == 'QA_API - Approve-Events' || eventName == 'BIZ - Approve- Events' || eventName == 'QA_UI - Approve- Events') {
            this.approveEventResultButton.isEnabled().should.be.false;
        } else {
            this.approveEventResultButton.isEnabled().should.be.true;
        }  
    }

    validateSyncFromInvestranButton(eventName) {
        this.syncTab.waitForVisible();
        this.syncTab.click();
        if(eventName == 'QA_UI - Approve- Events') {
            this.syncFromInvestranButton.isEnabled().should.be.false;
        } else {
            this.syncFromInvestranButton.isEnabled().should.be.true;
        }  
        
    }
}

export default new AdminPage();