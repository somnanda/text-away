import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';

describe('Calculate Events For Investran Linked Clients', () => {

    let cdInEventName, udInEventName;

    before(() => {
        reporter.feature('Login to Waterfall App to Calculate Events For Investran Linked Clients');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should Calculate Events Cash Distribution & unrealized Distribution for Investran Linked - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallWithInvestranLink();
        WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateInvestranLinkedCashDistibutionEvent('10 Sep 2018');
        WaterfallDetailsPage.comeBack().clickAddEvent().calculateInvestranLinkedUnrealizedDistibutionEvent('10 Sep 2018');
        utils.checkBrowserLogs();
    });

    //TODO
    // it('Should validate the Error Status for failing events - ' + utils.generateCurrentDate('LLL'), () => {
    //     reporter.feature('Pick Waterfall');
    //     WaterfallDetailsPage.selectSeedWaterfallWithInvestranLinkForErrorEvent();
    //     cdInEventName = WaterfallDetailsPage.goToEventsTab();
    //     WaterfallDetailsPage.validateErroEventMessage();
    //     utils.checkBrowserLogs();
    // });

});
