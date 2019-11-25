import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';
import _ from 'lodash';
import results from '../../../src/models/calculationdetails.response';

describe('Download Events Deal By Deal', () => {

    let cdDDEventName, udDDEventName, cdTREventName, udTREventName ;

    before(() => {
        reporter.feature('Login to Waterfall App to Download Events Deal By Deal');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should validate Calculation Details Sheet for Deal By Deal - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallForDealByDeal();
        cdDDEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForDealByDeal('31 Oct 2018');
        WaterfallDetailsPage.downloadEvents();
        let cdEventsData = utils.readXLSXFileForCalculationDetails(cdDDEventName);
        expect(_.isMatch(cdEventsData, results.cdCalculationDetails())).to.be.true;
        udDDEventName = WaterfallDetailsPage.comeBack().clickAddEvent().calculateUnrealizedDistibutionEventForDealByDeal('31 Oct 2018');
        WaterfallDetailsPage.downloadEvents();
        let udEventsData = utils.readXLSXFileForCalculationDetails(udDDEventName);
        expect(_.isMatch(udEventsData, results.udCalculationDetails())).to.be.true;
    });

    it('Should validate Calculation Details Sheet for Total Return - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallForTotalReturn();
        cdTREventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForTotalReturnDownload('31 Aug 2018');
        WaterfallDetailsPage.downloadEvents();
        let cdEventsData = utils.readXLSXFileForCalculationDetailsTotalReturn(cdTREventName);
        expect(_.isMatch(cdEventsData, results.cdCalculationDetailsTotalReturn())).to.be.true;
        udTREventName = WaterfallDetailsPage.comeBack().clickAddEvent().calculateUnrealizedDistibutionEventForTotalReturn('31 Aug 2018');
        WaterfallDetailsPage.downloadEvents();
        let udEventsData = utils.readXLSXFileForCalculationDetailsTotalReturn(udTREventName);
        expect(_.isMatch(udEventsData, results.udCalculationDetailsTotalReturn())).to.be.true;
    });

});
