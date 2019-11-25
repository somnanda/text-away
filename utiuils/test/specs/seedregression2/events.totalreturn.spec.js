import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';

describe('Calculate Events Total Return', () => {

    let cdTREventName, udTREventName;

    before(() => {
        reporter.feature('Login to Waterfall App to Calculate Events Total Return');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should Calculate Events Cash Distribution & unrealized Distribution for Total Return - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallForTotalReturn();
        cdTREventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForTotalReturn('31 Aug 2018');
        udTREventName = WaterfallDetailsPage.comeBack().clickAddEvent().calculateUnrealizedDistibutionEventForTotalReturn('31 Aug 2018');
        reporter.feature('Search And Delete Event');
        WaterfallDetailsPage.comeBack().searchAndDeleteEvent(cdTREventName);
        WaterfallDetailsPage.wait().searchAndDeleteUDEvent(udTREventName);
        utils.checkBrowserLogs();
    });

    it('Multiplier - Should Calculate Events Cash Distribution & unrealized Distribution for Total Return - ' + utils.generateCurrentDate('LLL'), () => { 
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfall('Automation-Multiplier');
        cdTREventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForTotalReturnMultiplier('31 Dec 2018');
        udTREventName = WaterfallDetailsPage.comeBack().clickAddEvent().calculateUnrealizedDistibutionEventForTotalReturnMultiplier('31 Dec 2018');
        utils.checkBrowserLogs();
    });

    it('Simple Interest - Should Calculate Events Cash Distribution & unrealized Distribution for Total Return - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfall('Automation-Simple Interest');
        cdTREventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForTotalReturnSimpleInterest('31 Dec 2018');
        udTREventName = WaterfallDetailsPage.comeBack().clickAddEvent().calculateUnrealizedDistibutionEventForTotalReturnSimpleInterest('31 Dec 2018');
        utils.checkBrowserLogs();
    });

});
