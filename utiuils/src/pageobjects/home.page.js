import BasePage from './base.page';
import util from '../utils/utilities';
import WaterfallDetailsPage from '../pageobjects/waterfall.details.page';

class HomePage extends BasePage {

    get waterfallName()                                                     { return $("//input[@name='name']"); }
    get termsPreferredAllocation()                                          { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div[1]/div[8]'); }
    get termsPreferredReturn()                                              { return $('/html/body/div/div/main/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div[1]/div[7]'); }
    get calculationResultsMethod()                                          { return $('//*[@id="calculation-results-method-value"]').getText(); }
    get customInvestorId()                                                  { return $('//input[@value="COMMON_INVESTOR_ID"]'); }
    get manageWaterfallScreen()                                             { return $('/html/body/div/div/main/div[2]/div/div[1]/div/h4'); }
    get duplicateWaterfallNameMessage()                                     { return $('/html/body/div/div/main/div[2]/div/div/div[3]/form/div[1]/div/div/p'); }
    get waterfalls()                                                        { return $("//*[@id='waterfall']"); }
    get waterfallMenuButton()                                               { return $('(//span[@ref="eMenu"])[1]'); }
    get waterfallDropDownEquals()                                           { return $("//*[@value='equals']"); }
    get waterfallDropDownText()                                             { return $('(//*[@type="text"])[3]'); }
    get waterfallOption()                                                   { return $("(//div[@id='lii-div'])[1]"); }
    get submitButton()                                                      { return $("[type='submit']"); }
    get waterfallCreateButton()                                             { return $("[href='\/waterfalls\/create'] .btn"); }
    get createWaterfallButton()                                             { return $("//a[@href='/ui/waterfalls/create']"); }
    get homeMenu()                                                          { return $("[class] .nav-item:nth-of-type(1) [tabindex]"); }
    get successMessage()                                                    { return $("[role='alert']"); }
    get syncDialogue()                                                      { return $("//div[@role='alertdialog']"); }
    get breadcrumb()                                                        { return $(" div > h4 "); }
    get tiersBreadcrumb()                                                   { return $('//legend[contains(text(),"Build Tiers")]'); }
    get mappingsBreadcrumb()                                                { return $('/html/body/div/div/main/div[2]/div/div/div[3]/form/legend'); }
    get breadcrumbText()                                                    { return $(" div > h4 ").getText(); }
    get accountSelector()                                                   { return $('//*[@id="client-selector"]'); }
    get accountDropdownList()                                               { return $$('#accountpicker > select > option'); }
    get waterfallSelector()                                                 { return $('//*[@id="waterfallpicker"]'); }
    get waterfallDropdownList()                                             { return $$(".collapse div:nth-child(2) > select option"); }
    get loadWaterfallButton()                                               { return $('.show li:nth-child(2) > a'); }
    get waterfallContainer()                                                { return $('.ReactTable .rt-table'); }
    get waterfallNames()                                                    { return $$('.rt-tr-group'); }
    get waterfallNameInput()                                                { return $("input[name='waterfallName']"); }
    get maximumRow()                                                        { return $('.select-wrap option:last-child'); }
    get infoTab()                                                           { return $('//*[@id="info"]'); }
    get expandMenu()                                                        { return $('//*[@id="expand-menu"]'); }
    get collapseMenu()                                                      { return $('//*[@id="collapse-menu"]'); }
    get addWaterfall()                                                      { return $('//*[@id="add-waterfall-button"]'); }
    get selectCurrency()                                                    { return $("//div[@id='select-currency']"); }
    get currencyListBox()                                                   { return $("//ul[@role='listbox']"); }
    get usdCurrency()                                                       { return $("ul > li:first-child"); }
    get saveButton()                                                        { return $('//*[@id="save-create-waterfall-button"]'); }
    get submitForApproval()                                                 { return $('//*[@id="submit-for-approval-button"]'); }
    get cancelCreateWaterfall()                                             { return $('//*[@id="cancel-create-waterfall-button"]'); }
    get comments()                                                          { return $("//textarea[@name='comments']"); }
    get transactionsLabel()                                                 { return $('#transactions-dropdown > div:nth-child(2) > span:nth-child(1)'); }
    get nav()                                                               { return $('#transaction-nav > div:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)'); }
    get contributions()                                                     { return $('#transaction-contribution > div:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)'); }
    get distributions()                                                     { return $('#transaction-distribution > div:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)'); }
    get priorCarriedInterest()                                              { return $('#transaction-prior-carried-interest > div:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)'); }
    get investorTerms()                                                     { return $('#investor-terms > div:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)'); }
    get manageInvestors()                                                   { return $('#manage-investors > li:nth-child(1) > div:nth-child(2) > span:nth-child(1)'); }
    get events()                                                            { return $('#events > div:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)'); }
    get pageHeading()                                                       { return $('/html/body/div/div/main/div[2]/div/legend/h5').getText(); }
    get tiersBreadcrumbText()                                               { return $('/html/body/div/div/main/div[2]/div/div[1]/div[3]/form/legend').getText(); }
    get tier1LPA()                                                          { return $('//input[@name="tiers[0].lpaReference"]'); }
    get tier2LPA()                                                          { return $('//input[@name="tiers[1].lpaReference"]'); }
    get tier3LPA()                                                          { return $('//input[@name="tiers[2].lpaReference"]'); }
    get tier4LPA()                                                          { return $('//input[@name="tiers[3].lpaReference"]'); }
    get termsBreadcrumbText()                                               { return $('/html/body/div/div/main/div[2]/div/div[1]/div[3]/div/legend/h5').getText(); }
    get termsUploadIcon()                                                   { return $('//*[@id="upload-investor-terms-button"]'); }
    get fileUploadButton()                                                  { return $("[type='file']"); }
    get uploadSubmitButton()                                                { return $('//*[@id="upload-file-button"]'); }
    get okButton()                                                          { return $('//*[@id="modal-close-button"]'); }
    get uploadDownloadText()                                                { return $('//*[@id="modal-body"]').getText(); }
    get waterfallDetailsText()                                              { return $('/html/body/div/div/main/div[2]/div/div[1]/div[3]/div/div[1]/h5').getText(); }
    get downloadTemplate()                                                  { return $('//*[@id="download-investor-terms-button"]'); }
    get deleteInvestorTerm()                                                { return $('//*[@id="delete-investor-terms-button"]'); }
    get deleteInvestorTermText()                                            { return $('//*[@id="modal-body"]'); }
    get confirmDeleteButton()                                               { return $('//*[@id="modal-confirm-button"]'); }
    get confirmCancelButton()                                               { return $('//*[@id="modal-close-button"]'); }
    get emptyInvestorTermsGrid()                                            { return $('//*[@id="download-investor-terms-template-message"]'); }
    get waterfall()                                                         { return $('//*[@id="waterfall"]'); }
    get waterfallDetailGrid()                                               { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]'); }
    get tierDetailGrid()                                                    { return $('/html/body/div/div/main/div[2]/div/div[1]/div[3]/div/div[2]'); }
    get waterfallMenu()                                                     { return $('//*[@id="waterfall"]/li'); }
    get searchWaterfallBox()                                                { return $('//*[@id="filterText"]'); }
    get searchResult()                                                      { return $('/html/body/div/div/main/div[2]/div/div[2]/div/div/div/div[1]/div/div[3]/div[2]/div/div/div'); }
    get searchWaterfallIcon()                                               { return $('/html/body/div/div/main/div[2]/div/div[2]/div/div/div/div[1]/div/div[1]/div[2]/div/div/div[1]/div[2]/span/span'); }
    get waterfallDetails()                                                  { return $('div.rt-tr-group:nth-child(1) > div:nth-child(1) > div:nth-child(1)'); }
    get submitForApprovalWaterfallButton()                                  { return $('//button[@id="submit-for-approval-button"]'); }
    get statusMessage()                                                     { return $('.rt-tr-group:first-child .rt-td:nth-child(2)').getText(); }
    get realizedReturnOfCapitalWaterallType()                               { return $('//input[@value="DEAL_BY_DEAL"]'); }
    get totalReturnOfCapitalWaterfallType()                                 { return $('//input[@value="TOTAL_RETURN"]'); }
    get defaultCustomLPTarget()                                             { return $("//input[@name='tiers[1].lpTarget']"); }
    get defaultCustomCIPAllocation()                                        { return $("//input[@name='tiers[1].cipAllocation']"); }
    get compoundingFrequency()                                              { return $("//*[@id='select-tiers[1].compoundingFrequency']"); }
    get compoundingFrequencyDaily()                                         { return $('/html/body/div[3]/div[2]/ul/li[4]'); }
    get dayCountMethod()                                                    { return $("//*[@id='select-tiers[1].dayCountMethod']"); }
    get dayCountMethod365()                                                 { return $('/html/body/div[3]/div[2]/ul/li[2]'); }
    get dayIntervalContributions()                                          { return $('//input[@name="tiers[1].dayIntervalAdjContributions"]'); }
    get dayIntervalDistributions()                                          { return $('//input[@name="tiers[1].dayIntervalAdjDistributions"]'); }
    get defaultMultiplierPreferredReturn()                                  { return $("//input[@name='tiers[1].tierPercentages.multiplier.preferredReturnMultiplier.value']"); }
    get defaultMultiplierPreferredAllocation()                              { return $("//input[@name='tiers[1].tierPercentages.multiplier.preferredReturnCIP.value']"); }
    get defaultRRCPreferredReturn1()                                        { return $("//input[@name='tiers[3].lpTarget']"); }
    get defaultTRCPreferredReturn1()                                        { return $("//input[@name='tiers[1].lpTarget']"); }
    get defaultRRCPreferredReturn2()                                        { return $("//input[@name='tiers[4].cipAllocation']"); }
    get defaultTRCPreferredReturn2()                                        { return $("//input[@name='tiers[2].cipAllocation']"); }
    get defaultRRCPreferredReturn3()                                        { return $("//input[@name='tiers[4].cipTarget']"); }
    get defaultTRCPreferredReturn3()                                        { return $("//input[@name='tiers[2].cipTarget']"); }
    get defaultRRCPreferredReturn4()                                        { return $("//input[@name='tiers[5].cipAllocation']"); }
    get defaultTRCPreferredReturn4()                                        { return $("//input[@name='tiers[3].cipAllocation']"); }
    get higherValueMessage()                                                { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/form/div[2]/div[2]/div/div/div[4]/div/div[1]/div[1]/div/div[5]/div/p').getText(); }
    get negativeValueMessage()                                              { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/form/div[2]/div[2]/div/div/div[4]/div/div[1]/div[1]/div/div[5]/div/p').getText(); }
    get noValueMessage()                                                    { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/form/div[2]/div[2]/div/div/div[4]/div/div[1]/div[1]/div/div[5]/div/p').getText(); }
    get buildTierLegend()                                                   { return $("form > legend"); }
    get reportingGroup()                                                    { return $("//div[@id='select-reportingGroupUDF']"); }
    get selectReportingGroup()                                              { return $("//li[@data-value='Algebris - NPL']"); }
    get selectNPLIIReportingGroup()                                         { return $("//li[@data-value='Algebris - NPL II']"); }
    get selectNotLinkedToInvestranReportingGroup()                          { return $("//li[@data-value='Not Linked To Investran']"); }
    get transactionMappingNextButton()                                      { return $("//*[@id='save-create-waterfall-button']/span[1]/span"); }
    get uploadInvestorTermFileFirstPopup()                                  { return $("//*[@id='modal-body']").getText(); }
    get previousButton()                                                    { return $("//button[@id='prev-create-waterfall-button']"); }
    get incorrectInvestorTermFilePopup()                                    { return $('//*[@id="modal-body"]').getText(); }
    get waterfallType()                                                     { return $("//*[@id='root']/div/main/div[2]/div/div/div[3]/form/div[2]/div/div/label[1]/span[2]"); }
    get reviewAndSubmitWaterfallDetails()                                   { return $("//*[@id='root']/div/main/div[2]/div/div/div[3]/div"); }
    get skipInvestorTerm()                                                  { return $("//*[@id='skip-create-waterfall-step-button']"); }
    get duplicateWaterfallPopup()                                           { return $("//*[@id='modal-body']"); }
    get editWaterfallIcon()                                                 { return $("//button[@aria-label='Edit Waterfall']"); }
    get snackBarMessage()                                                   { return $("//*[@aria-describedby='message-id']"); }
    get okConfirmButton()                                                   { return $('//*[@id="modal-confirm-button"]'); }
    get noCIPInvestorTerm()                                                 { return $(" div > h6").getText(); }
    get editTerms()                                                         { return $("(//*[@class='ag-react-container'])[1]"); }
    get calcMethodDropdown()                                                { return $("//*[@id='select-tiers[1].calcMethod']"); }
    get dbdCalcMethodDropdown()                                             { return $("//*[@id='select-tiers[3].tierProperties.calcMethod.value']"); }
    get calcMethodIRR()                                                     { return $("//*[@data-value='IRR']"); }
    get calcMethodMultiplier()                                              { return $("//*[@data-value='Multiplier']"); }
    get calcMethodCustom()                                                  { return $("//*[@data-value='Custom']"); }
    get defaultTRCPreferredAllocation()                                     { return $("//input[@name='tiers[1].cipAllocation']"); }
    get calcMethodDropdownDbyD()                                            { return $('//*[@id="select-tiers[3].calcMethod"]'); }
    get defaultRRCPreferredAllocation()                                     { return $("//input[@name='tiers[3].cipAllocation']"); }
    get noInvestorsWithCIPPopUp()                                           { return $("//*[@id='modal-title']"); }
    get defaultTermValue()                                                  { return $("(//*[@role='button'])[1]"); }
    get editTermCellValue()                                                 { return $("(//*[@col-id='preferredReturn'])[2]"); }
    get defaultRRCMultiplierPreferredReturn1()                              { return $("//*[@name='tiers[3].tierPercentages.multiplier.preferredReturnMultiplier.value']"); }
    get defaultRRCMultiplierPreferredReturn2()                              { return $("//*[@name='tiers[3].tierPercentages.multiplier.preferredReturnCIP.value']"); }
    get calcMethodCustom()                                                  { return $("//*[@data-value='Custom']"); }
    get compoundingCalculation()                                            { return $("//*[@name='tiers[1].compoundingCalculation']"); }
    get compoundingBasis()                                                  { return $("//*[@name='tiers[1].compoundingBasis']"); }
    get dbdCalcMethodCustom()                                               { return $("//*[@data-value='Custom']"); }
    get dbdCompoundingCalculation()                                         { return $("//*[@name='tiers[3].compoundingCalculation']"); }
    get dbdCompoundingBasis()                                               { return $("//*[@name='tiers[3].compoundingBasis']"); }
    get dbdCalcType()                                                       { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/form/div[2]/div/div/label[2]/span[2]'); }
    get exportPageButton()                                                  { return $("//*[@id='export-page-button']"); }
    get deleteROCTRCTier()                                                  { return $("(//*[@title='Delete'])[1]"); }
    get deletePreferredReturnTRCTier()                                      { return $("(//*[@title='Delete'])[2]"); }
    get deleteCatchUpTRCTier()                                              { return $("(//*[@title='Delete'])[3]"); }
    get deleteFinalSplitTRCTier()                                           { return $("(//*[@title='Delete'])[4]"); }
    get addROCTRCTier()                                                     { return $("//*[@id='add-event-button-TR_ROC']"); }
    get addPreferredReturnTRCTier()                                         { return $("//*[@id='add-event-button-TR_PREFERRED_RETURN']"); }
    get addCatchUpTRCTier()                                                 { return $("//*[@id='add-event-button-TR_CATCH_UP']"); }
    get addFinalSplitTRCTier()                                              { return $("//*[@id='add-event-button-TR_FINAL_SPLIT']"); }
    get lpaReferenceTRCTier1()                                              { return $("//input[@name='tiers[0].lpaReference']"); }
    get buildTierContainer()                                                { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/form/div[2]/div[2]/div'); }
    get buildFromScratchROCTier()                                           { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/form/div[2]/div[1]/div/div/div/div/div[1]/div/div'); }
    get buildFromScratchPreferredReturnTier()                               { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/form/div[2]/div[1]/div/div/div/div/div[2]/div/div'); }
    get buildFromScratchCatchUpTier()                                       { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/form/div[2]/div[1]/div/div/div/div/div[3]/div/div'); }
    get buildFromScratchFinalSplitTier()                                    { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/form/div[2]/div[1]/div/div/div/div/div[4]/div/div'); }
    get allTransactionsBucketsDBD()                                         { return $$('//*[@id="root"]/div/main/div[2]/div/div/div[3]/form/div/div'); }
    get lpaReferenceTier1ForTRC()                                           { return $("//*[@name='tiers[0].lpaReference']"); }
    get lpaReferenceTier2ForTRC()                                           { return $("//*[@name='tiers[1].lpaReference']"); }
    get lpaReferenceTier2WaterfallDetailsScreen()                           { return $("(//*[@id='root']/div/main/div[2]/div/div/div[3]/div/div[2]/div/div[2]/div)[1]"); }
    get specificInvestorId()                                                { return $("(//*[@color='primary'])[4]"); }
    get transactionMappingScreenForTPG()                                    { return $('/html/body/div/div/main/div[2]/div/div/div[2]/div/div[3]/span/span[2]/span/p'); }
    get addAggregateExpenseDBD()                                            { return $("//*[@id='add-event-button-DD_AE']"); }
    get searchFilter()                                                      { return $("(//*[@class='ag-tab'])[1]"); }
    get selectDropdown()                                                    { return $('//*[@class="ag-filter-select"]'); }
    get transactionMapingLegend()                                           { return $('//*[@id="root"]/div/main/div[2]/div/div/div[3]/div/legend'); }
    get transactionMappingUploadButton()                                    { return $('//*[@id="upload-transaction-mapping-button"]'); }
    get citcoLogo()                                                         { return $('//*[@id="ab-toolbar"]/div/div[1]/div[2]/div/span'); }
    get aggregateExpenseHierarchy()                                         { return $("//*[@id='dd_exp_cont_agg-hierarchy-selector']/div/div/div/div[1]/p"); }
    get IRRPreferredReturnMethodDropdown()                                  { return $("//*[@id='select-tiers[1].preferredReturnMethod']") }
    get IRRPreferredReturnCredit()                                          { return $("//*[@data-value='Preferred Return Credit']"); }
    get IRRPreferredReturnMethodDropdownDBD()                               { return $("//*[@id='select-tiers[3].preferredReturnMethod']") }
    get IRRPreferredReturnMethodDropdown()                                  { return $("//*[@id='select-tiers[1].preferredReturnMethod']") }
    get IRRPreferredReturnMethodDropdownDBD()                               { return $("//*[@id='select-tiers[3].preferredReturnMethod']") }

    get strings() {
        return {
            expectedBreadcrumbText: 'Create Waterfall',
            expectedTiersBreadcrumbText: 'Build Tiers',
            expectedMappingsBreadcrumbText: 'Transaction Mappings',
            expectedTermsBreadcrumbText: 'Investor Terms',
            expectedWaterfallDetailsText: 'Waterfall Details',
            expectedSuccessMessage: 'Waterfall successfully created.',
            qaAccount: 'TIFF',
            waterfall: '1n1z9n',
            expectedLoadWaterfallBreadcrumbText: 'Waterfalls',
            expectedUploadSuccessMessage: 'Investor Terms Values have been updated',
            expectedInvalidUploadMessage: 'Expected column name "Investor Type" not found.',
            expectedDuplicateUploadMessage: 'Invalid investors on lines: 2, 3, 4.',
            expectedDuplicateIdUploadMessage: 'Duplicate investor on line: 4',
            expectedDeleteInvestorTermMessage: 'Are you sure you want to delete all investor terms data for current waterfall?',
            expectedEmptyInvestorTermsGrid: 'For best results when uploading investor termsdownload the TEMPLATEfirst',
            expectedHigherValueMessage: 'Must be 100 or less',
            expectedNegativeValueMessage: 'Must be 0 or greater',
            expectedNoValueMessage: 'must be a number',
            expectedUploadInvestorTermFirstMessage: 'Please load Investor Terms before submitting for Approval',
            expectedIncorrectInvestorTermFileUploadMessage: 'One or more investors in the upload file do not exist in investran.',
            expectedDuplicateWaterfallMessage: 'The waterfall name Automation-NonInvestran is already in use',
            expectedSnackBarMessage: "Selecting Next will update Status to 'In Progress'",
            expectedMissingIdNameMessage: "Invalid investors on lines: 2, 3, 4.",
            expectedNoCIPInvestorTermMessage: 'No Investors were identified as the CIP.',
            expectedOneRowTransactionMappingMessage: 'Transaction Mappings have been uploaded',
            expectedIncorrectRowsTransactionMappingMessage: 'Transaction mapping file contained invalid Waterfall Bucket mapping on line at row 2',
            expectedWrongSchemaTransactionMappingMessage: 'Expected column name "TransType Description" not found.'

        };
    }

    get randomClient() {
        const clients = [util.clients.AVENUE_CAPITAL, util.clients.EQT, util.clients.SECURIS, util.clients.HIGHVISTA, util.clients.QA_UI, util.clients.QA_BIZ, util.clients.QA_LOAD];
        return clients[Math.floor(Math.random() * clients.length)];
    }

    get randomClientII() {
        const clients = [util.clients.MSOUTH, util.clients.M_AND_G, util.clients.DSAM];
        return clients[Math.floor(Math.random() * clients.length)];
    }

    selectRandomCurrency() {
        const currencies = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'AUD', 'SGD', 'HKD', 'CAD', 'LUF', 'DKK'];
        let randomCurrency = currencies[Math.floor(Math.random() * currencies.length)];
        $(`li[data-value='${randomCurrency}']`).waitForVisible();
        $(`li[data-value='${randomCurrency}']`).click();
        return this;
    }

    createNewWaterfall() {
        this.homeMenu.click();
        this.createWaterfallButton.click();
        this.breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        const waterfallName = 'TestBot-' - util.generateRandomString(7);
        this.waterfallName.setValue(waterfallName);
        this.submitButton.click();
        this.waitForSuccessMessage();
        this.wait().successMessage.getText().should.equal(this.strings.expectedSuccessMessage);
        return waterfallName;
    }

    waitForSuccessMessage() {
        if (!this.successMessage.isExisting()) {
            this.wait().successMessage.waitForVisible();
        }
        return this;
    }

    waitForInvestorTermSynch() {
        this.clickSave();
    }

    confirmNoCIPInvestorTerms() {
        this.clickSave();
        browser.waitUntil(() => {
            return this.noInvestorsWithCIPPopUp.isVisible();
        }, 30000, "Pop up Message did not show up");
        this.noCIPInvestorTerm.should.equal(this.strings.expectedNoCIPInvestorTermMessage);
        this.okConfirmButton.click();
    }

    skipInvestorTerms() {
        this.skipInvestorTerm.click();
    }

    selectClient() {
        this.accountSelector.waitForVisible();
        this.accountSelector.click();
        let client = this.randomClient;
        $('#dropdown-options #' + client.NAME).click();
        return client;
    }

    selectSeedClient() {
        this.accountSelector.waitForVisible();
        this.accountSelector.click();
        let client = this.randomClient;
        $('#dropdown-options #QA').waitForVisible();
        $('#dropdown-options #QA').click();
        return client;
    }

    selectRandomClient() {
        this.accountSelector.waitForVisible();
        this.accountSelector.click();
        this.wait();
        let client = this.randomClient;
        $('#dropdown-options #' + client.NAME).click();
        return client;
    }

    selectSpecificClient(clientname) {
        this.wait();
        this.accountSelector.waitForVisible();
        this.accountSelector.click();
        this.wait();
        $('#dropdown-options #' + clientname).waitForVisible();
        $('#dropdown-options #' + clientname).click();
        this.waterfallMenu.waitForVisible();
        this.waterfallMenu.click();
        return clientname;
    }

    goToWaterfallListScreen() {
        this.waterfallMenu.waitForVisible();
        this.waterfallMenu.click();
    }

    selectDefaultClient() {
        this.accountSelector.waitForVisible();
        this.accountSelector.click();
        $('#dropdown-options #Kuvari').waitForVisible();
        $('#dropdown-options #Kuvari').click();
        return util.clients.KUVARI;
    }

    selectClientFromList() {
        this.accountSelector.waitForVisible();
        this.accountSelector.click();
        let client = this.randomClientII;
        $('#dropdown-options #' + client.NAME).waitForVisible();
        $('#dropdown-options #' + client.NAME).click();
        return client;
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

    clickExpandMenu() {
        this.expandMenu.click();
        return this;
    }

    goToHomePage() {
        this.waterfalls.click();
        browser.waitUntil(() => {
            return this.manageWaterfallScreen.isVisible();
        }, 60000, 'Home page did not load after creating Waterfall.');
        return this;
    }

    clickSave() {
        if (this.saveButton.isVisible() || this.saveButton.isEnabled()) {
            this.saveButton.click();
        } else {
            this.saveButton.waitForVisible();
            this.saveButton.waitForEnabled();
            this.saveButton.click();
        }
        return this;
    }

    browserRefresh() {
        this.refresh();
    }

    selectManageInvestors() {
        this.wait().manageInvestors.click();
        browser.getUrl().should.contain('/ui/investors');
        this.wait().collapseMenu.click();
    }

    uploadInvestorTerms(filename) {
        if (typeof filename !== 'undefined') {
            browser.getUrl().should.contain('/ui/waterfalls/create');
            this.cancelCreateWaterfall.isEnabled().should.be.true;
            this.previousButton.isEnabled().should.be.true;
            this.termsUploadIcon.waitForVisible();
            this.termsUploadIcon.click();
            this.fileUploadButton.chooseFile(filename);
            this.uploadSubmitButton.click();
            this.okButton.waitForVisible(30000);
            this.uploadDownloadText.should.contain(this.strings.expectedUploadSuccessMessage);
            this.okButton.click();
        }
        return this;
    }

    uploadInvalidInvestorTerms(filename) {
        this.termsUploadIcon.waitForVisible(30000);
        if (typeof filename !== 'undefined') {
            browser.getUrl().should.contain('/ui/waterfalls/create');
            this.termsUploadIcon.click();
            this.fileUploadButton.chooseFile(filename);
            this.uploadSubmitButton.click();
            this.okButton.waitForVisible(15000);
            this.uploadDownloadText.should.contain(this.strings.expectedInvalidUploadMessage);
            this.okButton.click();
        }
        return this;
    }

    uploadDuplicateInvestorTerms(filename) {
        if (typeof filename !== 'undefined') {
            browser.getUrl().should.contain('/ui/waterfalls/create');
            this.termsUploadIcon.click();
            this.fileUploadButton.chooseFile(filename);
            this.uploadSubmitButton.click();
            this.okButton.waitForVisible(15000);
            this.uploadDownloadText.should.contain(this.strings.expectedDuplicateUploadMessage);
            this.okButton.click();
        }
        return this;
    }

    uploadDuplicateIdInvestorTerms(filename) {
        if (typeof filename !== 'undefined') {
            browser.getUrl().should.contain('/ui/waterfalls/create');
            this.termsUploadIcon.click();
            this.fileUploadButton.chooseFile(filename);
            this.uploadSubmitButton.click();
            this.okButton.waitForVisible(15000);
            this.uploadDownloadText.should.contain(this.strings.expectedDuplicateIdUploadMessage);
            this.okButton.click();
        }
        return this;
    }

    uploadMissingIdOrNameInvestorTerms(filename) {
        if (typeof filename !== 'undefined') {
            browser.getUrl().should.contain('/ui/waterfalls/create');
            this.termsUploadIcon.click();
            this.fileUploadButton.chooseFile(filename);
            this.uploadSubmitButton.click();
            this.okButton.waitForVisible(15000);
            this.uploadDownloadText.should.contain(this.strings.expectedMissingIdNameMessage);
            this.okButton.click();
        }
        return this;
    }

    uploadInvestorTermFirst() {
        this.wait().uploadInvestorTermFileFirstPopup.should.equal(this.strings.expectedUploadInvestorTermFirstMessage);
        this.okButton.waitForVisible(15000);
        this.okButton.click();
        this.previousButton.waitForVisible(15000);
        this.previousButton.click();
    }

    validateInvestorTermPopup() {
        this.wait().uploadInvestorTermFileFirstPopup.should.equal(this.strings.expectedUploadInvestorTermFirstMessage);
        this.wait().okButton.click();
    }

    addTiers(tier1, tier2, tier3, tier4) {
        browser.setViewportSize({
            width: 1300,
            height: 2500
        });
        this.wait();
        browser.execute(function () {
            window.scrollTo({
                top: 500,
                left: 100,
                behavior: 'smooth'
            });
        });

        this.lpaReferenceTier1ForTRC.waitForVisible();
        this.lpaReferenceTier1ForTRC.setValue("11");
        this.lpaReferenceTier2ForTRC.waitForVisible();
        this.lpaReferenceTier2ForTRC.setValue("22");

        this.calcMethodDropdown.waitForVisible();
        this.calcMethodDropdown.click();
        this.calcMethodIRR.waitForVisible();
        this.calcMethodIRR.click();
        this.wait().IRRPreferredReturnMethodDropdown.click();
        this.wait().IRRPreferredReturnCredit.click();

        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });

        this.defaultTRCPreferredReturn1.waitForVisible();
        this.defaultTRCPreferredReturn1.setValue("1");

        this.defaultTRCPreferredAllocation.waitForVisible();
        this.defaultTRCPreferredAllocation.setValue("0");

        this.defaultTRCPreferredReturn2.click();
        this.defaultTRCPreferredReturn2.setValue("1");

        this.defaultTRCPreferredReturn3.click();
        this.defaultTRCPreferredReturn3.setValue("1");

        this.defaultTRCPreferredReturn4.click();
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
        this.saveButton.waitForEnabled();
        this.cancelCreateWaterfall.isEnabled().should.be.true;
        this.saveButton.isEnabled().should.be.true;
        this.previousButton.isEnabled().should.be.true;
        this.clickSave();
        this.wait();
        browser.setViewportSize({
            width: 2000,
            height: 900
        });
        return this;
    }

    addTiersWithoutCalculationMethod(tier1, tier2, tier3, tier4) {
        browser.setViewportSize({
            width: 1300,
            height: 2500
        });
        this.wait();
        browser.execute(function () {
            window.scrollTo({
                top: 500,
                left: 100,
                behavior: 'smooth'
            });
        });

        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });

        this.defaultTRCPreferredReturn2.click();
        this.defaultTRCPreferredReturn2.setValue("1");

        this.defaultTRCPreferredReturn3.click();
        this.defaultTRCPreferredReturn3.setValue("1");

        this.defaultTRCPreferredReturn4.click();
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
        this.cancelCreateWaterfall.isEnabled().should.be.true;
        this.saveButton.isEnabled().should.be.false;
        this.previousButton.isEnabled().should.be.true;
        return this;
    }


    checkTotalReturnBuildTiersValues() {
        this.defaultTRCPreferredReturn1.waitForVisible(15000);
        this.defaultTRCPreferredReturn1.getValue() == 1;
        this.defaultTRCPreferredReturn2.waitForVisible(15000);
        this.defaultTRCPreferredReturn2.getValue() == 1;
        this.defaultTRCPreferredReturn3.waitForVisible(15000);
        this.defaultTRCPreferredReturn3.getValue() == 1;
        this.defaultTRCPreferredReturn4.waitForVisible(15000);
        this.defaultTRCPreferredReturn4.getValue() == 1;
    }

    checkDealByDealBuildTiersValues() {
        this.defaultRRCPreferredReturn1.waitForVisible(15000);
        this.defaultRRCPreferredReturn1.getValue() == 1;
        this.defaultRRCPreferredReturn2.waitForVisible(15000);
        this.defaultRRCPreferredReturn2.getValue() == 1;
        this.defaultRRCPreferredReturn3.waitForVisible(15000);
        this.defaultRRCPreferredReturn3.getValue() == 1;
        this.defaultRRCPreferredReturn4.waitForVisible(15000);
        this.defaultRRCPreferredReturn4.getValue() == 1;
    }

    scrollIntoView(selector) {
        browser.execute(function (elSelector) {
            document.querySelector(elSelector).scrollIntoView()
        }, selector);
    }

    addRRCTiers(tier1, tier2, tier3, tier4) {
        if (typeof tier1 !== 'undefined') {
            this.tier1LPA.waitForVisible();
            this.tier1LPA.click();
            this.tier1LPA.setValue(tier1);
        }

        if (typeof tier2 !== 'undefined') {
            this.tier2LPA.click();
            this.tier2LPA.setValue(tier2);
        }

        if (typeof tier3 !== 'undefined') {
            this.tier3LPA.click();
            this.tier3LPA.setValue(tier3);
        }

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
        if (typeof tier4 !== 'undefined') {
            this.wait().tier4LPA.click();
            this.tier4LPA.setValue(tier4);
        }
        this.wait().calcMethodDropdownDbyD.click();
        this.calcMethodIRR.waitForVisible();
        this.calcMethodIRR.click();
        this.wait().IRRPreferredReturnMethodDropdownDBD.click();
        this.wait().IRRPreferredReturnCredit.click();

        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.defaultRRCPreferredReturn1.waitForVisible();
        this.defaultRRCPreferredReturn1.setValue("1");

        this.defaultRRCPreferredAllocation.waitForVisible();
        this.defaultRRCPreferredAllocation.setValue("0");

        this.wait().defaultRRCPreferredReturn2.click();
        this.defaultRRCPreferredReturn2.setValue("1");

        this.defaultRRCPreferredReturn3.click();
        this.defaultRRCPreferredReturn3.setValue("1");

        this.defaultRRCPreferredReturn4.click();
        this.defaultRRCPreferredReturn4.setValue("1");

        this.saveButton.waitForEnabled();
        this.saveButton.waitForVisible();
        this.saveButton.isEnabled().should.be.true;
        this.clickSave();
        browser.setViewportSize({
            width: 1366,
            height: 900
        });
        return this;
    }

    transactionMappingScreenForTPGClient() {
        this.wait().transactionMappingScreenForTPG.getText().should.equal('Transaction Mapping');
    }

    getRandomNumberWithinRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    addTiersErrorMessageValidation(tier1, tier2, tier3, tier4) {
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

        this.wait().calcMethodDropdownDbyD.click();
        this.calcMethodIRR.waitForVisible();
        this.calcMethodIRR.click();
        this.longWait().defaultRRCPreferredReturn1.click();
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        if (typeof tier3 !== 'undefined') {
            this.wait().tier3LPA.click();
            this.wait().tier3LPA.setValue(tier3);
        }
        this.defaultRRCPreferredReturn1.setValue(this.getRandomNumberWithinRange(101, 999));
        this.wait().tier3LPA.click();
        this.longWait().higherValueMessage.should.be.equal(this.strings.expectedHigherValueMessage);
        this.defaultRRCPreferredReturn1.click();
        for (let i = 0; i < 3; i++) {
            browser.keys('\uE003');
        }
        this.defaultRRCPreferredReturn1.setValue(this.getRandomNumberWithinRange(-1, -999));
        this.wait().tier3LPA.click();
        this.longWait().negativeValueMessage.should.be.equal(this.strings.expectedNegativeValueMessage);
        this.defaultRRCPreferredReturn1.click();
        for (let i = 0; i < 4; i++) {
            browser.keys('\uE003');
        }
        return this;
    }

    validateTiersForBlank(tier1, tier2, tier3, tier4) {
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

        this.calcMethodDropdown.waitForVisible();
        this.calcMethodDropdown.click();
        this.calcMethodIRR.waitForVisible();
        this.calcMethodIRR.click();
        assert.equal(this.defaultTRCPreferredReturn1.getText(), '');
        assert.equal(this.defaultTRCPreferredReturn2.getText(), '');
        assert.equal(this.defaultTRCPreferredReturn3.getText(), '');
        assert.equal(this.defaultTRCPreferredReturn4.getText(), '');
        return this;
    }

    downloadInvestorTerms() {
        this.downloadTemplate.waitForVisible();
        this.downloadTemplate.click();
    }

    deleteInvestorTerms(filename) {
        this.wait().deleteInvestorTerm.isEnabled().should.be.false;
        this.uploadInvestorTerms(filename);
        this.wait().deleteInvestorTerm.isEnabled().should.be.true;
        this.wait().deleteInvestorTerm.click();
        this.wait().deleteInvestorTermText.getText().should.equal(this.strings.expectedDeleteInvestorTermMessage);
        this.wait().confirmDeleteButton.click();
        this.wait().emptyInvestorTermsGrid.getText().should.equal(this.strings.expectedEmptyInvestorTermsGrid);
    }

    selectNav() {
        this.transactionsLabel.click();
        this.wait().nav.click();
        browser.getUrl().should.contain('/ui/waterfalls/transactions/nav');
        this.pageHeading.should.equal('NAV');
        this.collapseMenu.click();
    }

    selectContributions() {
        this.transactionsLabel.click();
        this.wait().contributions.click();
        browser.getUrl().should.contain('/ui/waterfalls/transactions/contributions');
        this.pageHeading.should.equal('Contributions');
        this.wait().collapseMenu.click();
    }

    selectDistributions() {
        this.transactionsLabel.click();
        this.wait().distributions.click();
        browser.getUrl().should.contain('/ui/waterfalls/transactions/distributions');
        this.pageHeading.should.equal('Distributions');
        this.collapseMenu.click();
    }

    selectPriorCarriedInterest() {
        this.transactionsLabel.click();
        this.wait().priorCarriedInterest.click();
        browser.getUrl().should.contain('/ui/waterfalls/transactions/prior-carried-interest');
        this.pageHeading.should.equal('Prior Carried Interest');
        this.collapseMenu.click();
    }

    selectEvents() {
        this.wait().events.click();
        browser.getUrl().should.contain('/ui/waterfalls/events/create');
        this.collapseMenu.click();
    }

    selectWaterfall() {
        this.waterfallSelector.selectByVisibleText(this.strings.waterfall);
    }

    selectRandomlyCreatedWaterfall() {
        this.waterfallMenu.click();
        this.addWaterfall.click();
        this.wait().breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        this.wait().collapseMenu.click();
        const waterfallName = 'TestBot-' + util.generateRandomString(7);
        this.waterfallName.setValue(waterfallName);
        this.cancelCreateWaterfall.isEnabled().should.be.true;
        this.saveButton.isEnabled().should.be.false;
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.selectCurrency.waitForVisible();
        this.wait().selectCurrency.click();
        this.selectRandomCurrency();
        this.saveButton.waitForEnabled();
        this.saveButton.isEnabled().should.be.true;
        this.addComment();
        this.clickSave();
        return waterfallName;
    }

    selectNewNameAfterDuplicateWaterfall() {
        this.breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        const waterfallName = 'TestBot-' + util.generateRandomString(7);
        this.waterfallName.setValue(waterfallName);
        this.cancelCreateWaterfall.isEnabled().should.be.true;
        this.saveButton.isEnabled().should.be.true;
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.selectCurrency.waitForVisible();
        this.wait().selectCurrency.click();
        this.selectRandomCurrency();
        this.saveButton.waitForEnabled();
        this.saveButton.isEnabled().should.be.true;
        this.addComment();
        this.clickSave();
        return waterfallName;
    }

    selectDuplicateWaterfallName() {
        this.longWait().addWaterfall.click();
        this.breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        const waterfallName = 'Automation-NonInvestran';
        this.waterfallName.setValue(waterfallName);
        this.saveButton.isEnabled().should.be.false;
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.selectCurrency.waitForVisible();
        this.wait().selectCurrency.click();
        browser.waitUntil(() => {
            return this.duplicateWaterfallNameMessage.isExisting();
        }, 30000, 'Duplicate name message is not Visible');
        this.duplicateWaterfallNameMessage.getText().should.equal('Waterfall Name is already used.');
    }

    verifySnackBarForInProgresStatus() {
        this.searchAndEditWaterfall('Automation-NonInvestran');
        this.longWait();
        this.snackBarMessage.getText().should.equal(this.strings.expectedSnackBarMessage);
    }

    buildTiersLegend() {
        this.defaultTRCPreferredReturn2.waitForVisible(15000);
        return this;
    }

    clickEditWaterfall() {
        this.editWaterfallIcon.waitForVisible(15000);
        this.editWaterfallIcon.click();

    }

    selectRandomlyCreatedWaterfallWithInvestranLink(isCustomInvestorId) {
        this.wait().addWaterfall.click();
        this.wait().breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        const waterfallName = 'TestBot-' + util.generateRandomString(7);
        this.wait().collapseMenu.click();
        this.waterfallName.setValue(waterfallName);
        this.saveButton.isEnabled().should.be.false;
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.reportingGroup.waitForVisible();
        this.reportingGroup.waitForEnabled();
        if (this.reportingGroup.isVisible() || this.reportingGroup.isEnabled()) {
            this.reportingGroup.click();
        } else {
            this.reportingGroup.waitForVisible();
            this.reportingGroup.click();
        }
        this.selectReportingGroup.waitForVisible();
        this.selectReportingGroup.click();
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.selectCurrency.waitForVisible();
        this.wait().selectCurrency.click();
        $(`li[data-value='USD']`).waitForVisible();
        this.selectRandomCurrency();
        this.saveButton.isEnabled().should.be.true;
        if (isCustomInvestorId == true) {
            this.wait().customInvestorId.click();
        }
        this.addComment();
        this.longWait().clickSave();
        return waterfallName;
    }

    addRRCTiersWithAggregateExpense(tier1, tier2, tier3, tier4) {
        this.wait().addAggregateExpenseDBD.click();
        if (typeof tier1 !== 'undefined') {
            this.tier1LPA.waitForVisible();
            this.tier1LPA.click();
            this.tier1LPA.setValue(tier1);
        }

        if (typeof tier2 !== 'undefined') {
            this.tier2LPA.click();
            this.tier2LPA.setValue(tier2);
        }

        if (typeof tier3 !== 'undefined') {
            this.tier3LPA.click();
            this.tier3LPA.setValue(tier3);
        }

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
        
        if (typeof tier4 !== 'undefined') {
            this.wait().tier4LPA.click();
            this.tier4LPA.setValue(tier4);
        }
        this.wait().calcMethodDropdownDbyD.click();
        this.calcMethodIRR.waitForVisible();
        this.calcMethodIRR.click();
        this.wait().IRRPreferredReturnMethodDropdownDBD.click();
        this.wait().IRRPreferredReturnCredit.click();

        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.defaultRRCPreferredReturn1.waitForVisible();
        this.defaultRRCPreferredReturn1.setValue("1");

        this.defaultRRCPreferredAllocation.waitForVisible();
        this.defaultRRCPreferredAllocation.setValue("0");

        this.wait().defaultRRCPreferredReturn2.click();
        this.defaultRRCPreferredReturn2.setValue("1");

        this.defaultRRCPreferredReturn3.click();
        this.defaultRRCPreferredReturn3.setValue("1");

        this.defaultRRCPreferredReturn4.click();
        this.defaultRRCPreferredReturn4.setValue("1");

        this.saveButton.waitForEnabled();
        this.saveButton.waitForVisible();
        this.saveButton.isEnabled().should.be.true;
        this.clickSave();
        browser.setViewportSize({
            width: 1366,
            height: 900
        });
        return this;
    }

    selectRandomlyCreatedWaterfallWithInvestranLinkDBD(isCustomInvestorId) {
        this.wait().addWaterfall.click();
        this.wait().breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        const waterfallName = 'TestBot-' + util.generateRandomString(7);
        this.wait().collapseMenu.click();
        this.waterfallName.setValue(waterfallName);
        this.saveButton.isEnabled().should.be.false;
        this.realizedReturnOfCapitalWaterallType.click();
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.reportingGroup.waitForVisible();
        this.reportingGroup.waitForEnabled();
        if (this.reportingGroup.isVisible() || this.reportingGroup.isEnabled()) {
            this.reportingGroup.click();
        } else {
            this.reportingGroup.waitForVisible();
            this.reportingGroup.click();
        }
        this.selectReportingGroup.waitForVisible();
        this.selectReportingGroup.click();
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.selectCurrency.waitForVisible();
        this.wait().selectCurrency.click();
        $(`li[data-value='USD']`).waitForVisible();
        this.selectRandomCurrency();
        this.saveButton.isEnabled().should.be.true;
        if (isCustomInvestorId == true) {
            this.wait().customInvestorId.click();
        }
        this.addComment();
        this.longWait().clickSave();
        return waterfallName;
    }

    editInvestranLinkWaterfall() {
        this.longWait().breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        browser.execute(function () {
            window.scrollTo({
                top: 500,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.reportingGroup.waitForVisible();
        this.reportingGroup.waitForEnabled();
        if (this.reportingGroup.isVisible() || this.reportingGroup.isEnabled()) {
            this.reportingGroup.click();
        } else {
            this.reportingGroup.waitForVisible();
            this.reportingGroup.click();
        }
        this.selectNPLIIReportingGroup.waitForVisible();
        this.selectNPLIIReportingGroup.click();
        this.saveButton.isEnabled().should.be.true;
        this.clickSave();
    }

    verifyWaterfallDetails() {
        this.waterfallMenu.click();
        this.addWaterfall.click();
        this.collapseMenu.click();
        this.breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        const waterfallName = 'TestBot-' + util.generateRandomString(7);
        this.waterfallName.setValue(waterfallName);
        this.saveButton.isEnabled().should.be.false;
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        var waterfallTypes = this.waterfallType.getText();
        this.longerWait();
        if (this.reportingGroup.isVisible() || this.reportingGroup.isEnabled()) {
            this.reportingGroup.click();
        } else {
            this.reportingGroup.waitForVisible();
            this.reportingGroup.click();
        }
        this.selectReportingGroup.waitForVisible();
        this.selectReportingGroup.click();
        const investranReportingGroup = this.reportingGroup.getText();
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.selectCurrency.waitForVisible();
        this.wait().selectCurrency.click();
        this.selectRandomCurrency();
        const selectedCurrency = this.selectCurrency.getText();
        const addedComment = this.addComment();
        this.clickSave();
        let waterfallData = { waterfallName, waterfallTypes, investranReportingGroup, selectedCurrency, addedComment };
        return waterfallData;
    }

    buildTiers() {
        for (let i = 0; i < 3; i++) {
            this.deleteROCTRCTier.waitForVisible();
            this.wait().deleteROCTRCTier.click();
        }
        this.wait().lpaReferenceTRCTier1.click();
        this.wait().deleteROCTRCTier.click();
        this.deleteROCTRCTier.isExisting().should.be.false;
    }

    buildTiersFromScratch() {
        this.wait().citcoLogo.getText().should.equal('CITCO WATERFALL');
        this.addROCTRCTier.waitForVisible();
        this.addROCTRCTier.click();
        this.deleteROCTRCTier.isExisting().should.be.true;
        this.addPreferredReturnTRCTier.waitForVisible();
        this.addPreferredReturnTRCTier.click();
        this.deletePreferredReturnTRCTier.isExisting().should.be.true;
        this.addCatchUpTRCTier.waitForVisible();
        this.addCatchUpTRCTier.click();
        this.deleteCatchUpTRCTier.isExisting().should.be.true;
        this.addFinalSplitTRCTier.waitForVisible();
        this.addFinalSplitTRCTier.click();
        this.deleteFinalSplitTRCTier.isExisting().should.be.true;
    }

    waterfallDetailsScreen() {
        let waterfallData = this.clickExpandMenu().verifyWaterfallDetails();
        this.addTiers().clickSave();
        this.confirmNoCIPInvestorTerms();
        const reviewAndSubmitScreenData = this.wait().reviewAndSubmitWaterfallDetails.getText().split("\n");
        this.lpaReferenceTier2WaterfallDetailsScreen.getText().should.equal("LPA Reference\n22");
        let expectedList = [waterfallData.waterfallName, waterfallData.waterfallTypes, waterfallData.investranReportingGroup, waterfallData.selectedCurrency, waterfallData.addedComment, 'Transaction Bucket Mapping', 'NAV'];
        reviewAndSubmitScreenData.should.contain.members(expectedList);
        // this.exportPageButton.isEnabled().should.be.true;
        this.exportPageButton.isExisting().should.be.true;
        return waterfallData.waterfallName;
    }

    waterfallDetailsScreenForTPG() {
        this.clickExpandMenu().verifyWaterfallDetailsForTPG();
        this.addRRCTiers().clickSave();
        this.transactionMappingScreenForTPGClient();
        return this;
    }

    verifyWaterfallDetailsForTPG() {
        this.waterfallMenu.click();
        this.addWaterfall.click();
        this.collapseMenu.click();
        this.breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        const waterfallName = 'TestBot-' + util.generateRandomString(7);
        this.waterfallName.setValue(waterfallName);
        this.saveButton.isEnabled().should.be.false;
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.totalReturnOfCapitalWaterfallType.isExisting().should.be.false;
        this.longWait();
        if (this.reportingGroup.isExisting()) {
            this.wait().reportingGroup.click();
            this.selectNotLinkedToInvestranReportingGroup.waitForVisible();
            this.selectNotLinkedToInvestranReportingGroup.click();
        }
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.selectCurrency.waitForVisible();
        this.wait().selectCurrency.click();
        this.selectRandomCurrency();
        this.selectCurrency.getText();
        this.addComment();
        this.clickSave();
        return this;
    }

    validateCalculateResultsOn() {
        this.clickExpandMenu();
        this.waterfallMenu.click();
        this.addWaterfall.click();
        this.collapseMenu.click();
        this.breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        const waterfallName = 'TestBot-' + util.generateRandomString(7);
        this.waterfallName.setValue(waterfallName);
        this.saveButton.isEnabled().should.be.false;
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        var waterfallTypes = this.waterfallType.getText();
        this.longerWait();
        if (this.reportingGroup.isVisible() || this.reportingGroup.isEnabled()) {
            this.reportingGroup.click();
        } else {
            this.reportingGroup.waitForVisible();
            this.reportingGroup.click();
        }
        this.selectNotLinkedToInvestranReportingGroup.waitForVisible();
        this.selectNotLinkedToInvestranReportingGroup.click();
        this.specificInvestorId.isExisting().should.be.false;
        this.wait().reportingGroup.click();
        this.selectReportingGroup.waitForVisible();
        this.selectReportingGroup.click();
        this.specificInvestorId.isExisting().should.be.true;
        return this;
    }

    validateAggregateExpenseDefaultHierarchy() {
        this.wait().aggregateExpenseHierarchy.getText().should.equal('Contributions - Expenses (Inside Commitment)');
    }

    clickTranscationMappingNext() {
        this.longWait().transactionMappingNextButton.click();
    }

    validateUniqueValueForExpenseContributionsDBD() {
        this.wait();
        this.allTransactionsBucketsDBD.length.should.equal(10);
    }

    validateDefaultTermColumn() {
        browser.waitUntil(() => {
            return this.snackBarMessage.isExisting();
        }, 30000, 'Snackbar Message is not Visible');
        this.defaultTermValue.getText().should.equal('Yes');
        this.termsPreferredReturn.click();
        this.termsPreferredReturn.click();
        browser.keys('\uE01F');
        browser.keys('\uE007');
        this.wait().confirmNoCIPInvestorTerms();
        this.wait().previousButton.waitForVisible();
        this.previousButton.click();
        browser.waitUntil(() => {
            return this.snackBarMessage.isExisting();
        }, 30000, 'Snackbar Message is not Visible');
        this.defaultTermValue.getText().should.equal('No');
    }

    validateTPGTransactionsUpload() {
        this.transactionMapingLegend.getText().should.equal('Transaction Mapping');
        this.transactionMappingUploadButton.isExisting().should.be.true;
    }

    uploadTPGOneRowTransactionsFiles(filename) {
        this.wait();
        this.transactionMappingUploadButton.click();
        this.fileUploadButton.chooseFile(filename);
        this.uploadSubmitButton.click();
        browser.waitUntil(() => {
            return this.noInvestorsWithCIPPopUp.isVisible();
        }, 30000, "Pop up Message did not show up");
        this.longWait().uploadInvestorTermFileFirstPopup.should.equal(this.strings.expectedOneRowTransactionMappingMessage);
        this.okButton.click();
    }

    uploadTPGMultipleRowsTransactionsFiles(filename) {
        this.wait();
        this.transactionMappingUploadButton.click();
        this.fileUploadButton.chooseFile(filename);
        this.uploadSubmitButton.click();
        browser.waitUntil(() => {
            return this.noInvestorsWithCIPPopUp.isVisible();
        }, 30000, "Pop up Message did not show up");
        this.longWait().uploadInvestorTermFileFirstPopup.should.equal(this.strings.expectedOneRowTransactionMappingMessage);
        this.okButton.click();
    }

    uploadTPGOneIncorrectRowsTransactionsFiles(filename) {
        this.wait();
        this.transactionMappingUploadButton.click();
        this.fileUploadButton.chooseFile(filename);
        this.uploadSubmitButton.click();
        browser.waitUntil(() => {
            return this.noInvestorsWithCIPPopUp.isVisible();
        }, 30000, "Pop up Message did not show up");
        this.longWait().uploadInvestorTermFileFirstPopup.should.equal(this.strings.expectedIncorrectRowsTransactionMappingMessage);
        this.okButton.click();
    }

    uploadTPGWrongSchemaTransactionsFiles(filename) {
        this.wait();
        this.transactionMappingUploadButton.click();
        this.fileUploadButton.chooseFile(filename);
        this.uploadSubmitButton.click();
        browser.waitUntil(() => {
            return this.noInvestorsWithCIPPopUp.isVisible();
        }, 30000, "Pop up Message did not show up");
        this.longWait().uploadInvestorTermFileFirstPopup.should.equal(this.strings.expectedWrongSchemaTransactionMappingMessage);
        this.okButton.click();
    }

    // confirmNoCIPInvestorTerms() {
    //     browser.waitUntil(() => {
    //         return this.noInvestorsWithCIPPopUp.isVisible();
    //     }, 30000, "Pop up Message did not show up");
    //     this.noCIPInvestorTerm.should.equal(this.strings.expectedNoCIPInvestorTermMessage);
    //     this.okConfirmButton.click();
    // }

    selectRealizedReturnCapitalWaterfall() {
        this.waterfallMenu.click();
        this.addWaterfall.click();
        this.breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        const waterfallName = 'TestBot-' + util.generateRandomString(7);
        this.waterfallName.setValue(waterfallName);
        this.saveButton.isEnabled().should.be.false;
        this.realizedReturnOfCapitalWaterallType.click();
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.selectCurrency.waitForVisible();
        this.wait().selectCurrency.click();
        this.selectRandomCurrency();
        this.saveButton.waitForEnabled();
        this.saveButton.isEnabled().should.be.true;
        this.addComment();
        this.clickSave();
        return waterfallName;
    }

    selectInvestranLinkedRealizedReturnCapitalWaterfall() {
        this.waterfallMenu.waitForVisible();
        this.waterfallMenu.click();
        this.addWaterfall.click();
        this.collapseMenu.click();
        const waterfallName = 'TestBot-' + util.generateRandomString(7);
        this.waterfallName.setValue(waterfallName);
        this.saveButton.isEnabled().should.be.false;
        this.realizedReturnOfCapitalWaterallType.click();
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.reportingGroup.waitForVisible();
        this.reportingGroup.waitForEnabled();
        if (this.reportingGroup.isVisible() || this.reportingGroup.isEnabled()) {
            this.reportingGroup.click();
        } else {
            this.reportingGroup.waitForVisible();
            this.reportingGroup.click();
        }
        this.selectReportingGroup.waitForVisible();
        this.selectReportingGroup.click();
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.selectCurrency.waitForVisible();
        this.wait().selectCurrency.click();
        this.selectRandomCurrency();
        this.saveButton.isEnabled().should.be.true;
        this.addComment();
        this.clickSave();
        return waterfallName;
    }

    goToWaterfallMenu() {
        this.wait().waterfallMenu.click();
        this.wait().collapseMenu.click();
        return this;
    }

    addComment() {
        const comment = util.generateRandomString(7);
        this.comments.setValue(comment);
        return comment;
    }

    getWaterfallDetails() {
        this.submitForApproval.waitForVisible(30000);
        return this.wait().waterfallDetailGrid.getText();
    }

    clickSave() {
        this.longWait().saveButton.click();
        return this;
    }

    clickPreviousButton() {
        this.previousButton.waitForVisible(15000);
        this.wait().previousButton.click();
        return this;
    }

    editTermsCell() {
        this.wait().editTerms.click();
        this.wait().editTerms.click();
        browser.keys(['Meta', '\uE01C']);
    }

    submitWaterfallForApproval() {
        this.wait().waterfallDetailsText.should.equal(this.strings.expectedWaterfallDetailsText);
        browser.getUrl().should.contain('/ui/waterfalls/create');
        this.wait().submitForApproval.click();
        return this;
    }

    searchForWaterfall(waterfall) {
        this.wait().searchWaterfallIcon.click();
        this.wait().searchWaterfallBox.setValue(waterfall);
        this.wait().searchResult.click();
        WaterfallDetailsPage.setUpViewGridDetails.should.contain(waterfall);
        return this;
    }

    clickLoadWaterfallButton() {
        this.loadWaterfallButton.waitForEnabled();
        this.loadWaterfallButton.click();
        this.breadcrumbText.should.equal(this.strings.expectedLoadWaterfallBreadcrumbText);
    }

    uploadTerms(filename) {
        this.addTiers();
        this.uploadInvestorTerms(filename);
        return this;
    }

    deleteAndUploadNewInvestorTermFile(filename) {
        this.longWait();
        this.deleteInvestorTerm.waitForEnabled(15000);
        this.deleteInvestorTerm.click();
        this.okButton.waitForVisible(15000);
        this.deleteInvestorTermText.getText().should.equal(this.strings.expectedDeleteInvestorTermMessage);
        this.confirmDeleteButton.click();
        browser.waitUntil(() => {
            return this.emptyInvestorTermsGrid.isVisible();
        }, 30000, "Empty Investor Terms Template Message did not appear.");
        this.wait().emptyInvestorTermsGrid.getText().should.equal(this.strings.expectedEmptyInvestorTermsGrid);
        this.termsUploadIcon.click();
        this.fileUploadButton.chooseFile(filename);
        this.uploadSubmitButton.click();
        this.okButton.waitForVisible(15000);
        this.incorrectInvestorTermFilePopup.should.equal(this.strings.expectedIncorrectInvestorTermFileUploadMessage);
        this.okButton.click();
    }

    downloadAndUploadUpdatedFile(filename) {
        this.downloadTemplate.waitForVisible(15000);
        this.downloadTemplate.click();
    }

    downloadAndUploadSameFile(filename) {
        this.downloadTemplate.waitForVisible(15000);
        this.downloadTemplate.click();
        this.wait().termsUploadIcon.click();
        this.fileUploadButton.chooseFile(filename);
        this.uploadSubmitButton.click();
        this.okButton.waitForVisible(15000);
    }

    validateLoadWaterfallName() {
        for (let j = 0; j < this.accountDropdownList.length; j++) {
            this.accountSelector.click();
            this.accountDropdownList[j].click();
            for (let i = 0; i < this.waterfallNames.length; i++) {
                this.waterfallNames[i].click();
                this.waterfallNameInput.getValue().should.equal(this.waterfallSelector.getValue());
                this.clickLoadWaterfallButton();
                this.maximumRow.click();
            }
        }
    }

    saveTiers(calculationMethod) {
        browser.waitUntil(() => {
            return this.tiersBreadcrumb.isVisible();
        }, 30000, "Tiers page did not load.");
        browser.waitUntil(() => {
            return this.tiersBreadcrumb.getText() === this.strings.expectedTiersBreadcrumbText;
        }, 30000, "Tiers page did not load.");
        if (calculationMethod == util.calculationMethod.IRR.NAME) {
            this.calcMethodDropdown.waitForVisible();
            this.calcMethodDropdown.click();
            this.calcMethodIRR.waitForVisible();
            this.calcMethodIRR.click();

            this.defaultTRCPreferredReturn1.waitForVisible();
            this.defaultTRCPreferredReturn1.setValue("1");

            this.defaultTRCPreferredAllocation.waitForVisible();
            this.defaultTRCPreferredAllocation.setValue("0");

            browser.execute(function () {
                window.scrollTo({
                    top: 800,
                    left: 100,
                    behavior: 'smooth'
                });
            });
            this.defaultTRCPreferredReturn2.waitForVisible();
            this.wait().defaultTRCPreferredReturn2.click();
            this.defaultTRCPreferredReturn2.setValue("1");

            this.defaultTRCPreferredReturn3.click();
            this.defaultTRCPreferredReturn3.setValue("1");

            this.defaultTRCPreferredReturn4.click();
            this.defaultTRCPreferredReturn4.setValue("1");

            this.saveButton.waitForEnabled();
            this.saveButton.waitForVisible();
            this.saveButton.isEnabled().should.be.true;
        }
        if (calculationMethod == util.calculationMethod.MULTIPLIER.NAME) {
            this.calcMethodDropdown.waitForVisible();
            this.calcMethodDropdown.click();
            this.calcMethodMultiplier.waitForVisible();
            this.calcMethodMultiplier.click();

            this.defaultMultiplierPreferredReturn.waitForVisible();
            this.defaultMultiplierPreferredReturn.setValue("1");

            this.defaultMultiplierPreferredAllocation.waitForVisible();
            this.defaultMultiplierPreferredAllocation.setValue("0");

            browser.execute(function () {
                window.scrollTo({
                    top: 800,
                    left: 100,
                    behavior: 'smooth'
                });
            });
            this.defaultTRCPreferredReturn2.waitForVisible();
            this.wait().defaultTRCPreferredReturn2.click();
            this.defaultTRCPreferredReturn2.setValue("1");

            this.defaultTRCPreferredReturn3.click();
            this.defaultTRCPreferredReturn3.setValue("1");

            this.defaultTRCPreferredReturn4.click();
            this.defaultTRCPreferredReturn4.setValue("1");

            this.saveButton.waitForEnabled();
            this.saveButton.waitForVisible();
            this.saveButton.isEnabled().should.be.true;
        }
        if (calculationMethod == util.calculationMethod.CUSTOM.NAME) {
            this.calcMethodDropdown.waitForVisible();
            this.calcMethodDropdown.click();
            this.calcMethodCustom.waitForVisible();
            this.calcMethodCustom.click();
            this.defaultCustomLPTarget.waitForVisible();
            this.defaultCustomLPTarget.setValue("1");
            this.defaultCustomCIPAllocation.waitForVisible();
            this.defaultCustomCIPAllocation.setValue("1");

            browser.execute(function () {
                window.scrollTo({
                    top: 800,
                    left: 100,
                    behavior: 'smooth'
                });
            });
            this.wait().compoundingFrequency.click();
            this.wait().compoundingFrequencyDaily.click();

            this.wait().dayCountMethod.click();
            this.wait().dayCountMethod365.click();

            this.wait().dayIntervalContributions.click();
            this.dayIntervalContributions.setValue("2");

            this.wait().dayIntervalDistributions.click();
            this.dayIntervalDistributions.setValue("-2");

            this.defaultTRCPreferredReturn2.waitForVisible();
            this.wait().defaultTRCPreferredReturn2.click();
            this.defaultTRCPreferredReturn2.setValue("1");

            this.wait().defaultTRCPreferredReturn3.click();
            this.defaultTRCPreferredReturn3.setValue("1");

            this.wait().defaultTRCPreferredReturn4.click();
            this.defaultTRCPreferredReturn4.setValue("1");

            this.saveButton.waitForEnabled();
            this.saveButton.waitForVisible();
            this.saveButton.isEnabled().should.be.true;
        }
        if (this.saveButton.isEnabled()) {
            this.clickSave();
        }
        return this;
    }

    saveDBDTiers(calculationMethod) {
        browser.waitUntil(() => {
            return this.tiersBreadcrumb.isVisible();
        }, 30000, "Tiers page did not load.");
        browser.waitUntil(() => {
            return this.tiersBreadcrumb.getText() === this.strings.expectedTiersBreadcrumbText;
        }, 30000, "Tiers page did not load.");
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

        if (calculationMethod == util.calculationMethod.IRR.NAME) {
            this.dbdCalcMethodDropdown.waitForVisible();
            this.dbdCalcMethodDropdown.click();
            this.calcMethodIRR.waitForVisible();
            this.calcMethodIRR.click();

            this.defaultRRCPreferredReturn1.waitForVisible();
            this.defaultRRCPreferredReturn1.setValue("1");

            this.defaultRRCPreferredAllocation.waitForVisible();
            this.defaultRRCPreferredAllocation.setValue("0");

            this.defaultRRCPreferredReturn2.click();
            this.defaultRRCPreferredReturn2.setValue("1");

            this.defaultRRCPreferredReturn3.click();
            this.defaultRRCPreferredReturn3.setValue("1");

            this.defaultRRCPreferredReturn4.click();
            this.defaultRRCPreferredReturn4.setValue("1");

            this.saveButton.waitForEnabled();
            this.saveButton.waitForVisible();
            this.saveButton.isEnabled().should.be.true;
        }

        if (calculationMethod == util.calculationMethod.MULTIPLIER.NAME) {
            this.calcMethodDropdown.waitForVisible();
            this.calcMethodDropdown.click();
            this.calcMethodMultiplier.waitForVisible();
            this.calcMethodMultiplier.click();

            this.defaultRRCMultiplierPreferredReturn1.waitForVisible();
            this.defaultRRCMultiplierPreferredReturn1.setValue("1");

            this.defaultRRCMultiplierPreferredReturn2.waitForVisible();
            this.defaultRRCMultiplierPreferredReturn2.setValue("0.01");

            this.defaultRRCPreferredReturn2.click();
            this.defaultRRCPreferredReturn2.setValue("1");

            this.defaultRRCPreferredReturn3.click();
            this.defaultRRCPreferredReturn3.setValue("1");

            this.defaultRRCPreferredReturn4.click();
            this.defaultRRCPreferredReturn4.setValue("1");

            this.saveButton.waitForEnabled();
            this.saveButton.waitForVisible();
            this.saveButton.isEnabled().should.be.true;
        }

        if (this.saveButton.isEnabled()) {
            this.clickSave();
        }
        return this;
    }

    saveTranscationMappings() {
        this.longWait();
        browser.waitUntil(() => {
            return this.mappingsBreadcrumb.isVisible();
        }, 30000, "Tiers page did not load.");
        browser.waitUntil(() => {
            return this.mappingsBreadcrumb.getText() === this.strings.expectedMappingsBreadcrumbText;
        }, 30000, "Tiers page did not load2.");
        browser.waitUntil(() => {
            return this.saveButton.isVisible();
        }, 60000, "Save Button did not get enabled.");
        this.saveButton.click();
    }

    saveSyncedTerms() {
        browser.waitUntil(() => {
            return this.syncDialogue.isVisible();
        }, 30000, "Investran Sync Dialog did not appear.");
        if (this.syncDialogue.isVisible()) {
            this.syncDialogue.getText().should.contain('investors added from Investran');
        }
        this.wait().saveButton.click();
        if (this.wait().noInvestorsWithCIPPopUp.isVisible()) {
            this.noCIPInvestorTerm.should.equal(this.strings.expectedNoCIPInvestorTermMessage);
            this.okConfirmButton.click();
        }
    }

    uploadCustomInvestorTerms(calculationMethod) {
        this.cancelCreateWaterfall.isEnabled().should.be.true;
        this.previousButton.isEnabled().should.be.true;
        this.termsUploadIcon.waitForVisible();
        this.termsUploadIcon.click();
        if (calculationMethod == util.calculationMethod.MULTIPLIER.NAME) {
            this.fileUploadButton.chooseFile('./resources/total_return_multiplier_investor_terms.xlsx');
        }
        if (calculationMethod == util.calculationMethod.IRR.NAME) {
            this.fileUploadButton.chooseFile('./resources/total_return_investor_terms.xlsx');
        }
        if (calculationMethod == util.calculationMethod.CUSTOM.NAME) {
            this.fileUploadButton.chooseFile('./resources/Custom-Terms.xlsx');
        }
        if (calculationMethod == util.calculationMethod.SIMPLE_INTEREST.NAME) {
            this.fileUploadButton.chooseFile('./resources/Simple_Interest_DBD_AggregateExpense_Terms.xlsx');
        }
        this.uploadSubmitButton.click();
        this.okButton.waitForVisible();
        this.uploadDownloadText.should.contain(this.strings.expectedUploadSuccessMessage);
        this.okButton.click();
        this.saveButton.click();
        if (this.wait().noInvestorsWithCIPPopUp.isVisible()) {
            this.noCIPInvestorTerm.should.equal(this.strings.expectedNoCIPInvestorTermMessage);
            this.okConfirmButton.click();
        }
        return this;
    }

    uploadCustomDbyDInvestorTerms(calculationMethod) {
        this.cancelCreateWaterfall.isEnabled().should.be.true;
        this.previousButton.isEnabled().should.be.true;
        this.termsUploadIcon.waitForVisible();
        this.termsUploadIcon.click();
        if (calculationMethod == util.calculationMethod.MULTIPLIER.NAME) {
            this.fileUploadButton.chooseFile('./resources/total_return_multiplier_investor_terms.xlsx');
        }
        if (calculationMethod == util.calculationMethod.IRR.NAME) {
            this.fileUploadButton.chooseFile('./resources/DBD_Terms.xlsx');
        }
        if (calculationMethod == util.calculationMethod.CUSTOM.NAME) {
            this.fileUploadButton.chooseFile('./resources/Custom-Terms.xlsx');
        }
        this.uploadSubmitButton.click();
        this.okButton.waitForVisible();
        this.uploadDownloadText.should.contain(this.strings.expectedUploadSuccessMessage);
        this.okButton.click();
        this.saveButton.click();
        if (this.wait().noInvestorsWithCIPPopUp.isVisible()) {
            this.noCIPInvestorTerm.should.equal(this.strings.expectedNoCIPInvestorTermMessage);
            this.okConfirmButton.click();
        }
        return this;
    }


    continueEditingWaterfall(waterfallName, investranLinked, calculationMethod) {
        browser.waitUntil(() => {
            return this.breadcrumb.isVisible();
        }, 30000, "Waterfall did not load.");
        this.breadcrumbText.should.equal(this.strings.expectedBreadcrumbText);
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.reportingGroup.waitForVisible();
        this.reportingGroup.waitForEnabled();
        this.saveButton.isEnabled().should.be.true;
        this.clickSave();
        if (waterfallName.includes("DbyD") || waterfallName.includes("DealByDeal") || waterfallName.includes("AggregateExpense")) {
            this.saveDBDTiers();
        } else {
            this.saveTiers();
        }
        if (investranLinked == true) {
            this.saveTranscationMappings();
        }
        if (investranLinked == true) {
            this.saveSyncedTerms();
        } else {
            this.uploadCustomInvestorTerms(calculationMethod);
        }
        browser.waitUntil(() => {
            return this.submitForApproval.isVisible();
        }, 30000, "Waterfall Details page did not load.");
        this.submitForApproval.click();
        return this;
    }

    manageWaterfallCreation(investranLinked, calculationMethod) {
        this.saveTiers(calculationMethod);
        if (investranLinked == true) {
            this.saveTranscationMappings();
        }
        if (investranLinked == true) {
            this.saveSyncedTerms();
        } else {
            this.uploadCustomInvestorTerms(calculationMethod);
        }
        browser.waitUntil(() => {
            return this.submitForApproval.isVisible();
        }, 30000, "Waterfall Details page did not load.");
        this.submitForApproval.click();
        return this;
    }

    manageDBDWaterfallCreation(investranLinked, calculationMethod) {
        this.saveDBDTiers(calculationMethod);
        if (investranLinked == true) {
            this.saveTranscationMappings();
        }
        if (investranLinked == true) {
            this.saveSyncedTerms();
        } else {
            this.uploadCustomDbyDInvestorTerms(calculationMethod);
        }
        browser.waitUntil(() => {
            return this.submitForApproval.isVisible();
        }, 30000, "Waterfall Details page did not load.");
        this.submitForApproval.click();
        return this;
    }

    validateCompoundingCalculationAndBasis(calcType) {
        if (calcType == 'Realized Return of Capital (American / Deal-by-Deal)') {
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

            this.calcMethodDropdownDbyD.waitForVisible();
            this.wait().calcMethodDropdownDbyD.click();

            this.dbdCalcMethodCustom.waitForVisible();
            this.dbdCalcMethodCustom.click();
            this.dbdCompoundingCalculation.isEnabled().should.be.false;
            this.dbdCompoundingCalculation.getValue().should.equal('Continuous');
            this.dbdCompoundingBasis.isEnabled().should.be.false;
            this.dbdCompoundingBasis.getValue().should.equal('Anniversary Date');
        } else {
            this.calcMethodDropdown.waitForVisible();
            this.calcMethodDropdown.click();
            this.calcMethodCustom.waitForVisible();
            this.calcMethodCustom.click();
            this.compoundingCalculation.isEnabled().should.be.false;
            this.compoundingCalculation.getValue().should.equal('Continuous');
            this.compoundingBasis.isEnabled().should.be.false;
            this.compoundingBasis.getValue().should.equal('Anniversary Date');
        }
    }

    selectRealizedReturnCapitalWaterfallForCompounding() {
        this.waterfallMenu.click();
        this.addWaterfall.click();
        const waterfallName = 'TestBot-' + util.generateRandomString(7);
        this.waterfallName.setValue(waterfallName);
        this.saveButton.isEnabled().should.be.false;
        let calculationType = this.dbdCalcType.getText();
        this.realizedReturnOfCapitalWaterallType.click();
        browser.execute(function () {
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
        });
        this.selectCurrency.waitForVisible();
        this.wait().selectCurrency.click();
        this.selectRandomCurrency();
        this.saveButton.waitForEnabled();
        this.saveButton.isEnabled().should.be.true;
        this.addComment();
        this.clickSave();
        return calculationType;
    }

    validateCalculationMethod(method) {
        this.calculationResultsMethod.should.contain(method);
    }

    toggleTermsWithTab() {
        this.termsPreferredReturn.waitForVisible();
        let initialValue = this.termsPreferredReturn.getText();
        this.termsPreferredReturn.click();
        this.termsPreferredReturn.click();
        browser.keys('\uE004');
        browser.keys('\uE01F');
        browser.keys('\uE007');
        this.wait().termsPreferredAllocation.getText().should.equal('5 %');
    }
}

export default new HomePage();