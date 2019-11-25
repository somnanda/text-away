export default class BasePage {

    constructor() {

    }

    open(path) {
        browser.url(path);
    }

    waitForPageLoad() {
        console.log("Waiting for page load ...");
        browser.waitForExist(config.timeouts.default_timeout);
    }

    wait() {
        browser.pause(1000);
        return this;
    }

    longWait() {
        browser.pause(5000);
        return this;
    }

    longerWait() {
        browser.pause(15000);
        return this;
    }

    customWait(limit) {
        browser.pause(limit);
        return this;
    }

    waitForTransacationSync() {
        browser.pause(35000);
        return this;
    }

    refresh() {
        browser.refresh();
    }
}