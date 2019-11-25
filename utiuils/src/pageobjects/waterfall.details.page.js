import BasePage from './base.page';
import util from '../utils/utilities';
import HomePage from './home.page';
let randomWaterfallName = util.generateRandomString(7);


class WaterfallDetailsPage extends BasePage {

    get searchWaterfall()                                                           { return $('(//input[@ref="eColumnFloatingFilter"])[1]'); }
    get calculationResultsMethod()                                                  { return $('//*[@id="calculation-results-method-value"]').getText(); }
    get manageWaterfallScreen()                                                     { return $('/html/body/div/div/main/div[2]/div/div[1]/div/h4'); }
    get manageWaterfallText()                                                       { return $('/html/body/div/div/main/div[2]/div/div[1]/div/h4').getText(); }
    get waterfallMenuButton()                                                       { return $('(//span[@ref="eMenu"])[1]'); }
    get selectDropdown()                                                            { return $('//*[@class="ag-filter-select"]'); }
    get waterfallDropDownEquals()                                                   { return $("//*[@value='equals']"); }
    get waterfallDropDownText()                                                     { return $('(//*[@type="text"])[3]'); }
    get waterfallOption()                                                           { return $("(//div[@id='lii-div'])[1]"); }
    get waterfallForEvents()                                                        { return $("(//div[@col-id='name'])[2]"); }
    get selectSearchedWaterfall()                                                   { return $('(//div[@class="rt-td"])[1]'); }
    get expandMenu()                                                                { return $('//*[@id="expand-menu"]'); }
    get addWaterfall()                                                              { return $('//*[@id="add-waterfall-button"]'); }
    get collapseMenu()                                                              { return $('//*[@id="collapse-menu"]'); }
    get breadcrumbText()                                                            { return $(" div > h4 ").getText(); }
    get waterfallName()                                                             { return $("//input[@name='name']"); }
    get saveButton()                                                                { return $('//*[@id="save-create-waterfall-button"]'); }
    get selectCurrency()                                                            { return $("//input[@name='currency']/preceding-sibling::div[@role='button']"); }
    get accountSelector()                                                           { return $('//*[@id="client-selector"]'); }
    get tiersBreadcrumbText()                                                       { return $('/html/body/div/div/main/div[2]/div/div[1]/div[3]/form/legend').getText(); }
    get tier1LPA()                                                                  { return $('/html/body/div/div/main/div[2]/div/div[1]/div[3]/form/div/div[2]/div/div/div/div/div/div/input'); }
    get tier2LPA()                                                                  { return $('/html/body/div/div/main/div[2]/div/div[1]/div[3]/form/div/div[3]/div[1]/div[1]/div/div/input'); }
    get tier3LPA()                                                                  { return $('/html/body/div/div/main/div[2]/div/div[1]/div[3]/form/div/div[4]/div/div/div/div/div/div/input'); }
    get tier4LPA()                                                                  { return $('//input[@name="tiers[3].lpaReference"]'); }
    get waterfallDetailsText()                                                      { return $('/html/body/div/div/main/div[2]/div/div[1]/div[3]/div/div[1]/h5').getText(); }
    get submitForApproval()                                                         { return $('//*[@id="submit-for-approval-button"]'); }
    get comments()                                                                  { return $("//textarea[@name='comments']"); }
    get termsBreadcrumbText()                                                       { return $('/html/body/div/div/main/div[2]/div/div[1]/div[3]/div/legend/h5').getText(); }
    get termsUploadIcon()                                                           { return $('//*[@id="upload-investor-terms-button"]'); }
    get fileUploadButton()                                                          { return $('//*[@id="file" and @type="file"]'); }
    get uploadSubmitButton()                                                        { return $('//*[@id="upload-file-button"]'); }
    get uploadDownloadText()                                                        { return $('//*[@id="modal-body"]').getText(); }
    get okButton()                                                                  { return $('//*[@id="modal-close-button"]'); }
    get cipOKButton()                                                               { return $('//*[@id="modal-confirm-button"]'); }
    get investorTerms()                                                             { return $('//button[@id="Investor Terms"]'); }
    get downloadEventsButton()                                                      { return $('//*[@id="export-result-button"]'); }
    get downloadInvestorTermsButton()                                               { return $('//button[@id="download-investor-terms-button"]'); }
    get downloadTermsTemplateButton()                                               { return $('//*[@id="download-investor-terms-template-message"]'); }
    get waterfallMenu()                                                             { return $('/html/body/div/div/div/div/nav/a[1]/li/div[2]/span'); }
    get clickOnTable()                                                              { return $("(//div[@ref='eLabel'])[1]"); }
    get statusMessage()                                                             { return $("(//div[@col-id='status'] [@unselectable='on'])[2]").getText(); }
    get approveWaterfallIcon()                                                      { return $("//button[@aria-label='Approve Waterfall']"); }
    get approveWaterfallButton()                                                    { return $('//button[@id="approve-waterfall-button"]'); }
    get editWaterfallIcon()                                                         { return $("//button[@aria-label='Edit Waterfall']"); }
    get rejectWaterfallButton()                                                     { return $('//button[@id="reject-waterfall-button"]'); }
    get setUpViewGridDetails()                                                      { return $('/html/body/div/div/main/div[2]/div/div[2]/div[2]/div/div[1]').getText(); }
    get investorTermsTab()                                                          { return $('//*[@id="Investor Terms"]'); }
    get transactiosTab()                                                            { return $('//*[@id="Transactions"]'); }
    get eventsTab()                                                                 { return $('//*[@id="Events"]'); }
    get syncTab()                                                                   { return $('//*[@id="Sync"]'); }
    get navFileStatus()                                                             { return $("(//*[@col-id='loadStatus'])[2]"); }
    get navFileUploadButton()                                                       { return $("//button[@id='upload-transactions-button-TR_NAV']"); }
    get contributionsFileStatus()                                                   { return $("(//*[@col-id='loadStatus'])[3]"); }
    get contributionsFileUploadButton()                                             { return $("//button[@id='upload-transactions-button-TR_CONT']"); }
    get distributionsFileStatus()                                                   { return $("(//*[@col-id='loadStatus'])[4]"); }
    get distributionsFileUploadButton()                                             { return $("//button[@id='upload-transactions-button-TR_DIST']"); }
    get pciFileStatus()                                                             { return $("(//*[@col-id='loadStatus'])[5]"); }
    get pciUnrealizedFileStatus()                                                   { return $("(//*[@col-id='loadStatus'])[6]"); }
    get pciRealizedFileUploadButton()                                               { return $("//button[@id='upload-transactions-button-TR_PC_REAL']"); }
    get pciUnrealizedFileUploadButton() { return $("//button[@id='upload-transactions-button-TR_PC_UNREAL']"); }
    get addEventButton() { return $('//*[@id="add-event-button"]'); }
    get eventName() { return $('/html/body/div/div/main/div[2]/div/div[2]/div[2]/form/div[1]/div/input'); }
    get cashDistributionRadio() { return $('/html/body/div/div/main/div[2]/div/div[2]/div[2]/form/div[3]/label[1]/span[1]/span[1]/input'); }
    get datePicker() { return $('//*[@id="date"]'); }
    get navDeleteButton() { return $("//*[@id='delete-transactions-button-TR_NAV']"); }
    get contributionsDeleteButton() { return $("//*[@id='delete-transactions-button-TR_CONT']"); }
    get distributionsDeleteButton() { return $("//*[@id='delete-transactions-button-TR_DIST']"); }
    get pciRealizedDeleteButton() { return $("//*[@id='delete-transactions-button-TR_PC_REAL']"); }
    get pciUnRealizedDeleteButton() { return $("//*[@id='delete-transactions-button-TR_PC_UNREAL']"); }
    get confirmDeleteText() { return $('//*[@id="modal-body"]').getText(); }
    get confirmDeleteTextPopup() { return $('//*[@id="modal-title"]'); }
    get confirmDeleteButton() { return $('//*[@id="modal-confirm-button"]'); }
    get confirmEventDeleteButton() { return $('/html/body/div/div/main/div[2]/div[1]/div[2]/button[2]'); }
    get eventName() { return $('//input[@name="eventName"]'); }
    get cashDistributionEventType() { return $("//input[@value='Cash Distribution']"); }
    get unrealizedDistributionEventType() { return $("//input[@value='Unrealized Distribution']"); }
    get eventDate() { return $('//input[@id="date-picker"]'); }
    get calculateEventButton() { return $('//*[@id="generate-results-button"]'); }
    get eventComments() { return $("//*[@name='comments']"); }
    get confirmationButton() { return $('//*[@id="modal-confirm-button"]'); }
    get eventsTable() { return $("//div[@id='eventsTableData']"); }
    get eventsLegend() { return $('/html/body/div/div/main/div[2]/div/div[2]/div[2]/form/legend[1]').getText(); }
    get eventNameSearchIconFilter() { return $("(//span[@ref='eMenu'])[1]"); }
    get setEventFilterToEquals() { return $("//option[@value='equals']"); }
    get eventNameSearch() { return $('(//*[@type="text"])[3]'); }
    get eventNameSearchResult() { return $("//div[@col-id='eventName'] [@role='gridcell']"); }
    get expectedEventName() { return $("//div[@col-id='eventName'] [@role='gridcell']").getText(); }
    get backButton() { return $('//button[@id="back-to-home-button"]'); }
    get firstDeleteEventButton() { return $("//*[@title='Delete']"); }
    get deleteEventButton() { return $('//*[@id="delete-event-button-event-id"]'); }
    get confirmDeleteMessage() { return $('/html/body/div/div/main/div[2]/div[1]/div[1]/div/p').getText(); }
    get confirmDeleteEvent() { return $('/html/body/div/div/main/div[2]/div[1]/div[2]/button[2]'); }
    get syncFromInvestran() { return $("//*[@id='sync-investran-transaction-button']"); }
    get syncFromInvestranButton() { return $("//*[@id='sync-from-investran-button']"); }
    get transactiosTabHeader() { return $("/html/body/div/div/main/div[2]/div/div[2]/div[2]/div/div/div/div/div[1]/div/div[1]/div[2]/div/div/div[1]/div[2]/div/span[1]"); }
    get transactionTypeStatus() { return $("(//*[@role='button'])[2]"); }
    get transactionTypeBody() { return $("/html/body/div/div/main/div[2]/div/div[2]/div[2]/div/div/div/div/div[1]/div/div[3]"); }
    get navTransactionStatus() { return $("(//div[@role='button'])[2]").getText(); }
    get contributionsTransactionStatus() { return $("(//div[@role='button'])[3]").getText(); }
    get distributionsTransactionStatus() { return $("(//div[@role='button'])[4]").getText(); }
    get priorCarryRealizedTransactionStatus() { return $("(//div[@role='button'])[5]").getText(); }
    get priorCarryUnrealizedTransactionStatus() { return $("(//div[@role='button'])[6]").getText(); }
    get defaultRRCPreferredReturn1() { return $('/html/body/div/div/main/div[2]/div/div/div[3]/form/div/div[5]/div[1]/div[1]/div/div[4]/div/div/input'); }
    get defaultTRCPreferredReturn1() { return $("//input[@name='tiers[1].tierPercentages.preferredReturn.value']"); }
    get defaultRRCPreferredReturn2() { return $('/html/body/div/div/main/div[2]/div/div/div[3]/form/div/div[6]/div/div/div/div/div/div[4]/div/div[1]/div/div/input'); }
    get defaultTRCPreferredReturn2() { return $("//input[@name='tiers[2].tierPercentages.catchUpAllocation.value']"); }
    get defaultRRCPreferredReturn3() { return $('/html/body/div/div/main/div[2]/div/div/div[3]/form/div/div[6]/div/div/div/div/div/div[4]/div/div[2]/div/div/input'); }
    get defaultTRCPreferredReturn3() { return $("//input[@name='tiers[2].tierPercentages.catchUpTarget.value']"); }
    get defaultRRCPreferredReturn4() { return $('/html/body/div/div/main/div[2]/div/div/div[3]/form/div/div[7]/div/div/div/div/div/div[4]/div/div/div/div/input'); }
    get defaultTRCPreferredReturn4() { return $("//input[@name='tiers[3].tierPercentages.finalSplit.value']"); }
    get searchResult() { return $("(//*[@role='row'])[3]"); }
    get searchWaterfallIcon() { return $("(//*[@class='ag-icon ag-icon-menu'])[1]"); }
    get searchWaterfallBox() { return $('//*[@id="filterText"]'); }
    get waterfallDetailsWaterfallName() { return $("//*[@id='waterfall-detail-name-value']").getText(); }
    get listItemIcon() { return $("//div[@id='listitemicon']"); }
    get investranSyncPopup() { return $("//div[@role='alertdialog']//div[@class='jss155']"); }
    get investorTermsGridTable() { return $("//*[@role='grid']"); }
    get cancelCreateWaterfall() { return $('//*[@id="cancel-create-waterfall-button"]'); }
    get previousButton() { return $("//button[@id='prev-create-waterfall-button']"); }
    get syncButton() { return $("//*[@id='Sync']"); }
    get snackBarMessage() { return $("//*[@aria-describedby='message-id']"); }
    get noCIPInvestorTerm() { return $(" div > h6").getText(); }
    get okConfirmButton() { return $('//*[@id="modal-confirm-button"]'); }
    get eventColumnNames() { return $("(//*[@class='ag-header-row'])[4]"); }
    get eventResultSlider() { return $("//*[@ref='eBodyHorizontalScrollViewport']"); }
    get zeroTransactionCount() { return $("(//*[@role='gridcell'])[18]").getText(); }
    get okConfirmButton() { return $('//*[@id="modal-confirm-button"]'); }
    get tableGrid() { return $$("//*[@col-id='name']"); }
    get termsSyncMessage() { return $('/html/body/div/div/main/div[3]/div/div[1]/div/div'); }
    get termsFirstSyncMessage() { return $('/html/body/div/div/main/div[3]/div/div[1]/div/div/div[1]').getText(); }
    get eventColumnNames() { return $("(//*[@class='ag-header-row'])[4]"); }
    get eventResultSlider() { return $("//*[@ref='eBodyHorizontalScrollViewport']"); }
    get ricFileUploadButton() { return $("//button[@id='upload-transactions-button-DD_REAL_INV_CONT']"); }
    get ricFileDownloadButton() { return $("//button[@id='download-transactions-button-DD_REAL_INV_CONT']"); }
    get ricFileDeleteButton() { return $("//button[@id='delete-transactions-button-DD_REAL_INV_CONT']"); }
    get rciFileStatus() { return $("(//*[@col-id='loadStatus'])[2]"); }
    get termType() { return $('(//*[@col-id="investorType"])[2]'); }
    get noInvestorsWithCIPPopUp() { return $("//*[@id='modal-title']"); }
    get searchFilter() { return $("(//*[@class='ag-tab'])[1]"); }
    get saveEventButton() { return $("//*[@id='save-event-button']"); }
    get editEvent() { return $("//*[@title='Edit']"); }
    get selectEvent() { return $("(//*[@row-index='0'])[2]"); }
    get selectEventResult() { return $("(//*[@row-index='0'])[5]"); }
    get readyForReview() { return $('//*[@id[starts-with(.,"event-result-1")]]/span[1]'); }
    get updatedByEvent() { return $("(//*[@col-id='updatedBy'])[2]"); }
    get updatedByResult() { return $("(//*[@col-id='updatedBy'])[4]"); }
    get updatedOnResult() { return $("(//*[@col-id='updatedTime'])[4]"); }
    get eventArrowToContract() { return $("(//*[@ref='eExpanded'])[1]"); }
    get eventArrowToExpand() { return $("(//*[@ref='eContracted'])[1]"); }
    get editEvent() { return $("//*[@title='Edit']"); }
    get addEventResultButton() { return $("(//*[@title='Add Result'])[1]"); }
    get realizedReturnOfCapitalWaterallType() { return $('//input[@value="DEAL_BY_DEAL"]'); }
    get dbdRealizedInvestmentContributionFileUpload() { return $("//*[@id='upload-transactions-button-DD_REAL_INV_CONT']"); }
    get dbdRealizedGainLossFileUpload() { return $("//*[@id='upload-transactions-button-DD_REAL_GAIN_LOSS']"); }
    get dbdInvestmentContributionFileUpload() { return $("//*[@id='upload-transactions-button-DD_INV_CONT']"); }
    get dbdWriteOffsFileUpload() { return $("//*[@id='upload-transactions-button-DD_WRT_OFF']"); }
    get dbdExpenseContributionFileUpload() { return $("//*[@id='upload-transactions-button-DD_EXP_CONT']"); }
    get dbdAFENumeratorFileUpload() { return $("//*[@id='upload-transactions-button-DD_AFE_NUM']"); }
    get dbdAFEDenominatorFileUpload() { return $("//*[@id='upload-transactions-button-DD_AFE_DEN']"); }
    get dbdPriorCarriedRealizedFileUpload() { return $("//*[@id='upload-transactions-button-DD_PC_REAL']"); }
    get dbdPriorCarriedUnRealizedFileUpload() { return $("//*[@id='upload-transactions-button-DD_PC_UNREAL']"); }
    get dbdNAVFileUpload() { return $("//*[@id='upload-transactions-button-DD_NAV']"); }
    get aggregateExpenseContributionAggregateFileUpload() { return $("//*[@id='upload-transactions-button-DD_EXP_CONT_AGG']"); }
    get dbdRealizedInvestmentContributionFileStatus() { return $("(//*[@col-id='loadStatus'])[2]"); }
    get dbdRealizedGainLossFileStatus() { return $("(//*[@col-id='loadStatus'])[3]"); }
    get dbdInvestmentContributionFileStatus() { return $("(//*[@col-id='loadStatus'])[4]"); }
    get dbdWriteOffsFileStatus() { return $("(//*[@col-id='loadStatus'])[5]"); }
    get dbdExpenseContributionFileStatus() { return $("(//*[@col-id='loadStatus'])[6]"); }
    get dbdAFENumeratorFileStatus() { return $("(//*[@col-id='loadStatus'])[7]"); }
    get dbdAFEDenominatorFileStatus() { return $("(//*[@col-id='loadStatus'])[8]"); }
    get dbdPriorCarriedRealizedFileStatus() { return $("(//*[@col-id='loadStatus'])[9]"); }
    get dbdPriorCarriedUnRealizedFileStatus() { return $("(//*[@col-id='loadStatus'])[10]"); }
    get dbdNAVFileStatus() { return $("(//*[@col-id='loadStatus'])[11]"); }
    get aggregateExpenseContributionAllocalbleFileStatus() { return $("(//*[@col-id='loadStatus'])[6]"); }
    get aggregateExpenseContributionAggregateFileStatus() { return $("(//*[@col-id='loadStatus'])[7]"); }
    get aggregateExpenseAFENumeratorFileStatus() { return $("(//*[@col-id='loadStatus'])[8]"); }
    get aggregateExpenseAFEDenominatorFileStatus() { return $("(//*[@col-id='loadStatus'])[9]"); }
    get aggregateExpensePriorCarriedRealizedFileStatus() { return $("(//*[@col-id='loadStatus'])[10]"); }
    get aggregateExpensePriorCarriedUnRealizedFileStatus() { return $("(//*[@col-id='loadStatus'])[11]"); }
    get aggregateExpenseNAVFileStatus() { return $("(//*[@col-id='loadStatus'])[12]"); }
    get editEventButton() { return $("(//*[@title='Edit'])[1]"); }
    get eventBackButton() { return $("//*[@id='back-events-home-button']"); }
    get multiplierTerm() { return $("(//*[@class='ag-react-container'])[3]"); }
    get generatedEventResult() { return $("(//*[@col-id='eventResultNumber'])[2]"); }
    get eventSubmitForApprovalButton() { return $("//*[@id='submit-for-approval-button']"); }
    get selectedEventResult() { return $('//div[@col-id="eventResultNumber"] [@role="gridcell"]'); }
    get eventApprovalButton() { return $("//*[@id='approve-button']"); }
    get eventRejectButton() { return $("//*[@id='reject-button']"); }
    get eventMarkAsReviewdButton() { return $("//*[@id='mark-as-reviewed-button']"); }
    get reviewdStatus() { return $('(//*[starts-with(@id,"event")]/span)[1]'); }
    get eventUnApproveButton() { return $('//*[@id="unapprove-button"]'); }
    get eventUnApprovePopup() { return $('//*[@id="root"]/div/main/div[2]/div[1]/div[1]/div/p'); }
    get unApprovePopupButton() { return $('(//*[@type="button"])[6]'); }
    get eventResultDeleteButton() { return $("(//*[@title='Delete'])[2]"); }
    get rejectEventStatus() { return $('(//*[starts-with(@id,"event-result")]/span)[1]'); }
    get aggregateExpenseTierDetail() { return $('//*[@id="root"]/div/main/div[2]/div/div[2]/div[2]/div/div[2]/div/div[3]/h6'); }
    get buildTierAggregateReturnOfExpenseCard() { return $('//*[@title="Add Return of Expense (Aggregate)"]'); }
    get aggregateExpenseContributionsBucket() { return $("(//*[@col-id='label'])[7]"); }

    get strings() {
        return {
            expectedBreadcrumbText: 'Create Waterfall',
            expectedTiersBreadcrumbText: 'Tiers',
            expectedWaterfallDetailsText: 'Waterfall Details',
            expectedTermsBreadcrumbText: 'Investor Terms',
            expectedUploadSuccessMessage: 'has been updated',
            expectedApprovedWaterfallMessage: 'Approved',
            expectedPendingApprovalMessage: 'Pending Approval',
            expectedConfirmDeleteMessage1: 'Are you sure you want to delete all',
            expectedConfirmDeleteMessage2: 'transactions data for current waterfall?',
            expectedNotLoadedTransactionStatus: 'Not Loaded',
            expectedLoadedTransactionStatus: 'Loaded',
            expectedSynCreationSnackBarMessage: 'The sync process was created and is currently in progress.',
            expectedSyncCompletionSnackBarMessage: 'The sync process was completed successfully.',
            expectedNoCIPInvestorTermMessage: 'No Investors were identified as the CIP.',
            expectedTermsSyncMessage: 'investors not found in Investran and removed',
            expectedReadyForReviewMessage: 'Ready for Review',
            expectedUnApprovePopupMessage: 'Clicking UNAPPROVE will revert Results status back to Ready for Review',
            expectedIncorrectTransactionMessage: 'One or more values in the file did not pass validation: "13570" at row 38 does not match any existing Investor Id'
        };
    }

    clickExpandMenu() {
        this.wait().expandMenu.click();
        return this;
    }

    clickListItemIcon() {
        this.listItemIcon.waitForVisible(5000);
        this.listItemIcon.click();
        return this;
    }

    selectRandomCurrency() {
        const currencies = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'AUD', 'SGD', 'HKD', 'CAD', 'LUF', 'DKK'];
        let randomCurrency = currencies[Math.floor(Math.random() * currencies.length)];
        $(`li[data-value='${randomCurrency}']`).click();
        return this;
    }

    get randomClient() {
        const clients = ['TIFF', 'Deerfield', 'Bluedrive', 'AVENUE_CAPITAL', 'EQT', 'SECURIS', 'HIGHVISTA', 'QA'];
        return clients[Math.floor(Math.random() * clients.length)];
    }

    selectDefaultClient() {
        this.wait().accountSelector.click();
        this.longWait();
        $('#dropdown-options #Kuvari').click();
        return this;
    }

    uploadTerms(filename) {
        this.uploadInvestorTerms(filename);
        return this;
    }

    uploadInvestorTerms(filename) {
        if (typeof filename !== 'undefined') {
            browser.getUrl().should.contain('/ui/waterfalls/create');
            this.wait().termsUploadIcon.click();
            this.fileUploadButton.chooseFile(filename);
            this.wait().uploadSubmitButton.click();
            this.longerWait().uploadDownloadText.should.contain(this.strings.expectedUploadSuccessMessage);
            this.wait().okButton.click();
        }
        return this;
    }

    addTiers(tier1, tier2, tier3, tier4) {
        this.wait(2000);
        browser.setViewportSize({
            width: 1300,
            height: 2500
        });
        browser.execute(function () {
            window.scrollTo({
                top: 600,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.wait().defaultTRCPreferredReturn1.click();
        this.defaultTRCPreferredReturn1.setValue("1");

        this.wait().defaultTRCPreferredReturn2.click();
        this.defaultTRCPreferredReturn2.setValue("1");

        this.wait().defaultTRCPreferredReturn3.click();
        this.defaultTRCPreferredReturn3.setValue("1");

        this.wait().defaultTRCPreferredReturn4.click();
        this.defaultTRCPreferredReturn4.setValue("1");
        if (typeof tier1 !== 'undefined') {
            this.tier1LPA.setValue(tier1);
        }
        if (typeof tier2 !== 'undefined') {
            this.tier2LPA.setValue(tier2);
        }
        if (typeof tier3 !== 'undefined') {
            this.tier3LPA.setValue(tier3);
        }
        if (typeof tier4 !== 'undefined') {
            this.tier4LPA.setValue(tier4);
        }
        this.wait().saveButton.isEnabled().should.be.true;
        this.wait().clickSave();
        browser.setViewportSize({
            width: 1366,
            height: 900
        });
        return this;
    }

    submitWaterfallForApproval() {
        browser.waitUntil(() => {
            return this.submitForApproval.isVisible();
        }, 60000, 'Submit Waterfall page did not load.');
        browser.getUrl().should.contain('/ui/waterfalls/create');
        this.calculationResultsMethod.should.contain('Specific Investor ID');
        this.cancelCreateWaterfall.isEnabled().should.be.true;
        this.previousButton.isEnabled().should.be.true;
        this.wait().submitForApproval.isEnabled().should.be.true;
        this.submitForApproval.click();
        browser.waitUntil(() => {
            return this.manageWaterfallScreen.isVisible();
        }, 60000, 'Home page did not load after creating Waterfall.');
        return this;
    }

    hitSubmitWaterfall() {
        browser.waitUntil(() => {
            return this.submitForApproval.isVisible();
        }, 60000, 'Submit Waterfall page did not load.');
        browser.getUrl().should.contain('/ui/waterfalls/create');
        this.calculationResultsMethod.should.contain('Specific Investor ID');
        this.cancelCreateWaterfall.isEnabled().should.be.true;
        this.previousButton.isEnabled().should.be.true;
        this.wait().submitForApproval.isEnabled().should.be.true;
        this.submitForApproval.click();
        return this;
    }

    confirmNoCIPInvestorTerms() {
        browser.waitUntil(() => {
            return this.noInvestorsWithCIPPopUp.isVisible();
        }, 30000, "Pop up Message did not show up");
        this.noCIPInvestorTerm.should.equal(this.strings.expectedNoCIPInvestorTermMessage);
        this.okConfirmButton.click();
    }

    selectRandomlyCreatedWaterfall() {
        this.wait().waterfallMenu.click();
        this.wait().addWaterfall.click();
        this.wait().collapseMenu.click();
        this.wait().breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        const waterfallName = 'TestBot-' + util.generateRandomString(7);
        this.waterfallName.setValue(waterfallName);
        this.wait().saveButton.isEnabled().should.be.false;
        this.selectCurrency.click();
        this.wait().selectRandomCurrency()
        this.wait().saveButton.isEnabled().should.be.true;
        this.wait().addComment().clickSave();
        return waterfallName;
    }

    createWaterfall(waterfallName, investranLinked) {
        this.addWaterfall.click();
        this.wait().breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        this.waterfallName.setValue(waterfallName);
        this.saveButton.isEnabled().should.be.false;
        if (investranLinked == true) {
            if (HomePage.reportingGroup.isVisible() || HomePage.reportingGroup.isEnabled()) {
                HomePage.reportingGroup.click();
            } else {
                HomePage.reportingGroup.waitForVisible();
                HomePage.reportingGroup.click();
            }
            HomePage.selectReportingGroup.waitForVisible();
            HomePage.selectReportingGroup.click();
        }
        this.selectCurrency.waitForVisible();
        this.wait().selectCurrency.click();
        $(`li[data-value='USD']`).waitForVisible();
        this.selectRandomCurrency();
        this.wait().saveButton.isEnabled().should.be.true;
        HomePage.clickSave();
        return this;
    }

    createDBDWaterfall(waterfallName, investranLinked) {
        this.addWaterfall.click();
        this.wait().breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        this.waterfallName.setValue(waterfallName);
        this.saveButton.isEnabled().should.be.false;
        this.realizedReturnOfCapitalWaterallType.click();
        if (investranLinked == true) {
            if (HomePage.reportingGroup.isVisible() || HomePage.reportingGroup.isEnabled()) {
                HomePage.reportingGroup.click();
            } else {
                HomePage.reportingGroup.waitForVisible();
                HomePage.reportingGroup.click();
            }
            HomePage.selectReportingGroup.waitForVisible();
            HomePage.selectReportingGroup.click();
        }
        this.selectCurrency.waitForVisible();
        this.wait().selectCurrency.click();
        $(`li[data-value='USD']`).waitForVisible();
        this.selectRandomCurrency();
        this.wait().saveButton.isEnabled().should.be.true;
        HomePage.clickSave();
        return this;
    }

    addComment() {
        const comment = util.generateRandomString(7);
        this.comments.setValue(comment);
        return this;
    }

    clickSave() {
        if (this.saveButton.isVisible() || this.saveButton.isEnabled()) {
            this.saveButton.click();
            browser.waitUntil(() => {
                return this.cipOKButton.isVisible();
            }, 30000, 'OK button did not load');
            this.cipOKButton.click();
        } else {
            this.saveButton.waitForVisible();
            this.saveButton.waitForEnabled();
            this.saveButton.click();
            browser.waitUntil(() => {
                return this.cipOKButton.isVisible();
            }, 30000, 'OK button did not load');
            this.cipOKButton.click();
        }
        return this;
    }

    clickEditWaterfall() {
        this.wait().editWaterfallIcon.click();
    }

    waitForInvestranTermsSync(totalInvestors) {
        browser.waitUntil(() => {
            return this.downloadInvestorTermsButton.isVisible();
        }, 30000, 'Investran Terms Page did not load');
        browser.waitUntil(() => {
            return this.downloadInvestorTermsButton.getText() == 'DOWNLOAD';
        }, 30000, 'Investran Terms Sync Error');
        browser.waitUntil(() => {
            return this.termsSyncMessage.isVisible();
        }, 30000, 'Terms Sync Message not visible');
        this.termsFirstSyncMessage.should.include(this.strings.expectedTermsSyncMessage);
        return this.termsFirstSyncMessage;
    }

    searchForWaterfall(waterfallName) {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.wait().selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.wait().waterfallDropDownText.setValue(waterfallName);
        this.wait();
        this.wait().waterfallForEvents.click();
        return this;
    }

    syncInvestranTransactions() {
        this.goToTransactionsTab();
        this.syncFromInvestranButton.waitForVisible();
        this.syncFromInvestranButton.click();
        browser.waitUntil(() => {
            return this.syncFromInvestranButton.isEnabled();
        }, 120000, 'Expected Investran Sync to complete');
        browser.waitUntil(() => {
            return this.navFileStatus.getText() == 'Sync Success';
        }, 60000, 'Investran Sync Error');
        return this;
    }

    searchForWaterfallForApproval(waterfall) {
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.wait().waterfallDropDownText.setValue(waterfall);
        this.wait();
        return this;
    }

    searchForWaterfallForWaterfallDetails(waterfall) {
        this.wait().searchWaterfallIcon.click();
        this.wait().searchWaterfallBox.setValue(waterfall);
        this.wait().searchResult.click();
        this.waterfall == this.waterfallDetailsWaterfallName;
        return this;
    }

    approvedWaterfall() {
        this.wait().statusMessage.should.equal(this.strings.expectedApprovedWaterfallMessage);
    }

    clickSaveButton() {
        if (this.saveButton.isVisible() || this.saveButton.isEnabled()) {
            this.saveButton.click();
        } else {
            this.saveButton.waitForVisible();
            this.saveButton.waitForEnabled();
            this.saveButton.click();
        }
        return this;
    }

    approveWaterfall() {
        this.longWait().approveWaterfallIcon.click();
        this.longWait().approveWaterfallButton.click();
        this.longWait();
        browser.refresh();
    }

    selectSeedWaterfallForTotalReturn() {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue('Automation-TotalReturn');
        this.wait().waterfallForEvents.click();
        return this;
    }

    selectSeedWaterfallForCustomTotalReturn() {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue('Automation-Custom');
        this.wait().waterfallForEvents.click();
        return this;
    }

    selectSeedWaterfallForTotalReturnFileUploads() {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.wait().waterfallDropDownText.setValue('Automation-NonInvestran');
        this.wait().waterfallForEvents.click();
        return this;
    }

    selectSeedWaterfallForDByDFileUploads() {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue('Automation-NonInvestran-DbyD');
        this.wait().waterfallForEvents.click();
        return this;
    }

    selectSeedWaterfallForDealByDeal() {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.wait().waterfallDropDownText.setValue('Automation-DealByDeal');
        this.wait().waterfallForEvents.click();
        return this;
    }

    selectSeedWaterfallForPreferredReturn() {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue('Automation_PreferredReturn');
        this.wait().waterfallForEvents.click();
        return this;
    }

    selectWaterfallForDealByDealForNavDateRange() {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.setValue('Automation-DealByDeal-NavData');
        this.wait().waterfallForEvents.click();
        return this;
    }

    selectSeedWaterfallWithInvestranLink() {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue('Automation-Investran');
        this.wait().waterfallForEvents.click();
        return this;
    }


    selectSeedWaterfallWithInvestranLinkForErrorEvent() {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue('Automation-ErrorEvent');
        this.longWait().waterfallForEvents.click();
        return this;
    }

    selectSeedWaterfall(waterfallName) {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue(waterfallName);
        this.wait().waterfallForEvents.click();
        return this;
    }

    searchAndEditWaterfall(waterfallName) {
        this.wait().waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.wait().waterfallDropDownText.setValue(waterfallName);
        if (this.wait().editWaterfallIcon.isExisting()) {
            this.editWaterfallIcon.click();
        }
        return this;
    }

    searchAndManageWaterfall(waterfallName, investranLinked, calculationMethod) {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.wait().waterfallDropDownText.setValue(waterfallName);
        if (this.wait().editWaterfallIcon.isExisting()) {
            this.editWaterfallIcon.click();
            HomePage.continueEditingWaterfall(waterfallName, investranLinked, calculationMethod);
        } else {
            if (waterfallName.includes("DbyD") || waterfallName.includes("DealByDeal")) {
                this.createDBDWaterfall(waterfallName, investranLinked);
                HomePage.manageDBDWaterfallCreation(investranLinked, calculationMethod);
            } else {
                this.createWaterfall(waterfallName, investranLinked);
                HomePage.manageWaterfallCreation(investranLinked, calculationMethod)
            };
        }
        return this;
    }

    searchForWaterfallForEvents(waterfall) {
        this.wait().waterfallOption.click();
        this.refresh();
        this.addWaterfall.click();
        this.waterfallOption.click();
        this.wait().waterfallMenuButton.click();
        this.waterfallDropDownEquals.click();
        this.waterfallDropDownText.setValue(waterfall);
        this.wait().waterfallForEvents.click();
        return this;
    }

    searchForWaterfallForAddEvents(waterfall) {
        this.waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue(waterfall);
        this.wait().waterfallForEvents.click();
        return this;
    }

    selectandEditSeedWaterfallWithInvestranLink() {
        this.wait().waterfallOption.click();
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue('Automation-Investran');
        this.clickEditWaterfall();
        this.longWait();
        return this;
    }

    searchEventForDealbyDeal(eventname) {
        this.waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue(eventname);
        this.wait().selectEvent.click();
        this.wait().selectEventResult.click();
        return this;
    }

    searchEventForTotalReturn(eventname) {
        this.wait().waterfallMenuButton.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().waterfallDropDownEquals.click();
        this.waterfallDropDownText.click();
        this.waterfallDropDownText.setValue(eventname);
        this.wait().selectEvent.click();
        this.wait().selectEventResult.click();
        return this;
    }

    searchEventForDealbyDealWithResultStatus(eventname) {
        this.customWait(20000);
        browser.waitUntil(() => {
            return this.wait().readyForReview.getText() == 'Ready for Review';
        }, 120000, 'File is still not Ready for Review');
        assert.notEqual(this.updatedByEvent.getText().length, ' ');
        assert.notEqual(this.updatedByResult.getText().length, ' ');
        assert.notEqual(this.updatedOnResult.getText().length, ' ');
        this.longWait().selectEventResult.click();
        return this;
    }

    searchEventForTotalReturnWithResultStatus(eventname) {
        this.customWait(20000);
        browser.waitUntil(() => {
            return this.wait().readyForReview.getText() == 'Ready for Review';
        }, 120000, 'File is still not Ready for Review');
        assert.notEqual(this.updatedByEvent.getText().length, ' ');
        assert.notEqual(this.updatedByResult.getText().length, ' ');
        assert.notEqual(this.updatedOnResult.getText().length, ' ');
        this.selectEventResult.click();
        return this;
    }

    validateResultStatus(eventname) {
        this.readyForReview.getText().should.equal('Generating Excel');
        this.longerWait(30000);
        this.readyForReview.getText().should.equal('Ready for Review');
        this.selectEventResult.click();
        return this;
    }

    editInvestorTermsType() {
        browser.waitUntil(() => {
            return this.snackBarMessage.isExisting();
        }, 60000, 'Snackbar did not go away after 60 seconds');
        this.wait().termType.click();
        this.termType.click();
        browser.keys('\uE017');
        browser.keys('\uE007');
        HomePage.clickSave();
        this.wait().confirmNoCIPInvestorTerms();
        browser.waitUntil(() => {
            return this.previousButton.isVisible();
        }, 30000, "Previous button is still not visible");
        this.wait().previousButton.click();
        this.longWait();
        assert.notEqual(this.termType.getText(), 'LP');
        this.wait().termType.click();
        this.termType.click();
        browser.keys(['\uE008', 'l', 'p']);
        browser.keys('\uE007');
        HomePage.clickSave();
        this.wait().confirmNoCIPInvestorTerms();
        browser.waitUntil(() => {
            return this.submitForApproval.isVisible();
        }, 30000, "Submit for Approval button is still not visible");
        this.wait().submitForApproval.click();
        browser.waitUntil(() => {
            return this.manageWaterfallScreen.isVisible();
        }, 60000, 'Home page did not load after creating Waterfall.');
    }

    downloadInvestorTerms() {
        this.longerWait().investorTerms.click();
        this.wait().downloadInvestorTermsButton.isEnabled().should.be.true;
    }

    downloadInvestorTermsTemplate() {
        this.downloadTermsTemplateButton.click();
    }

    selectRandomClient() {
        this.wait().accountSelector.click();
        let client = this.randomClient;
        $('#dropdown-options #' + client).click();
        return client;
    }

    goToTransactionsTab() {
        this.transactiosTab.waitForVisible();
        this.transactiosTab.click();
        this.longWait();
        return this;
    }

    goToTermsTab() {
        this.investorTermsTab.waitForVisible();
        this.investorTermsTab.click();
        return this;
    }

    getWaterfallIdFromURL() {
        let waterfallId = browser.getUrl().split('/')[6];
        return waterfallId;
    }

    waitForFilesToLoad() {
        browser.waitUntil(() => {
            return this.transactionTypeStatus.getText() == 'Upload Success';
        }, 60000, 'Expected Transactions to be loaded after sync');
    }

    goToSyncTab() {
        this.syncTab.waitForVisible();
        this.syncTab.click();
        this.syncFromInvestranButton.waitForVisible();
        this.syncFromInvestranButton.click();
        browser.waitUntil(() => {
            return this.syncFromInvestranButton.isEnabled();
        }, 60000, 'Expected Investran Sync to complete');
        return this;
    }

    goToEventsTab() {
        this.wait().eventsTab.click();
        this.addEventButton.waitForVisible();
        return this;
    }

    validateMultiplierTerm() {
        browser.waitUntil(() => {
            return this.snackBarMessage.isExisting();
        }, 60000, 'Snackbar did not go away after 60 seconds');
        this.wait();
        assert.equal(this.multiplierTerm.getText(), '1x');
        this.wait().termType.click();
        this.termType.click();
        browser.keys('\uE017');
        this.wait().confirmNoCIPInvestorTerms();
        browser.waitUntil(() => {
            return this.previousButton.isVisible();
        }, 30000, "Previous button is still not visible");
        this.wait().previousButton.click();
        browser.waitUntil(() => {
            return this.snackBarMessage.isExisting();
        }, 60000, 'Snackbar did not go away after 60 seconds');
        this.wait();
        assert.equal(this.multiplierTerm.getText(), '1x');
    }

    checkLoadStatusBeforeSync() {
        this.wait().navTransactionStatus.should.equal(this.strings.expectedNotLoadedTransactionStatus);
        this.wait().contributionsTransactionStatus.should.equal(this.strings.expectedNotLoadedTransactionStatus);
        this.wait().distributionsTransactionStatus.should.equal(this.strings.expectedNotLoadedTransactionStatus);
        this.wait().priorCarryRealizedTransactionStatus.should.equal(this.strings.expectedNotLoadedTransactionStatus);
        this.wait().priorCarryUnrealizedTransactionStatus.should.equal(this.strings.expectedNotLoadedTransactionStatus);
    }

    checkLoadStatusAfterSync() {
        this.wait().navTransactionStatus.should.equal(this.strings.expectedLoadedTransactionStatus);
        this.wait().contributionsTransactionStatus.should.equal(this.strings.expectedLoadedTransactionStatus);
        this.wait().distributionsTransactionStatus.should.equal(this.strings.expectedLoadedTransactionStatus);
        this.wait().priorCarryRealizedTransactionStatus.should.equal(this.strings.expectedNotLoadedTransactionStatus);
        this.wait().priorCarryUnrealizedTransactionStatus.should.equal(this.strings.expectedNotLoadedTransactionStatus);
    }

    searchEvent(eventName) {
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait();
        $('(//*[starts-with(@id,"event-result")]/span)').click();
        return this;
    }

    searchAndDeleteEvent(eventName) {
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        this.firstDeleteEventButton.waitForVisible();
        this.wait().expectedEventName.should.equal(eventName);
        this.wait().firstDeleteEventButton.click();
        this.confirmEventDeleteButton.waitForVisible();
        this.confirmDeleteMessage.should.contain(`Deleting an Event will also delete all Results within the Event. Are you sure you want to continue?`);
        this.wait().confirmEventDeleteButton.click();
        return this;
    }

    searchAndDeleteUDEvent(eventName) {
        this.eventNameSearchIconFilter.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        this.firstDeleteEventButton.waitForVisible();
        this.wait().expectedEventName.should.equal(eventName);
        this.wait().firstDeleteEventButton.click();
        this.confirmEventDeleteButton.waitForVisible();
        this.confirmDeleteMessage.should.contain(`Deleting an Event will also delete all Results within the Event. Are you sure you want to continue?`);
        this.wait().confirmEventDeleteButton.click();
        return this;
    }

    deleteEvent(eventName) {
        this.wait().deleteEventButton.click();
        this.wait().confirmDeleteMessage.should.equal(`Deleting an Event will also delete all Results within the Event. Are you sure you want to continue?`);
        this.wait().confirmDeleteButton.click();
        return this;
    }

    comeBack() {
        this.backButton.click();
        this.addEventButton.waitForVisible();
        return this;
    }

    clickAddEvent() {
        this.addEventButton.click();
        this.eventsLegend.should.equal('Add Event');
        return this;
    }

    clickSyncFromInvestran() {
        this.wait().syncFromInvestran.click();
        this.waitForTransacationSync();
        return this;
    }

    validateUpdatedTermsValuesPostSynch() {
        this.investorTermsGridTable.waitForText(30000);
        const gridDetail = this.investorTermsGridTable.getText().split("\n");
        let expectedTermsList = ['22 %', '0 %', '33 %', '44 %'];
        gridDetail.should.contain.members(expectedTermsList);
    }

    validateUploadTransactionsForReadOnlyRole() {
        this.navFileUploadButton.isEnabled().should.be.false;
    }

    validateAggregateExpenseTransaction(waterfallName) {
        this.clickSaveButton();
        this.wait().buildTierAggregateReturnOfExpenseCard.isExisting().should.be.true;
        this.tier4LPA.isExisting().should.be.true;
        this.selectSeedWaterfall(waterfallName);
        this.wait().aggregateExpenseTierDetail.getText().should.equal('Tier 3 - Return of Expense (Allocable)');
        this.goToTransactionsTab();
        this.wait().aggregateExpenseContributionsBucket.getText().should.equal('Expense Contributions (Aggregate)');
    }

    calculateInvestranLinkedCashDistibutionEvent(date) {
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
        this.calculateEventButton.waitForEnabled(30000);
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.searchEventForTotalReturnWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('1 %');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.eventsTable.getText().split("\n");
        let expectedCashDistList = ['1 %'];
        gridDetail.should.contain.members(expectedCashDistList);
        return cdeventname;
    }

    calculateInvestranLinkedUnrealizedDistibutionEvent(date) {
        const udeventname = 'AutoBot-UD-' + util.generateRandomString(8);
        this.eventName.setValue(udeventname);
        this.unrealizedDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.saveEventButton.click();
        browser.waitUntil(() => {
            return this.addEventButton.isVisible();
        }, 60000, 'New Event did not created in time.');
        this.wait().addEventResultButton.click();
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.wait().searchEventForTotalReturnWithResultStatus(udeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('1 %');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.eventsTable.getText().split("\n");
        let expectedUnrealizedDistList = ['1 %'];
        gridDetail.should.contain.members(expectedUnrealizedDistList);
        return udeventname;
    }

    calculateCashDistibutionEvent(date) {
        const cdeventname = 'CD-Event-' + util.generateRandomString(8);
        this.eventName.setValue(cdeventname);
        this.cashDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible(5000);
        this.confirmationButton.click();
        this.eventsTable.waitForText(30000);
        const gridDetail = this.eventsTable.getText().split("\n");
        let expectedCashDistList = ['Investor 1', '60963', '8 %', '80 %', '20 %', '20 %', '4,167,096.96', 'Investor 2', '47104', '0 %', '42,718.13', 'Investor 3', '85295', '2,018,432.13', 'Investor 4'];
        gridDetail.should.contain.members(expectedCashDistList);
        return cdeventname;
    }

    calculateCashDistibutionEventForTotalReturn(date) {
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.searchEventForTotalReturnWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.eventsTable.getText().split("\n");
        let expectedCashDistList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', '% to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.',
            '% to CIP', '8 %', '0 %', '20 %'];
        gridDetail.should.contain.members(expectedCashDistList);
        browser.execute(function () {
            window.scrollTo({
                top: 600,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.slideAndValidateAllColumns();
        return cdeventname;
    }

    calculateEventForResultStatus(date) {
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
        this.calculateEventButton.waitForEnabled(30000);
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.longWait().validateResultStatus(cdeventname);
        return cdeventname;
    }

    calculateCashDistibutionEventForTotalReturnDownload(date) {
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.searchEventForTotalReturnWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        return cdeventname;
    }

    calculateCashDistibutionEventForTotalReturnReadOnlyRole(date) {
        this.addEventButton.click();
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.searchEventForTotalReturnWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('141352');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.eventsTable.getText().split("\n");
        let expectedCashDistList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', '% to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.',
            '% to CIP', '1 %', '0 %', '141354'];
        gridDetail.should.contain.members(expectedCashDistList);
        browser.execute(function () {
            window.scrollTo({
                top: 600,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.wait().backButton.click();
        return cdeventname;
    }

    slideAndValidateAllColumns() {
        this.validateColumnNames();
        this.eventResultSlider.click();
        this.validateColumnNames();
        for (let k = 0; k < 9; k++) {
            for (let i = 0; i < 140; i++) {
                browser.keys(['Meta', '\uE014'])
            }
            this.validateColumnNames();
        }
    };

    validateEventFlow(date) {
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
        this.calculateEventButton.waitForEnabled(30000);
        this.calculateEventButton.isEnabled().should.be.true;
        this.eventName.isEnabled().should.be.false;
        this.cashDistributionEventType.isEnabled().should.be.false;
        this.unrealizedDistributionEventType.isEnabled().should.be.false;
        this.eventDate.isEnabled().should.be.true;
        this.eventComments.isEnabled().should.be.true;
        this.syncFromInvestran.isExisting().should.be.true;
        this.saveEventButton.isExisting().should.be.false;
        this.eventBackButton.isExisting().should.be.true;
        this.wait().eventBackButton.click();
        this.wait().editEventButton.click();
        this.eventName.isEnabled().should.be.true;
        this.eventDate.isEnabled().should.be.true;
        this.wait().eventComments.isEnabled().should.be.true;
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.cashDistributionEventType.isEnabled().should.be.false;
        this.unrealizedDistributionEventType.isEnabled().should.be.false;
        return cdeventname;
    }

    validateEventApprovalFlow(date) {
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.customWait(20000);
        browser.waitUntil(() => {
            return this.wait().readyForReview.getText() == 'Ready for Review';
        }, 120000, 'File is still not Ready for Review');
        this.longWait().generatedEventResult.click();
        this.wait().refresh();
        this.goToEventsTab();
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(cdeventname);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait().selectedEventResult.click();
        this.longWait().eventSubmitForApprovalButton.isEnabled().should.be.true;
        this.downloadEventsButton.isEnabled().should.be.true;
        this.eventMarkAsReviewdButton.isEnabled().should.be.true;
        this.backButton.isEnabled().should.be.true;
        this.backButton.click();
        return cdeventname;
    }

    clickEventMarkedAsReviewd(eventName) {
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait().selectedEventResult.click();
        this.eventMarkAsReviewdButton.isEnabled().should.be.true;
        this.eventMarkAsReviewdButton.click();
        browser.waitUntil(() => {
            return this.wait().reviewdStatus.getText() == 'Reviewed';
        }, 120000, 'Status is not Updated to Reviewd');
    }

    validateEventResultMarkedAsReviewdPermission(eventName) {
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait().selectedEventResult.click();
        this.wait().eventSubmitForApprovalButton.isEnabled().should.be.true;
        this.downloadEventsButton.isEnabled().should.be.true;
        this.backButton.isEnabled().should.be.true;
        this.backButton.click();
    }

    clickEventSubmitForApproval(eventName) {
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait().selectedEventResult.click();
        this.longerWait();
        this.eventSubmitForApprovalButton.isEnabled().should.be.true;
        this.eventSubmitForApprovalButton.click();
        browser.waitUntil(() => {
            return this.wait().reviewdStatus.getText() == 'Pending Approval';
        }, 120000, 'Status is not Updated to Pending Approval');
    }

    validateEventResultApprovalPermission(eventName) {
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait().selectedEventResult.click();
        this.eventApprovalButton.isEnabled().should.be.false;
        this.eventRejectButton.isEnabled().should.be.false;
        this.downloadEventsButton.isEnabled().should.be.true;
        this.backButton.isEnabled().should.be.true;
    }

    validateButtonsForAccountantControllerAdminRole(eventName) {
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait().selectedEventResult.click();
        this.longWait().eventSubmitForApprovalButton.isEnabled().should.be.true;
        this.eventMarkAsReviewdButton.isEnabled().should.be.true;
    }

    validateButtonsForAdminControllerRole(eventName) {
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait().selectedEventResult.click();
        this.longWait().eventApprovalButton.isEnabled().should.be.true;
        this.eventRejectButton.isEnabled().should.be.true;
        this.downloadEventsButton.isEnabled().should.be.true;
        this.backButton.isEnabled().should.be.true;
    }

    validateApprovedUnApprovedForAdminControllerRole(eventName) {
        this.eventApprovalButton.click();
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        browser.waitUntil(() => {
            return this.wait().readyForReview.getText() == 'Approved';
        }, 120000, 'Status is still not updated to Approved');
        this.wait().eventResultDeleteButton.isEnabled().should.be.false;
        this.wait().selectedEventResult.click();
        this.longWait().eventUnApproveButton.waitForEnabled();
        this.eventUnApproveButton.isEnabled().should.be.true;
        this.downloadEventsButton.isEnabled().should.be.true;
        this.backButton.isEnabled().should.be.true;
        this.eventUnApproveButton.click();
        this.wait().eventUnApprovePopup.getText().should.contain(this.strings.expectedUnApprovePopupMessage);
        this.unApprovePopupButton.click();
        this.refresh();
        this.goToEventsTab();
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        browser.waitUntil(() => {
            return this.wait().readyForReview.getText() == 'Ready for Review';
        }, 120000, 'Status is still not updated to Ready for Review');
        this.wait().eventResultDeleteButton.isEnabled().should.be.true;
    }

    validateRejectButtonsForAdminControllerRole(eventName) {
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait().selectedEventResult.click();
        this.wait().eventRejectButton.isEnabled().should.be.true;
        this.eventRejectButton.click();
        this.refresh();
        this.goToEventsTab();
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        browser.waitUntil(() => {
            return this.wait().rejectEventStatus.getText() == 'Rejected';
        }, 120000, 'Status is still not updated to Rejected');
    }

    validateButtonsForAccountantRole(eventName) {
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait().selectedEventResult.click();
        this.longWait().eventApprovalButton.isEnabled().should.be.false;
        this.eventRejectButton.isEnabled().should.be.false;
    }

    generateMultipleEventResults(eventName) {
        this.refresh();
        this.goToEventsTab();
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait().generatedEventResult.click();
        this.eventSubmitForApprovalButton.isEnabled().should.be.true;
        this.eventSubmitForApprovalButton.click();
        this.refresh();
        this.goToEventsTab();
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        for (let i = 1; i < 2; i++) {
            this.wait().addEventResultButton.click();
            this.calculateEventButton.isEnabled().should.be.true;
            this.calculateEventButton.click();
            this.confirmationButton.waitForVisible();
            this.confirmationButton.click();
            this.customWait(20000);
            $('(//*[starts-with(@id,"event-result")]/span)[' + i + ']').click();
            this.submitForApproval.click();
        }
    }

    validateApprovedMultipleEventResults(eventName) {
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait().readyForReview.click();
        this.eventApprovalButton.isEnabled().should.be.true;
        this.eventApprovalButton.click();
        this.refresh();
        this.goToEventsTab();
        this.eventNameSearchIconFilter.click();
        this.searchFilter.click();
        this.selectDropdown.click();
        this.wait().setEventFilterToEquals.click();
        this.eventNameSearch.click();
        this.wait().eventNameSearch.setValue(eventName);
        browser.waitUntil(() => {
            return this.eventNameSearchResult.isVisible();
        }, 60000, 'Created Event did not appear on Search');
        this.wait().eventNameSearchResult.click();
        this.wait();
        $('(//*[starts-with(@id,"event-result")]/span)[1]').click();
        this.eventApprovalButton.isEnabled().should.be.false;
    }

    validateColumnNames() {
        let expectedCashDistColumnsList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', '% to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.', '% to CIP', 'Catch-Up Target', ' % to CIP', 'Final Split Alloc.', '% to CIP', 'T1: Available Proceeds', 'T1: Target - LP',
            'T1: Allocation - LP', 'T2: Available Proceeds', 'T2: Target - LP', 'T2: Allocation - LP', 'T3: Available Proceeds', 'T3: Target - LP', 'T3: Allocation - LP', 'T3: Target - CIP', 'T3: Allocation - CIP', 'T4: Available Proceeds', 'T4: Allocation - LP',
            'T4: Allocation - CIP', 'Total Allocation - LP', 'Total Allocation - CIP', 'Prior Carry (Realized) - CIP', 'Prior Carry (Unrealized) - CIP', 'Current Calculated Carried Interest - LP to CIP'];
        var columnHeaders = this.wait().eventColumnNames.getText().split("\n");
        expectedCashDistColumnsList.should.contain.members(columnHeaders);
    }

    calculateUnrealizedDistibutionEventForTotalReturn(date) {
        const udeventname = 'AutoBot-UD-' + util.generateRandomString(8);
        this.eventName.setValue(udeventname);
        this.unrealizedDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.saveEventButton.click();
        browser.waitUntil(() => {
            return this.addEventButton.isVisible();
        }, 60000, 'New Event did not created in time.');
        this.wait().addEventResultButton.click();
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.searchEventForTotalReturnWithResultStatus(udeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.eventsTable.getText().split("\n");
        let expectedUnrealizedDistList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', '% to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.',
            '% to CIP', '8 %', '0 %', '20 %'];
        gridDetail.should.contain.members(expectedUnrealizedDistList);
        return udeventname;
    }

    calculateUnrealizedDistibutionEventForTotalReturnDownload(date) {
        const udeventname = 'AutoBot-UD-' + util.generateRandomString(8);
        this.eventName.setValue(udeventname);
        this.unrealizedDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.saveEventButton.click();
        browser.waitUntil(() => {
            return this.addEventButton.isVisible();
        }, 60000, 'New Event did not created in time.');
        this.wait().addEventResultButton.click();
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.searchEventForTotalReturnWithResultStatus(udeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        return udeventname;
    }

    calculateCashDistibutionEventForDealByDeal(date) {
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.searchEventForDealbyDealWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.wait().eventsTable.getText().split("\n");
        let expectedCashDistList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', '% to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.',
            '% to CIP', 'Investor 1', '60963', '8 %', '20 %'];
        gridDetail.should.contain.members(expectedCashDistList);
        return cdeventname;
    }

    calculateUnrealizedDistibutionEventForDealByDeal(date) {
        const udeventname = 'AutoBot-UD-' + util.generateRandomString(8);
        this.eventName.setValue(udeventname);
        this.unrealizedDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.saveEventButton.click();
        browser.waitUntil(() => {
            return this.addEventButton.isVisible();
        }, 60000, 'New Event did not created in time.');
        this.wait().addEventResultButton.click();
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.searchEventForDealbyDealWithResultStatus(udeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.eventsTable.getText().split("\n");
        let expectedUnrealizedDistList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', '% to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.',
            '% to CIP', 'Investor 1', '60963', '8 %', '25 %', '20 %'];
        gridDetail.should.contain.members(expectedUnrealizedDistList);
        return udeventname;
    }

    calculateCashDistibutionEventForDealByDealDownload(date) {
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.searchEventForDealbyDealWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        return cdeventname;
    }

    calculateUnrealizedDistibutionEventForDealByDealDownload(date) {
        const udeventname = 'AutoBot-UD-' + util.generateRandomString(8);
        this.eventName.setValue(udeventname);
        this.unrealizedDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.saveEventButton.click();
        browser.waitUntil(() => {
            return this.addEventButton.isVisible();
        }, 60000, 'New Event did not created in time.');
        this.wait().addEventResultButton.click();
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.searchEventForDealbyDealWithResultStatus(udeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        return udeventname;
    }

    calculateUnrealizedDistibutionEvent(date) {
        const udeventname = 'UD-Event-' + util.generateRandomString(8);
        this.wait().eventName.setValue(udeventname);
        this.wait().unrealizedDistributionEventType.click();
        this.wait().eventDate.setValue(date);
        this.wait().eventComments.setValue(util.generateRandomString(8));
        this.wait().calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.wait().confirmationButton.click();
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.eventsTable.getText().split("\n");
        let expectedUnrealizedDistList = ['Investor 1', '60963', '8 %', '80 %', '20 %', '20 %', '4,367,096.96', 'Investor 2', '47104', '0 %', '242,718.13', 'Investor 3', '85295', '2,218,432.13', 'Investor 4'];
        gridDetail.should.contain.members(expectedUnrealizedDistList);
        return udeventname;
    }

    calculatePreferredReturnCashDistibutionEventForDealByDeal(date) {
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.searchEventForDealbyDealWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.eventsTable.getText().split("\n");
        let expectedCashDistList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', '% to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.',
            '% to CIP', 'Investor 1', '60963', '11 %', '80 %', '15 %', '20 %', '11,335,000.00'];
        gridDetail.should.contain.members(expectedCashDistList);
        return cdeventname;
    }

    calculatePreferredReturnUnrealizedDistibutionEventForDealByDeal(date) {
        const udeventname = 'AutoBot-UD-' + util.generateRandomString(8);
        this.eventName.setValue(udeventname);
        this.unrealizedDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.saveEventButton.click();
        browser.waitUntil(() => {
            return this.addEventButton.isVisible();
        }, 60000, 'New Event did not created in time.');
        this.wait().addEventResultButton.click();
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.searchEventForDealbyDealWithResultStatus(udeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.eventsTable.getText().split("\n");
        let expectedUnrealizedDistList = ['Investor Name', 'Investor Id', 'Preferred Return % to LP', 'Preferred Allocation % to CIP', 'Catch-Up Allocation % to CIP', 'Catch-Up Target % to CIP', 'Final Split % to CIP',
            'Investor 1', '60963', '11 %', '15 %', '20 %', '42,940,000.00'];
        gridDetail.should.contain.members(expectedUnrealizedDistList);
        return udeventname;
    }

    calculateCashDistibutionEventForTotalReturnMultiplier(date) {
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.searchEventForTotalReturnWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.wait().eventsTable.getText().split("\n");
        let expectedCashDistList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', 'X to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.',
            '% to CIP', '3.75x', '0 %'];
        gridDetail.should.contain.members(expectedCashDistList);
        return cdeventname;
    }

    calculateUnrealizedDistibutionEventForTotalReturnMultiplier(date) {
        const udeventname = 'AutoBot-UD-' + util.generateRandomString(8);
        this.eventName.setValue(udeventname);
        this.unrealizedDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.saveEventButton.click();
        browser.waitUntil(() => {
            return this.addEventButton.isVisible();
        }, 60000, 'New Event did not created in time.');
        this.wait().addEventResultButton.click();
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.searchEventForTotalReturnWithResultStatus(udeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.wait().eventsTable.getText().split("\n");
        let expectedUnrealizedDistList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', 'X to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.',
            '% to CIP', '3.75x', '0 %'];
        gridDetail.should.contain.members(expectedUnrealizedDistList);
        return udeventname;
    }

    calculateCashDistibutionEventForDealByDealMultiplier(date) {
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.searchEventForDealbyDealWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.wait().eventsTable.getText().split("\n");
        let expectedCashDistList = ['Investor Name', 'Investor Id', 'Pref. Return Target X to LP', 'Catch-Up Alloc. % to CIP', 'Pref. Return Alloc. % to CIP',
            'Investor 1', '60963', '0', '3.75x'];
        gridDetail.should.contain.members(expectedCashDistList);
        return cdeventname;
    }

    calculateUnrealizedDistibutionEventForDealByDealMultiplier(date) {
        const udeventname = 'AutoBot-UD-' + util.generateRandomString(8);
        this.eventName.setValue(udeventname);
        this.unrealizedDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.saveEventButton.click();
        browser.waitUntil(() => {
            return this.addEventButton.isVisible();
        }, 60000, 'New Event did not created in time.');
        this.wait().addEventResultButton.click();
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.searchEventForDealbyDealWithResultStatus(udeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.wait().eventsTable.getText().split("\n");
        let expectedUnrealizedDistList = ['Investor Name', 'Investor Id', 'Pref. Return Target X to LP', 'Catch-Up Alloc. % to CIP', 'Pref. Return Alloc. % to CIP',
            'Investor 1', '60963', '3.75x', '0'];
        gridDetail.should.contain.members(expectedUnrealizedDistList);
        return udeventname;
    }

    calculateCashDistibutionEventForTotalReturnSimpleInterest(date) {
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.searchEventForTotalReturnWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.wait().eventsTable.getText().split("\n");
        let expectedCashDistList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', '% to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.',
            '% to CIP', '8 %', '0 %', '20 %'];
        gridDetail.should.contain.members(expectedCashDistList);
        return cdeventname;
    }

    calculateUnrealizedDistibutionEventForTotalReturnSimpleInterest(date) {
        const udeventname = 'AutoBot-UD-' + util.generateRandomString(8);
        this.eventName.setValue(udeventname);
        this.unrealizedDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.saveEventButton.click();
        browser.waitUntil(() => {
            return this.addEventButton.isVisible();
        }, 60000, 'New Event did not created in time.');
        this.wait().addEventResultButton.click();
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.searchEventForTotalReturnWithResultStatus(udeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.wait().eventsTable.getText().split("\n");
        let expectedUnrealizedDistList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', '% to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.',
            '% to CIP', '8 %', '0 %', '20 %'];
        gridDetail.should.contain.members(expectedUnrealizedDistList);
        return udeventname;
    }

    calculateCashDistibutionEventForDealByDealSimpleInterest(date) {
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.searchEventForDealbyDealWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.wait().eventsTable.getText().split("\n");
        let expectedCashDistList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', '% to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.',
            '% to CIP', 'Investor 1', '60963', '8 %', '15 %', 'Investor 2'];
        gridDetail.should.contain.members(expectedCashDistList);
        return cdeventname;
    }

    calculateUnrealizedDistibutionEventForDealBySimpleInterest(date) {
        const udeventname = 'AutoBot-UD-' + util.generateRandomString(8);
        this.eventName.setValue(udeventname);
        this.unrealizedDistributionEventType.click();
        this.eventDate.setValue(date);
        this.eventComments.setValue(util.generateRandomString(8));
        this.saveEventButton.isEnabled().should.be.true;
        this.saveEventButton.click();
        browser.waitUntil(() => {
            return this.addEventButton.isVisible();
        }, 60000, 'New Event did not created in time.');
        this.wait().addEventResultButton.click();
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.searchEventForDealbyDealWithResultStatus(udeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        const gridDetail = this.wait().eventsTable.getText().split("\n");
        let expectedUnrealizedDistList = ['Investor Name', 'Investor Id', 'Investor Type', 'Pref. Return Target', '% to LP', 'Pref. Return Alloc.', '% to CIP', 'Catch-Up Alloc.',
            '% to CIP', 'Investor 1', '60963', '15 %', 'Investor 2'];
        gridDetail.should.contain.members(expectedUnrealizedDistList);
        return udeventname;
    }

    calculateCashDistibutionEventForDealByDealForAggregateExpense(date) {
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.wait().calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.wait().confirmationButton.click();
        this.searchEventForDealbyDealWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('Investor 1');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        return cdeventname;
    }

    calculateCashDistibutionEventForDealByDealForDayInterval(date) {
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
        this.calculateEventButton.isEnabled().should.be.true;
        this.wait().calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.wait().confirmationButton.click();
        this.searchEventForDealbyDealWithResultStatus(cdeventname);
        browser.waitUntil(() => {
            return this.eventsTable.getText().includes('DAVIDE SERRA');
        }, 60000, 'Event Calculation Result Grid did not load in time.');
        return cdeventname;
    }

    validateErroEventMessage() {
        this.wait().addEventResultButton.click();
        this.calculateEventButton.waitForEnabled(30000);
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        browser.waitUntil(() => {
            return this.snackBarMessage.isExisting();
        }, 30000, 'Snackbar Success Message did not appear');
        browser.waitUntil(() => {
            return this.wait().readyForReview.getText() == 'Calculation Error';
        }, 30000, 'Result status did not get populated with right error message.');
        // this.readyForReview.getText() == 'Calculation Error';
    }

    downloadEvents() {
        this.wait().downloadEventsButton.click();
        console.log('Clicked on Download Button');
        this.longerWait();
    }

    downloadEventsResult() {
        this.downloadEventsButton.waitForVisible();
        this.downloadEventsButton.click();
        browser.waitUntil(() => {
            return this.downloadEventsButton.waitForVisible();
        }, 15000, 'File did not finish Downloading...');
    }

    calculateCDEventForDealByDeal(date) {
        const cdeventname = 'AutoBot-CD-' + util.generateRandomString(8);
        this.eventName.setValue(cdeventname);
        this.cashDistributionEventType.click();
        this.eventDate.setValue(date);
        const comment = this.eventComments.setValue(util.generateRandomString(8));
        this.calculateEventButton.isEnabled().should.be.true;
        this.calculateEventButton.click();
        this.confirmationButton.waitForVisible();
        this.confirmationButton.click();
        this.eventsTable.waitForText(30000);
        return cdeventname;
    }

    isNavLoaded() {
        if (this.navFileStatus.getText() == 'Not Loaded') {
            this.wait().navDeleteButton.isEnabled().should.be.false;
            return false;
        } else {
            return true;
        }
    }

    isContributionsLoaded() {
        if (this.contributionsFileStatus.getText() == 'Not Loaded') {
            this.contributionsDeleteButton.isEnabled().should.be.false;
            return false;
        } else {
            return true;
        }
    }

    isDistributionsLoaded() {
        if (this.distributionsFileStatus.getText() == 'Not Loaded') {
            this.distributionsDeleteButton.isEnabled().should.be.false;
            return false;
        } else {
            return true;
        }
    }

    isPCILoaded() {
        if (this.pciFileStatus.getText() == 'Not Loaded') {
            this.pciRealizedDeleteButton.isEnabled().should.be.false;
            return false;
        } else {
            return true;
        }
    }

    isPCIUnrealizedLoaded() {
        if (this.pciUnrealizedFileStatus.getText() == 'Not Loaded') {
            this.pciUnRealizedDeleteButton.isEnabled().should.be.false;
            return false;
        } else {
            return true;
        }
    }

    validateNoTransactionsUploadFileStatus(filename) {
        this.pciRealizedFileUploadButton.waitForVisible();
        this.wait().pciRealizedFileUploadButton.click();
        this.fileUploadButton.chooseFile(filename);
        this.uploadSubmitButton.waitForVisible();
        this.uploadSubmitButton.click();
        browser.waitUntil(() => {
            return this.wait().priorCarryRealizedTransactionStatus == 'Upload Success';
        }, 30000, 'Prior Carry Transaction did not Upload Succesfully');
        browser.waitUntil(() => {
            return this.wait().zeroTransactionCount == '0';
        }, 30000, 'Prior Carry Transaction did not show 0 upload value.');
    }

    validateNoTransactionsDeleteFileStatus(filename) {
        this.pciRealizedDeleteButton.waitForVisible();
        this.pciRealizedDeleteButton.click();
        browser.waitUntil(() => {
            return this.confirmDeleteTextPopup.isVisible();
        }, 30000, 'Expected Realized Transactions to be not loaded after deletion');
        this.confirmDeleteText.should.contain(this.strings.expectedConfirmDeleteMessage1 + " Prior Carried Interest - Realized " + this.strings.expectedConfirmDeleteMessage2);
        this.confirmDeleteButton.click();
        browser.waitUntil(() => {
            return this.pciFileStatus.getText() == 'Not Loaded';
        }, 30000, 'Expected Realized Transactions to be not loaded after deletion');
        this.wait().pciRealizedDeleteButton.isEnabled().should.be.false;
    }

    uploadTransactionsDataFile(filename) {
        if (filename.includes("nav")) {
            this.wait().navFileUploadButton.click();
        } else if (filename.includes("contributions")) {
            this.wait().contributionsFileUploadButton.click();
        } else if (filename.includes("distributions")) {
            this.wait().distributionsFileUploadButton.click();
        } else if (filename.includes("prior_carried_interest")) {
            this.wait().pciRealizedFileUploadButton.click();
        }
        this.fileUploadButton.chooseFile(filename);
        this.wait().uploadSubmitButton.click();
        this.okButton.waitForVisible(15000);
        this.uploadDownloadText.should.contain(this.strings.expectedUploadSuccessMessage);
        this.okButton.click();
        if (filename.includes("nav")) {
            this.wait().navFileStatus.getText().should.equal("Loaded");
        } else if (filename.includes("contributions")) {
            this.wait().contributionsFileStatus.getText().should.equal("Loaded");
        } else if (filename.includes("distributions")) {
            this.wait().distributionsFileStatus.getText().should.equal("Loaded");
        } else if (filename.includes("prior_carried_interest")) {
            this.wait().pciFileStatus.getText().should.equal("Loaded");
        }
        return this;
    }

    uploadToralReturnTransactionsDataFile(filename) {
        this.navFileUploadButton.waitForVisible();
        if (filename.includes("nav") || filename.includes("NAV")) {
            this.wait().navFileUploadButton.click();
        } else if (filename.includes("contributions") || filename.includes("Contributions")) {
            this.wait().contributionsFileUploadButton.click();
        } else if (filename.includes("distributions") || filename.includes("Distributions")) {
            this.wait().distributionsFileUploadButton.click();
        } else if (filename.includes("realized") || filename.includes("Prior-Carry-Realized")) {
            this.wait().pciRealizedFileUploadButton.click();
        } else if (filename.includes("unrealized") || filename.includes("Prior-Carry-Unrealized")) {
            this.wait().pciUnrealizedFileUploadButton.click();
        }
        this.fileUploadButton.chooseFile(filename);
        this.uploadSubmitButton.click();
        this.wait();
        if (filename.includes("nav") || filename.includes("Nav")) {
            browser.waitUntil(() => {
                return this.navFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected NAV Transactions to be loaded after upload');
        } else if (filename.includes("contributions") || filename.includes("Contributions")) {
            browser.waitUntil(() => {
                return this.contributionsFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Contribution Transactions to be loaded after upload');
        } else if (filename.includes("distributions") || filename.includes("Distributions")) {
            browser.waitUntil(() => {
                return this.distributionsFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Distribution Transactions to be loaded after upload');
        } else if (filename.includes("realized") || filename.includes("Prior-Carry-Realized")) {
            browser.waitUntil(() => {
                return this.pciFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected PCI-Realized Transactions to be loaded after upload');
        } else if (filename.includes("unrealized") || filename.includes("Prior-Carry-Unrealized")) {
            browser.waitUntil(() => {
                return this.pciUnrealizedFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected PCI-Unrealized Transactions to be loaded after upload');
        }
        return this;
    }

    uploadDBDTransactionsDataFile(filename) {
        this.dbdRealizedInvestmentContributionFileUpload.waitForVisible();
        if (filename.includes("DBD_Realized_Investment_Contributions")) {
            this.wait().dbdRealizedInvestmentContributionFileUpload.click();
        } else if (filename.includes("DBD_Realized_Gain_Loss")) {
            this.wait().dbdRealizedGainLossFileUpload.click();
        } else if (filename.includes("DBD_Investment_Contributions")) {
            this.wait().dbdInvestmentContributionFileUpload.click();
        } else if (filename.includes("DBD_Writedowns")) {
            this.wait().dbdWriteOffsFileUpload.click();
        } else if (filename.includes("DBD_Expense_Contributions")) {
            this.wait().dbdExpenseContributionFileUpload.click();
        } else if (filename.includes("DBD_AFE_Numerator")) {
            this.wait().dbdAFENumeratorFileUpload.click();
        } else if (filename.includes("DBD_AFE_Denominator")) {
            this.wait().dbdAFEDenominatorFileUpload.click();
        } else if (filename.includes("DBD_Prior_Carried_Interest_Realized")) {
            this.wait().dbdPriorCarriedRealizedFileUpload.click();
        } else if (filename.includes("DBD_Prior_Carried_Interest_Unrealized")) {
            this.wait().dbdPriorCarriedUnRealizedFileUpload.click();
        } else if (filename.includes("DBD_NAV")) {
            this.wait().dbdNAVFileUpload.click();
        }
        this.wait().fileUploadButton.chooseFile(filename);
        this.wait().uploadSubmitButton.click();
        if (filename.includes("Realized Investment Contributions")) {
            browser.waitUntil(() => {
                return this.dbdRealizedInvestmentContributionFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Realized Investment Contributions Transactions to be loaded after upload');
        } else if (filename.includes("Realized Gain Loss")) {
            browser.waitUntil(() => {
                return this.dbdRealizedGainLossFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Realized Gain Loss Transactions to be loaded after upload');
        } else if (filename.includes("Investment Contributions upload")) {
            browser.waitUntil(() => {
                return this.dbdInvestmentContributionFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Investment Contributions upload Transactions to be loaded after upload');
        } else if (filename.includes("Writedowns")) {
            browser.waitUntil(() => {
                return this.dbdWriteOffsFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Writedowns Transactions to be loaded after upload');
        } else if (filename.includes("Expense Contributions")) {
            browser.waitUntil(() => {
                return this.dbdExpenseContributionFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Expense Contributions Transactions to be loaded after upload');
        } else if (filename.includes("AFE Numerator")) {
            browser.waitUntil(() => {
                return this.dbdAFENumeratorFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected AFE Numerator Transactions to be loaded after upload');
        } else if (filename.includes("AFE Denominator")) {
            browser.waitUntil(() => {
                return this.dbdAFEDenominatorFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected AFE Denominator Transactions to be loaded after upload');
        } else if (filename.includes("Prior Carried Interest Realized upload")) {
            browser.waitUntil(() => {
                return this.dbdPriorCarriedRealizedFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Prior Carried Interest Realized Transactions to be loaded after upload');
        } else if (filename.includes("Prior Carried Interest Unrealized upload")) {
            browser.waitUntil(() => {
                return this.dbdPriorCarriedUnRealizedFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Prior Carried Interest Unrealized Transactions to be loaded after upload');
        } else if (filename.includes("DBD_NAV upload")) {
            browser.waitUntil(() => {
                return this.dbdNAVFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected NAV Transactions to be loaded after upload');
        }

        return this;
    }

    uploadAggregateExpenseTransactionsDataFile(filename) {
        this.dbdRealizedInvestmentContributionFileUpload.waitForVisible();
        if (filename.includes("Aggregate_Expense_Realized Investment Contributions upload")) {
            this.wait().dbdRealizedInvestmentContributionFileUpload.click();
        } else if (filename.includes("Aggregate_Expense_Realized Gain Loss upload")) {
            this.wait().dbdRealizedGainLossFileUpload.click();
        } else if (filename.includes("Aggregate_Expense_Investment Contributions upload")) {
            this.wait().dbdInvestmentContributionFileUpload.click();
        } else if (filename.includes("Aggregate_Expense_Writedowns upload")) {
            this.wait().dbdWriteOffsFileUpload.click();
        } else if (filename.includes("Aggregate_Expense_Expense Contributions Allocable upload")) {
            this.wait().dbdExpenseContributionFileUpload.click();
        } else if (filename.includes("Aggregate_Expense_Expense Contributions Aggregate upload")) {
            this.wait().aggregateExpenseContributionAggregateFileUpload.click();
        } else if (filename.includes("Aggregate_Expense_AFE Numerator upload")) {
            this.wait().dbdAFENumeratorFileUpload.click();
        } else if (filename.includes("Aggregate_Expense_AFE Denominator upload")) {
            this.wait().dbdAFEDenominatorFileUpload.click();
        } else if (filename.includes("Aggregate_Expense_Prior Carried Interest Realized upload")) {
            this.wait().dbdPriorCarriedRealizedFileUpload.click();
        } else if (filename.includes("Aggregate_Expense_Prior Carried Interest Unrealized upload")) {
            this.wait().dbdPriorCarriedUnRealizedFileUpload.click();
        } else if (filename.includes("Aggregate_Expense_NAV upload")) {
            this.wait().dbdNAVFileUpload.click();
        }
        this.wait().fileUploadButton.chooseFile(filename);
        this.wait().uploadSubmitButton.click();
        if (filename.includes("Aggregate_Expense_Realized Investment Contributions upload")) {
            browser.waitUntil(() => {
                return this.dbdRealizedInvestmentContributionFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Realized Investment Contributions Transactions to be loaded after upload');
        } else if (filename.includes("Aggregate_Expense_Realized Gain Loss upload")) {
            browser.waitUntil(() => {
                return this.dbdRealizedGainLossFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Realized Gain Loss Transactions to be loaded after upload');
        } else if (filename.includes("Aggregate_Expense_Investment Contributions upload")) {
            browser.waitUntil(() => {
                return this.dbdInvestmentContributionFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Investment Contributions upload Transactions to be loaded after upload');
        } else if (filename.includes("Aggregate_Expense_Writedowns upload")) {
            browser.waitUntil(() => {
                return this.dbdWriteOffsFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Writedowns Transactions to be loaded after upload');
        } else if (filename.includes("Aggregate_Expense_Expense Contributions Allocable upload")) {
            browser.waitUntil(() => {
                return this.aggregateExpenseContributionAllocalbleFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Expense Contributions Transactions to be loaded after upload');
        } else if (filename.includes("Aggregate_Expense_Expense Contributions Aggregate upload")) {
            browser.waitUntil(() => {
                return this.aggregateExpenseContributionAggregateFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Expense Contributions Transactions to be loaded after upload');
        } else if (filename.includes("Aggregate_Expense_AFE Numerator upload")) {
            browser.waitUntil(() => {
                return this.aggregateExpenseAFENumeratorFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected AFE Numerator Transactions to be loaded after upload');
        } else if (filename.includes("Aggregate_Expense_AFE Denominator upload")) {
            browser.waitUntil(() => {
                return this.aggregateExpenseAFEDenominatorFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected AFE Denominator Transactions to be loaded after upload');
        } else if (filename.includes("Aggregate_Expense_Prior Carried Interest Realized upload")) {
            browser.waitUntil(() => {
                return this.aggregateExpensePriorCarriedRealizedFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Prior Carried Interest Realized Transactions to be loaded after upload');
        } else if (filename.includes("Aggregate_Expense_Prior Carried Interest Unrealized upload")) {
            browser.waitUntil(() => {
                return this.aggregateExpensePriorCarriedUnRealizedFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected Prior Carried Interest Unrealized Transactions to be loaded after upload');
        } else if (filename.includes("Aggregate_Expense_NAV upload")) {
            browser.waitUntil(() => {
                return this.aggregateExpenseNAVFileStatus.getText() == 'Upload Success';
            }, 60000, 'Expected NAV Transactions to be loaded after upload');
        }

        return this;
    }

    deleteTransactionsDataFile(filename) {

        if (filename.includes("nav")) {
            this.wait().navDeleteButton.click();
        } else if (filename.includes("contributions")) {
            this.wait().contributionsDeleteButton.click();
        } else if (filename.includes("distributions")) {
            this.wait().distributionsDeleteButton.click();
        } else if (filename.includes("prior_carried_interest")) {
            this.wait().pciRealizedDeleteButton.click();
        }

        if (filename.includes("nav")) {
            this.wait().confirmDeleteText.should.contain(this.strings.expectedConfirmDeleteMessage1 + " NAV " + this.strings.expectedConfirmDeleteMessage2);
        } else if (filename.includes("contributions")) {
            this.wait().confirmDeleteText.should.contain(this.strings.expectedConfirmDeleteMessage1 + " Contributions " + this.strings.expectedConfirmDeleteMessage2);
        } else if (filename.includes("distributions")) {
            this.wait().confirmDeleteText.should.contain(this.strings.expectedConfirmDeleteMessage1 + " Distributions Net of Carry " + this.strings.expectedConfirmDeleteMessage2);
        } else if (filename.includes("prior_carried_interest")) {
            this.wait().confirmDeleteText.should.contain(this.strings.expectedConfirmDeleteMessage1 + " Prior Carried Interest - Realized " + this.strings.expectedConfirmDeleteMessage2);
        }

        this.confirmDeleteButton.click();
        if (filename.includes("nav")) {
            this.wait().navFileStatus.getText().should.equal("Not Loaded");
            this.navDeleteButton.isEnabled().should.be.false;
        } else if (filename.includes("contributions")) {
            this.wait().contributionsFileStatus.getText().should.equal("Not Loaded");
            this.wait().contributionsDeleteButton.isEnabled().should.be.false;
        } else if (filename.includes("distributions")) {
            this.wait().distributionsFileStatus.getText().should.equal("Not Loaded");
            this.wait().distributionsDeleteButton.isEnabled().should.be.false;
        } else if (filename.includes("prior_carried_interest")) {
            this.wait().pciFileStatus.getText().should.equal("Not Loaded");
            this.wait().pciRealizedDeleteButton.isEnabled().should.be.false;
        }

    }

    deleteTotalReturnTransactionsDataFile(filename) {
        if (filename.includes("nav")) {
            this.wait().navDeleteButton.click();
        } else if (filename.includes("contributions")) {
            this.wait().contributionsDeleteButton.click();
        } else if (filename.includes("distributions")) {
            this.wait().distributionsDeleteButton.click();
        } else if (filename.includes("prior_carry_realized")) {
            this.wait().pciRealizedDeleteButton.click();
        } else if (filename.includes("prior_carry_unrealized")) {
            this.wait().pciUnRealizedDeleteButton.click();
        }
        if (filename.includes("nav")) {
            this.wait().confirmDeleteText.should.contain(this.strings.expectedConfirmDeleteMessage1 + " NAV " + this.strings.expectedConfirmDeleteMessage2);
        } else if (filename.includes("contributions")) {
            this.wait().confirmDeleteText.should.contain(this.strings.expectedConfirmDeleteMessage1 + " Contributions " + this.strings.expectedConfirmDeleteMessage2);
        } else if (filename.includes("distributions")) {
            this.wait().confirmDeleteText.should.contain(this.strings.expectedConfirmDeleteMessage1 + " Distributions Net of Carry " + this.strings.expectedConfirmDeleteMessage2);
        } else if (filename.includes("prior_carry_realized")) {
            this.wait().confirmDeleteText.should.contain(this.strings.expectedConfirmDeleteMessage1 + " Prior Carried Interest - Realized " + this.strings.expectedConfirmDeleteMessage2);
        } else if (filename.includes("prior_carry_unrealized")) {
            this.wait().confirmDeleteText.should.contain(this.strings.expectedConfirmDeleteMessage1 + " Prior Carried Interest - Unrealized " + this.strings.expectedConfirmDeleteMessage2);
        }
        this.confirmDeleteButton.click();
        if (filename.includes("nav")) {
            browser.waitUntil(() => {
                return this.navFileStatus.getText() == 'Not Loaded';
            }, 30000, 'Expected Nav Transactions to be not loaded after deletion');
            this.navFileStatus.getText().should.equal("Not Loaded");
            this.wait().navDeleteButton.isEnabled().should.be.false;
        } else if (filename.includes("contributions")) {
            browser.waitUntil(() => {
                return this.contributionsFileStatus.getText() == 'Not Loaded';
            }, 30000, 'Expected Contribution Transactions to be not loaded after deletion');
            this.wait().contributionsDeleteButton.isEnabled().should.be.false;
        } else if (filename.includes("distributions")) {
            browser.waitUntil(() => {
                return this.distributionsFileStatus.getText() == 'Not Loaded';
            }, 30000, 'Expected Distribution Transactions to be not loaded after deletion');
            this.wait().distributionsDeleteButton.isEnabled().should.be.false;
        } else if (filename.includes("prior_carry_realized")) {
            browser.waitUntil(() => {
                return this.pciFileStatus.getText() == 'Not Loaded';
            }, 30000, 'Expected Realized Transactions to be not loaded after deletion');
            this.wait().pciRealizedDeleteButton.isEnabled().should.be.false;
        } else if (filename.includes("prior_carry_unrealized")) {
            browser.waitUntil(() => {
                return this.pciUnrealizedFileStatus.getText() == 'Not Loaded';
            }, 30000, 'Expected Unrealized Transactions to be not loaded after deletion');
            this.wait().pciUnRealizedDeleteButton.isEnabled().should.be.false;
        }
    }

    uploadTransactionFiles(waterfallName) {
        this.goToTransactionsTab();
        if (waterfallName.includes('DbyD') || waterfallName.includes('DealByDeal')) {
            let realizedInvestmentContributions = './resources/DBD_Realized_Investment_Contributions_uploadd.xlsx';
            this.uploadDBDTransactionsDataFile(realizedInvestmentContributions);
            let realizedGainLoss = './resources/DBD_Realized_Gain_Loss_upload.xlsx';
            this.uploadDBDTransactionsDataFile(realizedGainLoss);
            let investmentConributions = './resources/DBD_Investment_Contributions_upload.xlsx';
            this.uploadDBDTransactionsDataFile(investmentConributions);
            let writeoffs = './resources/DBD_Writedowns_upload.xlsx';
            this.uploadDBDTransactionsDataFile(writeoffs);
            let expenseContributions = './resources/DBD_Expense_Contributions_upload.xlsx';
            this.uploadDBDTransactionsDataFile(expenseContributions);
            let AFENumerator = './resources/DBD_AFE_Numerator_upload.xlsx';
            this.uploadDBDTransactionsDataFile(AFENumerator);
            let AFEDenominator = './resources/DBD_AFE_Denominator_upload.xlsx';
            this.uploadDBDTransactionsDataFile(AFEDenominator);
            let priorCarriedInterestRealizedFile = './resources/DBD_Prior_Carried_Interest_Realized_upload.xlsx';
            this.uploadDBDTransactionsDataFile(priorCarriedInterestRealizedFile);
            let priorCarriedInterestUnrealizedFile = './resources/DBD_Prior_Carried_Interest_Unrealized_upload.xlsx';
            this.uploadDBDTransactionsDataFile(priorCarriedInterestUnrealizedFile);
            let navFile = './resources/DBD_NAV_upload.xlsx';
            this.uploadDBDTransactionsDataFile(navFile);
        } else if (waterfallName.includes('Custom')) {
            let navFile = './resources/Custom-NAV.xlsx'
            this.uploadToralReturnTransactionsDataFile(navFile);
            let contributionFile = './resources/Custom-Contributions.xlsx'
            this.uploadToralReturnTransactionsDataFile(contributionFile);
            let distributionFile = './resources/Custom-Distributions.xlsx'
            this.uploadToralReturnTransactionsDataFile(distributionFile);
            let pciRealizedFile = './resources/Custom-Prior-Carry-Realized.xlsx'
            this.uploadToralReturnTransactionsDataFile(pciRealizedFile);
            let pciUnrealizedFile = './resources/Custom-Prior-Carry-Unrealized.xlsx'
            this.uploadToralReturnTransactionsDataFile(pciUnrealizedFile);
        } else if (waterfallName.includes('AggregateExpense')) {
            let realizedInvestmentContributions = './resources/Aggregate_Expense_Realized Investment Contributions upload.xlsx';
            this.uploadAggregateExpenseTransactionsDataFile(realizedInvestmentContributions);
            let realizedGainLoss = './resources/Aggregate_Expense_Realized Gain Loss upload.xlsx';
            this.uploadAggregateExpenseTransactionsDataFile(realizedGainLoss);
            let investmentConributions = './resources/Aggregate_Expense_Investment Contributions upload.xlsx';
            this.uploadAggregateExpenseTransactionsDataFile(investmentConributions);
            let writeoffs = './resources/Aggregate_Expense_Writedowns upload.xlsx';
            this.uploadAggregateExpenseTransactionsDataFile(writeoffs);
            let expenseContributionsAllocable = './resources/Aggregate_Expense_Expense Contributions Allocable upload.xlsx';
            this.uploadAggregateExpenseTransactionsDataFile(expenseContributionsAllocable);
            let expenseContributionsAggregate = './resources/Aggregate_Expense_Expense Contributions Aggregate upload.xlsx';
            this.uploadAggregateExpenseTransactionsDataFile(expenseContributionsAggregate);
            let AFENumerator = './resources/Aggregate_Expense_AFE Numerator upload.xlsx';
            this.uploadAggregateExpenseTransactionsDataFile(AFENumerator);
            let AFEDenominator = './resources/Aggregate_Expense_AFE Denominator upload.xlsx';
            this.uploadAggregateExpenseTransactionsDataFile(AFEDenominator);
            let priorCarriedInterestRealizedFile = './resources/Aggregate_Expense_Prior Carried Interest Realized upload.xlsx';
            this.uploadAggregateExpenseTransactionsDataFile(priorCarriedInterestRealizedFile);
            let priorCarriedInterestUnrealizedFile = './resources/Aggregate_Expense_Prior Carried Interest Unrealized upload.xlsx';
            this.uploadAggregateExpenseTransactionsDataFile(priorCarriedInterestUnrealizedFile);
            let navFile = './resources/Aggregate_Expense_NAV upload.xlsx';
            this.uploadAggregateExpenseTransactionsDataFile(navFile);
        } else {
            let navFile = './resources/total_return_multiplier_nav.xlsx'
            this.uploadToralReturnTransactionsDataFile(navFile);
            let contributionFile = './resources/total_return_multiplier_contributions.xlsx'
            this.uploadToralReturnTransactionsDataFile(contributionFile);
            let distributionFile = './resources/total_return_multiplier_distributions.xlsx'
            this.uploadToralReturnTransactionsDataFile(distributionFile);
            let pciRealizedFile = './resources/total_return_multiplier_prior_carried_interest_realized.xlsx'
            this.uploadToralReturnTransactionsDataFile(pciRealizedFile);
            let pciUnrealizedFile = './resources/total_return_multiplier_prior_carried_interest_unrealized.xlsx'
            this.uploadToralReturnTransactionsDataFile(pciUnrealizedFile);
        }
    }

    uploadIncorrectTotalReturnTransactionsDataFile(filename) {
        this.navFileUploadButton.waitForVisible();
        if (filename.includes("incorrect") || filename.includes("Incorrect")) {
            this.wait().navFileUploadButton.click();
        }
        this.fileUploadButton.chooseFile(filename);
        this.uploadSubmitButton.click();
        this.wait();
        if (filename.includes("incorrect") || filename.includes("Incorrect")) {
            browser.waitUntil(() => {
                return this.navFileStatus.getText() == 'Upload Error';
            }, 60000, 'Expected NAV Transactions to be not loaded succesfully after upload');
        }
        browser.waitUntil(() => {
            return this.snackBarMessage.isExisting();
        }, 30000, 'Snackbar Success Message did not appear');
        this.wait().snackBarMessage.getText().should.contain(this.strings.expectedIncorrectTransactionMessage);
    }

    uploadDealByDealTransactionsDataFile(filename) {
        this.ricFileUploadButton.waitForVisible();
        if (filename.includes("realized_investment_contributions")) {
            this.ricFileUploadButton.click();
        }
        this.fileUploadButton.chooseFile(filename);
        this.wait().uploadSubmitButton.click();
        this.customWait(3000);
        if (filename.includes("realized_investment_contributions")) {
            browser.waitUntil(() => {
                return this.rciFileStatus.getText() == 'Upload Success';
            }, 30000, 'Expected Realized Investment Contributions file to be loaded after upload');
        }
        if (filename.includes("realized_investment_contributions")) {
            this.ricFileDownloadButton.isEnabled().should.be.true;
            this.ricFileDeleteButton.isEnabled().should.be.true;
        }
        return this;
    }
}

export default new WaterfallDetailsPage();