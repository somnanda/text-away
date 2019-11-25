import BasePage from './base.page';
import HomePage from './home.page';
import WaterfallDetailsPage from './waterfall.details.page';
import util from '../utils/utilities';

class TransactionPage extends BasePage {

    get transactionMenu()                           { return $("[class] .nav-item:nth-of-type(5) [tabindex]"); }
    get navButton()                                 { return $("//*[@id='Waterfall NAV']"); }
    get contributionsButton()                       { return $(".show .nav-item:nth-of-type(2) .nav-link"); }
    get distributionsButton()                       { return $(".show .nav-item:nth-of-type(3) .nav-link"); }
    get priorCarriedInterestButton()                { return $(".show .nav-item:nth-of-type(4) .nav-link"); }
    get uploadIcon()                                { return $('//*[@id="uploadtransactionsbutton"]'); }
    get uploadInvestorTermsIcon()                   { return $('//*[@id="upload-investor-terms-button"]'); }
    get fileUploadButton()                          { return $("input[type='file']"); }
    get uploadSubmitButton()                        { return $('//*[@id="upload-file-button"]'); }
    get breadcrumbText()                            { return $(".breadcrumb").getText(); }
    get uploadDownloadText()                        { return $(".modal-body").getText(); }
    get okButton()                                  { return $('//*[@id="modal-close-button"]'); }
    get confirmDeleteButton()                       { return $('//*[@id="modal-confirm-button"]'); }
    get deleteTransactionsButton()                  { return $('//*[@id="deletetransactionsbutton"]'); }
    get tableGrid()                                 { return $("/html/body/div/div/main/div[2]/div/div[2]/div/div/div/div/div/div[1]/div/div[3]/div[2]/div"); }
    get selectNav()                                 { return $("(//div[@type='text'])[2]"); }
    get selectContribution()                        { return $("(//div[@type='text'])[3]"); }
    get transactionMapingLegend()                   { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/div/legend'); }
    get sourceTransactionText()                     { return $("(//div[@col-id='Source'])[2]").getText(); }
    get addTransType()                              { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/form/div/div[1]/div[1]/div[1]/div/div[3]/p[2]').getText(); }
    get removedTransType()                          { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/form/div/div[1]/div[1]/div[1]/div/div[4]/p[2]').getText(); }
    get selectedHierarchy()                         { return $("(//div[@type='text'])[2]").getText();}
    get checkUncheckBox()                           { return $$("//*[@class='ag-selection-checkbox']"); }
    get unCheckedChek()                             { return $$("//*[contains (@class,'ag-icon-checkbox-unchecked') and not(contains (@class,'ag-hidden'))]"); } 
    get navUncheckAll()                             { return $("(//*[@ref='cbSelectAll'])[1]"); }
    get navTotalRemovedRows()                       { return $("(//*[@class='csg-ag-grid'])[1]"); }
    get navAddTranTypeButton()                      { return $("(//button[@id='TR_NAV-add-transactiontype-button'])[1]"); }
    get addTranSearchBox()                          { return $("(//div[@type='text'])[7]"); }
    get addTranTypeSaveButton()                     { return $("//button[@id='add-trans-type-save-button']"); }
    get addTranTypeCancelButton()                   { return $("//button[@id='add-trans-type-cancel-button']"); }
    get addTranTypeCloseButton()                    { return $("//button[@id='close-modal']"); }
    get clickSearchWaterfallTable()                 { return $("//div[@ref='eCenterViewport']"); }
    get searchWaterfallIcon()                       { return $('/html/body/div/div/main/div[2]/div/div[2]/div/div/div/div[1]/div/div[1]/div[2]/div/div/div[1]/div[2]/span/span'); }
    get waterfallDropDownEquals()                   { return $("//*[@value='equals']"); }                                                                                    
    get waterfallDropDownText()                     { return $('(//*[@type="text"])[3]'); }
    get waterfallMenuButton()                       { return $('//*[@id="waterfall"]/li'); }
    get editWaterfallIcon()                         { return $("//button[@aria-label='Edit Waterfall']"); }
    get transactionMappingGrid()                    { return $("form > div"); }
    get cancelCreateWaterfall()                     { return $('//*[@id="cancel-create-waterfall-button"]'); }
    get previousButton()                            { return $("//button[@id='prev-create-waterfall-button']"); }
    get selectPriorCarryRealizedTrxn()              { return $("(//*[@col-id='loadStatus'])[5]"); }
    get transactionGrid()                           { return $("(//*[@row-id='0'])[2]"); }
    get downloadNavTransaction()                    { return $("//*[@id='download-transactions-button-TR_NAV']"); }
    get downloadContributionTransaction()           { return $("//*[@id='download-transactions-button-TR_CONT']"); }
    get downloadDistributionTransaction()           { return $("//*[@id='download-transactions-button-TR_DIST']"); }
    get downloadPCRealizednTransaction()            { return $("//*[@id='download-transactions-button-TR_PC_REAL']"); }
    get downloadPCUnRealizedTransaction()           { return $("//*[@id='download-transactions-button-TR_PC_UNREAL']"); }
    get syncFromInvestranButton()                   { return $("//*[@id='sync-from-investran-button']"); }
    get snackBarMessage()                           { return $("//*[@aria-describedby='message-id']"); } 
    get syncFromInvestran()                         { return $("//*[@id='sync-investran-transaction-button']"); }
    get downloadDBDRealizedInvestment()             { return $("//*[@id='download-transactions-button-DD_REAL_INV_CONT']"); }
    get downloadDBDRealizedGainLoss()               { return $("//*[@id='download-transactions-button-DD_REAL_GAIN_LOSS']"); }
    get downloadDBDInvestmentContributions()        { return $("//*[@id='download-transactions-button-DD_INV_CONT']"); }
    get downloadDBDWriteoffs()                      { return $("//*[@id='download-transactions-button-DD_WRT_OFF']"); }
    get downloadDBDExpenseContributions()           { return $("//*[@id='download-transactions-button-DD_EXP_CONT']"); }
    get downloadDBDAFENumerator()                   { return $("//*[@id='download-transactions-button-DD_AFE_NUM']"); }
    get downloadDBDAFEDenominator()                 { return $("//*[@id='download-transactions-button-DD_AFE_DEN']"); }
    get downloadDBDPCIRealized()                    { return $("//*[@id='download-transactions-button-DD_PC_REAL']"); }
    get downloadDBDPCIUnRealized()                  { return $("//*[@id='download-transactions-button-DD_PC_UNREAL']"); }
    get downloadDBDNav()                            { return $("//*[@id='download-transactions-button-DD_NAV']"); }
    get dateAndTime()                               { return $('//*[@id="root"]/div/main/div[2]/div/div[2]/div[2]/div[1]/p'); }  
    get eventName()                                 { return $('/html/body/div/div/main/div[2]/div/div[2]/div[2]/form/div[1]/div/input');}
    get cashDistributionEventType()                 { return $("//input[@value='Cash Distribution']");}
    get eventDate()                                 { return $('//input[@id="date-picker"]');}
    get eventComments()                             { return $("//*[@name='comments']");}
    get calculateEventButton()                      { return $('//*[@id="generate-results-button"]');}
    get confirmationButton()                        { return $('//*[@id="modal-confirm-button"]');}
    get selectWaterfallMenuButton()                 { return $('(//span[@ref="eMenu"])[1]'); }
    get searchFilter()                              { return $("(//*[@class='ag-tab'])[1]"); }
    get selectDropdown()                            { return $('//*[@class="ag-filter-select"]'); }
    get selectEvent()                               { return $("(//*[@row-index='0'])[2]"); }
    get selectEventResult()                         { return $("(//*[@row-index='0'])[5]"); }
    get eventResultTime()                           { return $("(//*[@col-id='updatedTime'])[2]"); }
    get syncButton()                                { return $("//*[@id='Sync']"); }  
    get syncStartTime()                             { return $("(//*[@col-id='startTime'])[2]"); }
    get syncEndTime()                               { return $("(//*[@col-id='endTime'])[2]"); }
    get saveEventButton()                           { return $("//*[@id='save-event-button']"); }
    get addEventResultButton()                      { return $("(//*[@title='Add Result'])[1]"); } 
    get editEventButton()                           { return $("(//*[@title='Edit'])[1]"); }
    get eventBackButton()                           { return $("//*[@id='back-events-home-button']"); }
    get addEventButton()                            { return $('//*[@id="add-event-button"]'); }

    get strings() {
        return {
            expectedNavBreadcrumbText: 'Transactions\nWaterfall NAV',
            expectedTransactionBreadcrumbText: 'Ui\nTransactions\nContributions',
            expectedDistributionBreadcrumbText: 'Transactions\nDistributions Gross of Carry',
            expectedPriorCarriedInterestBreadcrumbText: 'Transactions\nPrior Carried Interest',
            expectedSuccessMessage: 'Waterfall successfully created.',
            expectedUploadSuccessMessage: 'Values have been updated',
            deleteNavTransactionsMessage: 'Are you sure you want to delete all nav transactions data for current waterfall?',
            deleteContributionTransactionsMessage: 'Are you sure you want to delete all contribution transactions data for current waterfall?',
            deleteDistributionTransactionsMessage: 'Are you sure you want to delete all distribution transactions data for current waterfall?',
            deletePriorCarriedTransactionsMessage: 'Are you sure you want to delete all prior_carried_interest transactions data for current waterfall?',
            expectedSynCreationSnackBarMessage: 'The sync process was created and is currently in progress.',
            expectedSyncCompletionSnackBarMessage: 'The sync process was completed successfully.',
            expectedDownloadTransactionMessage: 'downloaded successfully'
        };
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

    uploadTransactionsDataFile(filename) {
        this.wait().uploadIcon.click();
        this.fileUploadButton.chooseFile(filename);
        this.wait().uploadSubmitButton.click();
        this.longerWait().uploadDownloadText.should.contain(this.strings.expectedUploadSuccessMessage);
        this.okButton.click();
    }

    deleteContributionTransactionsData() {
        this.wait().deleteTransactionsButton.click();
        this.wait().uploadDownloadText.should.contain(this.strings.deleteContributionTransactionsMessage);
        this.confirmDeleteButton.click();
        return this;
    }

    deleteDistributionTransactionsData() {
        this.wait().deleteTransactionsButton.click();
        this.wait().uploadDownloadText.should.contain(this.strings.deleteDistributionTransactionsMessage);
        this.confirmDeleteButton.click();
        return this;
    }

    deletePriorCarriedTransactionsData() {
        this.wait().deleteTransactionsButton.click();
        this.wait().uploadDownloadText.should.contain(this.strings.deletePriorCarriedTransactionsMessage);
        this.confirmDeleteButton.click();
        return this;
    }

    deleteNavTransactionsData() {
        this.wait().deleteTransactionsButton.click();
        this.wait().uploadDownloadText.should.contain(this.strings.deleteNavTransactionsMessage);
        this.confirmDeleteButton.click();
        return this;
    }

    downloadContributionTransactionsFile() {
        this.downloadContributionTransaction.click();
       
    }

    downloadDistributionTransactionsFile() {
        this.downloadDistributionTransaction.click();
    }

    downloadPCRealizedTransactionsFile() {
        this.downloadPCRealizednTransaction.click();
    }

    downloadPCUnrealizedTransactionsFile() {
        browser.execute(function () {
            window.scrollTo({
                top: 500,
                left: 100,
                behavior: 'smooth'
              });
        });
        this.downloadPCUnRealizedTransaction.click();
    }

    downloadDealByDealTransactionsDataFile() {
        const dealByDealElements = ['REAL_INV_CONT', 'REAL_GAIN_LOSS', 'INV_CONT', 'WRT_OFF', 'EXP_CONT', 'AFE_NUM', 'AFE_DEN', 'PC_REAL', 'PC_UNREAL', 'NAV'];
        for(let i=0; i<10 ; i++) {
            browser.waitUntil(() => {
                return  $(`//*[@id='download-transactions-button-DD_${dealByDealElements[i]}']`).isExisting();
            }, 30000, "Transaction button is still not visible");
            $(`//*[@id='download-transactions-button-DD_${dealByDealElements[i]}']`).click();
            browser.waitUntil(() => {
                return this.snackBarMessage.isExisting();
            }, 30000, 'Snackbar Success Message did not appear');
            this.wait().snackBarMessage.getText().should.contain(this.strings.expectedDownloadTransactionMessage);
            browser.waitUntil(() => {
                return !this.snackBarMessage.isExisting();
            }, 30000, 'Snackbar did not go away after 6 seconds');
        }
    }

    selectHierarchyForRemoveTranType() {
        this.cancelCreateWaterfall.isEnabled().should.be.true;
        this.previousButton.isEnabled().should.be.true;
        this.selectNav.waitForVisible();
        this.selectNav.click();
        const hierarchies = ['Contribution', 'Distribution', 'Other Reserves', 'Capital', 'Cost'];
        let randomHierarchy = hierarchies[Math.floor(Math.random() * hierarchies.length)];
        $(`div[id='${randomHierarchy}']`).waitForVisible();
        $(`div[id='${randomHierarchy}']`).click();
        this.selectedHierarchy == this.sourceTransactionText;
        return this;
    }

    selectHierarchyForAddTranType() {
        this.selectNav.waitForVisible(5000);
        this.selectNav.click();
        const hierarchies = ['PIK Interest', 'Derivative Interest - P&L', 'Discount/Premium', 'PIK Purchase Receivable', 'PIK Addition to Principal'];
        let randomHierarchy = hierarchies[Math.floor(Math.random() * hierarchies.length)];
        $(`div[id='${randomHierarchy}']`).waitForVisible(5000);
        $(`div[id='${randomHierarchy}']`).click();
        this.selectedHierarchy == this.sourceTransactionText;
        return this;
    }

    validateRemovedTransTypeCounter() {
        for(var i=0; i< 2; i++) {
            this.checkUncheckBox[i].click();
            let unCheckCounter = (this.unCheckedChek.length) - 8;
            unCheckCounter == this.removedTransType;  
        }
        this.navUncheckAll.click();
        this.navUncheckAll.click();
        this.wait().navTotalRemovedRows.getAttribute('numdatarows') == this.removedTransType;
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
              });
        });
        this.wait().selectContribution.waitForVisible(5000);
        this.selectContribution.click();
        browser.execute(function () {
            window.scrollTo({
                top: 100,
                left: 100,
                behavior: 'smooth'
              });
        });
        this.wait().navTotalRemovedRows.getAttribute('numdatarows') == this.removedTransType;
        HomePage.clickSave();
        HomePage.previousButton.click();
        this.wait().navTotalRemovedRows.getAttribute('numdatarows') == this.removedTransType;
    }

    searchForWaterfallForAddTransactions(waterfall) {
        this.refresh();
        this.wait().waterfallMenuButton.click();
        this.wait().searchWaterfallIcon.click();
        this.wait().waterfallDropDownEquals.click();
        this.wait().waterfallDropDownText.setValue(waterfall);
        return this;
    }

    totalReturnBuckets() {
        this.transactionMappingGrid.waitForVisible(10000);
        const transactionMappingGridData = this.wait().transactionMappingGrid.getText().split("\n");
        let expectedList = ['NAV', 'Total Partners Capital', 'Contributions', 'Total Investor Contributions', 'Distributions Net of Carry', 'Total Investor Distributions', 'Prior Carried Interest - Realized', 'Capital Distributions - Carried Interest', 'Prior Carried Interest - Unrealized', 'Unrealized Carry'];
        transactionMappingGridData.should.contain.members(expectedList);
    }

    dealByDealBucket() {
        this.transactionMappingGrid.waitForVisible(10000);
        const transactionMappingGridData = this.transactionMappingGrid.getText().split("\n");
        let expectedList = ['Realized Investment Contributions', 'Capital Distributions - Roc (Recallable)', 'Realized Gain / Loss', 'Capital Distributions - Gain (Recallable)', 'Investment Contributions', 'Contributions - Investments (Inside Commitment)', 'Write-Offs', 'Realized Loss', 'Expense Contributions (Allocable)', 'Contributions - Expenses (Inside Commitment)',
        'AFE Numerator', 'Capital Distributions - Roc (Recallable)', 'AFE Denominator', 'Contributions - Investments (Inside Commitment)','Prior Carried Interest - Realized', 'Capital Distributions - Carried Interest', 'Prior Carried Interest - Unrealized', 'Unrealized Carry', 'NAV', 'Total Partners Capital' ];
        transactionMappingGridData.should.contain.members(expectedList);
    }

    validateTimeFormat() {
        const timeOfSync = (this.dateAndTime.getText()).split(" ");
        const formatResponse = (timeOfSync[5].search(/^\d{2}:\d{2}:\d{2}$/) != -1);
        formatResponse.should.equal(true);
    }

    validateTimeFormatForEventsResult(date) {
        const cdeventname = 'AutoBot-CD-' + util.generateRandomString(8);
        this.eventName.setValue(cdeventname);
        this.cashDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.saveEventButton.click();
        browser.waitUntil(() => {
            return this.addEventButton.isVisible();
        }, 60000, 'New Event did not created in time.');
        this.wait().addEventResultButton.click();
        this.calculateEventButton.waitForEnabled();
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.longWait().searchEventForTotalReturn(cdeventname);
    }

    searchEventForTotalReturn(eventname) {
        var eventResultDateAndTime = (this.longWait().eventResultTime.getText()).split(" ");
        const formatResponse = (eventResultDateAndTime[3].search(/^\d{2}:\d{2}:\d{2}$/) != -1);
        formatResponse.should.equal(true);
        return this;
    }

    validateTimeFormatForSyncTab() {
        this.syncButton.click();
        const startTimeOfSync = (this.longWait().syncStartTime.getText()).split(" ");
        const startFormatResponse = (startTimeOfSync[3].search(/^\d{2}:\d{2}:\d{2}$/) != -1);
        startFormatResponse.should.equal(true);
        const endTimeOfSync = (this.syncEndTime.getText()).split(" ");
        const endFormatResponse = (endTimeOfSync[3].search(/^\d{2}:\d{2}:\d{2}$/) != -1);
        endFormatResponse.should.equal(true);
    }

    transactionGridData() {
        browser.waitUntil(() => {
            return this.transactionGrid.getText().includes('Investment A');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.transactionGrid.getText().split("\n");
        let expectedTransactionList = ['Investor 1', '60963', 'Investment A', 'A - 58749', 'Prior Carry Realized'];
        gridDetail.should.contain.members(expectedTransactionList);
    }

    downloadTransactionsFile() {
        browser.waitUntil(() => {
            return this.downloadNavTransaction.isEnabled();
        }, 30000, "Transaction button is still not visible");
        this.downloadNavTransaction.click();
    }

    calculateEventForSync(date) {
        const cdeventname = 'AutoBot-CD-' + util.generateRandomString(8);
        this.eventName.setValue(cdeventname);
        this.cashDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.saveEventButton.click();
        this.longerWait();
        this.longerWait().addEventResultButton.click();
        this.wait().syncFromInvestran.click();
    }

    eventScreenTansactionsSync() {
        browser.waitUntil(() => {
            return this.snackBarMessage.isExisting();
        }, 30000, 'Snackbar Message is not Visible');
        this.wait().snackBarMessage.getText().should.equal(this.strings.expectedSynCreationSnackBarMessage);
        browser.waitUntil(() => {
            return !this.snackBarMessage.isExisting();
        }, 30000, 'Snackbar Message is not Visible');
        browser.waitUntil(() => {
            return this.snackBarMessage.isExisting();
        }, 30000, 'Snackbar Message is not Visible');
        this.snackBarMessage.getText().should.equal(this.strings.expectedSyncCompletionSnackBarMessage);
    }

    validateNoEmptyTransactionsBucketDBD() {
        this.wait();
        for(var i=2; i<=11; i++) {
            this.wait();
            assert.notEqual($(`(//*[@col-id='label'])['${i}']`).getText(), ' ');
        };
    }

    validateAddedTransTypeCounter(waterfallName) {
        browser.setViewportSize({
            width: 1300, 
            height: 3000
        });
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
              });
        });
        this.wait().navAddTranTypeButton.click();
        this.addTranSearchBox.click();
        const transTypes = ['P&L from Underlying Investments - Management Fee Expense Waived-40052', 'P&L from Underlying Investments - Dead Deal Fees-40052', 'Non C1 - Other Income-40045', 'Non C1 - Realized Gain-40040', 'Non C1 -Custody Fee  Expense-50016'];
        for(var i=0; i< 2; i++) {
            this.wait();
            $(`div[id='${transTypes[i]}'`).click();
            this.wait().addTranTypeSaveButton.click();
            this.wait().navAddTranTypeButton.click();
            this.wait().addTranSearchBox.click();
        }
        this.wait().addTranSearchBox.click();
        this.wait().addTranTypeCancelButton.click();
        browser.execute(function () {
            window.scrollTo({
                top: 100,
                left: 100,
                behavior: 'smooth'
              });
        });
        this.wait().addTransType.should.equal('2');
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
              });
        });
        this.wait().selectContribution.click();
        browser.execute(function () {
            window.scrollTo({
                top: 100,
                left: 100,
                behavior: 'smooth'
              });
        });
        this.wait().addTransType.should.equal('2');
        HomePage.clickSave();
        HomePage.previousButton.click();
        this.wait().addTransType.should.equal('2');
    }

    transactionsSync() {
        this.syncFromInvestranButton.click();
        browser.waitUntil(() => {
            return this.snackBarMessage.isExisting();
        }, 30000, 'Snackbar Message is not Visible');
        this.wait().snackBarMessage.getText().should.equal(this.strings.expectedSynCreationSnackBarMessage);
        browser.waitUntil(() => {
            return !this.snackBarMessage.isExisting();
        }, 30000, 'Snackbar did not go away after 6 seconds');
        browser.waitUntil(() => {
            return this.snackBarMessage.isExisting();
        }, 30000, 'Snackbar Success Message did not appear');
        this.wait().snackBarMessage.getText().should.equal(this.strings.expectedSyncCompletionSnackBarMessage);
    }
}


export default new TransactionPage();
