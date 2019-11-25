import BasePage from './base.page';

class EventsPage extends BasePage {

    get eventsMenu()                                                    { return $("[class] .nav-item:nth-of-type(6) .nav-link"); }
    get breadcrumbText()                                                { return $(".breadcrumb").getText(); }
    get eventDate()                                                     { return $('//*[@id="datepicker"]'); }
    get submitButton()                                                  { return $('//*[@id="eventssubmitbutton"]'); }
    get tableData()                                                     { return $("div.rt-tbody"); }
    get firstCell()                                                     { return $("div.rt-tr-group:nth-child(1) div:nth-child(1) div:nth-child(1)"); }
    get eventsTable()                                                   { return $(".rt-tbody"); }
    get firstRow()                                                      { return $("div.rt-tr-group:nth-child(1) > div:nth-child(1)"); }
    get eventsDownloadButton()                                          { return $(".btn-group > .btn"); }
    get eventTypeSelector()                                             { return $('//*[@id="eventtype"]'); }
    get rowSelector()                                                   { return $(".select-wrap > select:nth-child(1)"); }
    get listItemIcon()                                                  { return $("//div[@id='listitemicon']"); }

    get strings() {
        return {
            expectedEventsBreadcrumbText: 'Ui\nEvents\nCreate',
            unrealizedDistribution: 'Unrealized Distribution',
            maxRows: '100 rows'
        };
    }

    goToEventsTab() {
        this.eventsMenu.click();
        this.breadcrumbText.should.equal(this.strings.expectedEventsBreadcrumbText);
        return this;
    }

    selectUnrealizedDistributionEventType() {
        this.eventTypeSelector.selectByVisibleText(this.strings.unrealizedDistribution);
        return this;
    }

    selectMaxRows() {
        this.rowSelector.selectByVisibleText(this.strings.maxRows);
        return this;
    }

    calculateEvent(date) {
        this.wait().eventDate.setValue(date);
        this.wait().submitButton.click();
        this.longerWait().eventsTable.waitForText(10000);
        this.selectMaxRows();
        const gridDetail = this.eventsTable.getText().split("\n");
        return gridDetail;
    }
}

export default new EventsPage();