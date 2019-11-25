import LoginPage from '../../../src/pageobjects/login.page';
import reporter from 'wdio-allure-reporter';
import HomePage from '../../../src/pageobjects/home.page';
import WaterfallDetailsPage from '../../../src/pageobjects/waterfall.details.page';
import utils from '../../../src/utils/utilities';
import _ from 'lodash';
import results from '../../../src/models/aggregate.expense.response';

describe('Download Events Deal By Deal', () => {

    let cdDDEventName, udDDEventName, cdTREventName, udTREventName ;

    before(() => {
        reporter.feature('Login to Waterfall App to Download Events Deal By Deal');
        LoginPage.open();
        LoginPage.currentPageTitle().should.equal('Citco Login');
        LoginPage.authenticate().currentPageTitle().should.equal('Citco Waterfall');
    });

    it('Should validate Aggregate Expense Sheet for Deal By Deal - ' + utils.generateCurrentDate('LLL'), () => {
        reporter.feature('Pick Client');
        HomePage.selectSeedClient();
        reporter.feature('Pick Waterfall');
        WaterfallDetailsPage.searchForWaterfall('Automation-DBD-AggrgateExpense');
        cdDDEventName = WaterfallDetailsPage.goToEventsTab().clickAddEvent().calculateCashDistibutionEventForDealByDealForAggregateExpense('31 Oct 2018');
        WaterfallDetailsPage.downloadEvents();
        let cdEventsData = utils.readXLSXFileForAggregateExpense(cdDDEventName);
        expect(_.isMatch(cdEventsData, results.dealByDealAggregateExpense())).to.be.true;
    });

});
