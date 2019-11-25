import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';

describe('Calculate Events Custom Total Return', () => {

    let cdTREventName, udTREventName;

    before(() => {
        reporter.feature('Login to Waterfall App to Calculate Events Total Return');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Custom Total Return Events- ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallForCustomTotalReturn();
        cdTREventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForTotalReturn('30 Jun 2019');
        udTREventName = WaterfallDetailsPage.comeBack().clickAddEvent().calculateUnrealizedDistibutionEventForTotalReturn('30 Jun 2019');
        utils.eventsCalculationDetails(cdTREventName, udTREventName, 'Automation-Custom')
        utils.checkBrowserLogs();
    });
});
