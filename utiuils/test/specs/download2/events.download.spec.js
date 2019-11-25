import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';
import AdminPage from '../../../src/pageobjects/admin.page';
import _ from 'lodash';
import results from '../../../src/models/deal.by.deal.response';

describe('Download Events Deal By Deal', () => {

    let cdDDEventName, udDDEventName;

    before(() => {
        reporter.feature('Login to Waterfall App to Download Events Deal By Deal');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should Download Events Cash Distribution & unrealized Distribution for Deal-By-Deal - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallForDealByDeal();
        cdDDEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForDealByDealDownload('31 Oct 2018');
        WaterfallDetailsPage.downloadEvents();
        let cdEventsData = utils.readXLSXFile(cdDDEventName);
        expect(_.isMatch(cdEventsData, results.cdResultDetails())).to.be.true;
        udDDEventName = WaterfallDetailsPage.comeBack().clickAddEvent().calculateUnrealizedDistibutionEventForDealByDealDownload('31 Oct 2018');
        WaterfallDetailsPage.downloadEvents();
        let udEventsData = utils.readXLSXFile(udDDEventName);
        expect(_.isMatch(udEventsData, results.udResultDetails())).to.be.true;
   });

   it('Should Download Events Cash Distribution & unrealized Distribution for Total Return - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallForTotalReturn();
        cdDDEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForTotalReturnDownload('31 Oct 2018');
        WaterfallDetailsPage.downloadEvents();
        let cdEventsData = utils.readXLSXFile(cdDDEventName);
        expect(_.isMatch(cdEventsData, results.cdResultDetailsTotalReturn())).to.be.true;
        udDDEventName = WaterfallDetailsPage.comeBack().clickAddEvent().calculateUnrealizedDistibutionEventForTotalReturnDownload('31 Oct 2018');
        WaterfallDetailsPage.downloadEvents();
        let udEventsData = utils.readXLSXFile(udDDEventName);
        expect(_.isMatch(udEventsData, results.udResultDetailsTotalReturn())).to.be.true;
});

    // it('Should Validate NAV Sheet for Events Results File - ' + utils.generateCurrentDate('LLL'), () => {
    //     reporter.feature('Pick Waterfall');
    //     HomePage.selectSeedClient();
    //     WaterfallDetailsPage.selectWaterfallForDealByDealForNavDateRange();
    //     cdDDEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForDealByDeal('21 Feb 2017');
    //     const fileName = cdDDEventName + '-21 Feb 2017.xlsx';
    //     WaterfallDetailsPage.downloadEventsResult();
    //     let cdEventsData = utils.readNavXLSXFile(fileName);
    //     console.log(cdEventsData);
    //     // expect(_.isMatch(cdEventsData, results.navTransactionDateRangeEventsResult())).to.be.true;
    //     // WaterfallDetailsPage.comeBack().searchAndDeleteEvent(cdDDEventName);
    // });

   
    it('Should Download Events Cash & Unrealized Distribution & validate for Investor Type and Prior Carried Values - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallForDealByDeal();
        cdDDEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForDealByDeal('31 Oct 2018');
        WaterfallDetailsPage.downloadEvents();
        let cdEventsData = utils.readXLSXFileForEventResult(cdDDEventName);
        expect(_.isMatch(cdEventsData, results.cdResultDetailsForInvesorTypeandPriorCarriedValues())).to.be.true;
        udDDEventName = WaterfallDetailsPage.comeBack().clickAddEvent().calculateUnrealizedDistibutionEventForDealByDeal('31 Oct 2018');
        WaterfallDetailsPage.downloadEvents();
        let udEventsData = utils.readXLSXFileForEventResult(udDDEventName);
        expect(_.isMatch(udEventsData, results.udResultDetailsForInvesorTypeandPriorCarriedValues())).to.be.true;
    });

});
