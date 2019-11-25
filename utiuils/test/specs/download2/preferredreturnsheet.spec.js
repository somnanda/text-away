import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';
import _ from 'lodash';
import results from '../../../src/models/preferred.return.response';

describe('Download Events Total Return', () => {

    let cdDDEventName, cdDDEventName2;

    before(() => {
        reporter.feature('Login to Waterfall App to Download Events Total Return');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    
   it('Should validate Preferred Return Sheet for Total Return IRR and Multiplier - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.selectSeedWaterfallForTotalReturn();
        cdDDEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForTotalReturnDownload('31 Oct 2018');
        WaterfallDetailsPage.downloadEvents();
        let cdEventsData = utils.readXLSXFileForPreferredReturnSheet(cdDDEventName);
        expect(_.isMatch(cdEventsData, results.totalReturn())).to.be.true;

        WaterfallDetailsPage.selectSeedWaterfall('Automation-Multiplier');
        cdDDEventName2 = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForTotalReturnDownload('31 Oct 2018');
        WaterfallDetailsPage.downloadEvents();
        let cdEventsData2 = utils.readXLSXFileForPreferredReturnSheet(cdDDEventName2);
        expect(_.isMatch(cdEventsData2, results.totalReturnMultiplier())).to.be.true;
    });

});