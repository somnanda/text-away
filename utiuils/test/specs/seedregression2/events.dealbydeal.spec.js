import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';

describe('Calculate Events Deal By Deal', () => {

    let cdDDEventName, udDDEventName;

    before(() => {
        reporter.feature('Login to Waterfall App to Calculate Events Deal By Deal');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should Calculate Events Cash Distribution & unrealized Distribution for Deal-By-Deal - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallForDealByDeal();
        cdDDEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForDealByDeal('31 Oct 2018');
        udDDEventName = WaterfallDetailsPage.comeBack().clickAddEvent().calculateUnrealizedDistibutionEventForDealByDeal('31 Oct 2018');
        utils.eventsCalculationDetails(cdDDEventName, udDDEventName, 'Automation-DealByDeal')
        utils.checkBrowserLogs();
    });


    //TO DO
    
    // it('Multiplier - Should Calculate Events Cash Distribution & unrealized Distribution for Deal-By-Deal - ' + utils.generateCurrentDate('LLL'), () => {
    //     reporter.feature('Pick Waterfall');
    //     WaterfallDetailsPage.selectSeedWaterfall('Automation-Multiplier-DByD');
    //     cdDDEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForDealByDealMultiplier('24 Apr 2019');
    //     udDDEventName = WaterfallDetailsPage.comeBack().clickAddEvent().calculateUnrealizedDistibutionEventForDealByDealMultiplier('24 Apr 2019');
    //     utils.checkBrowserLogs();
    // });

    it('Simple Interest - Should Calculate Events Cash Distribution & unrealized Distribution for Deal-By-Deal - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfall('Automation-Simple Interest-DbyD');
        cdDDEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForDealByDealSimpleInterest('24 Apr 2019');
        udDDEventName = WaterfallDetailsPage.comeBack().clickAddEvent().calculateUnrealizedDistibutionEventForDealBySimpleInterest('24 Apr 2019');
        utils.checkBrowserLogs();
    });

});
