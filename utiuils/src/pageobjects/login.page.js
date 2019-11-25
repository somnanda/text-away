import BasePage from './base.page';

class LoginPage extends BasePage {

    get userName()                  { return $("input[id='userName']"); }
    get userPassword()              { return $("input[id='password']"); }
    get loginButton()               { return $("button[id='smLogin']"); }
    get brandImage()                { return $(".navbar-brand"); }
    get logoutUserMenu()            { return $("//button[@id='menu-anchor']"); }
    get logoutButton()              { return $("(//button[@type='button']/span)[5]"); }
    get logoutPopup()               { return $('//div[@id="modal-body"]'); }
    get okLogoutButton()            { return $("//button[@id='modal-confirm-button']"); }
    get cancelLogoutButton()        { return $("//button[@id='modal-close-button']"); }
    get logoutPage()                { return $("//div[@class='wrapper']"); }
    get accountSelector()           { return $('//*[@id="client-selector"]'); }
    get acceptSSLCert()             { return $('#overridelink'); }

    get strings() {
        return {
            expectedLogoutMessage: 'Are you sure you want to logout from the current session?',
            expectedLogoutPageMessage: 'You\'ve successfully logged off. Thank you for choosing Citco.\nFor your security, we recommend you close your browser.'
        };
    }

    open() {
        browser.setViewportSize({
            width: 1366,
            height: 900
        });
        if (process.argv[process.argv.length-1] === 'qad') {
            super.open(config.url.qad);
            process.env.API_URL = config.url.qad;
            console.log('Running Tests in QAD');
            if (browser.options.desiredCapabilities.browserName == 'internet explorer' && this.acceptSSLCert.isExisting()) {
                this.acceptSSLCert.click();
            }
            return 'qad';
        } else if (process.argv[process.argv.length-1] === 'qat') {
            super.open(config.url.qat);
            process.env.API_URL = config.url.qat;
            console.log('Running Tests in QAT');
            if (browser.options.desiredCapabilities.browserName == 'internet explorer' && this.acceptSSLCert.isExisting()) {
                this.acceptSSLCert.click();
            }
            return 'qat';
        } else if (process.argv[process.argv.length-1] === 'uat') {
            super.open(config.url.uat);
            process.env.API_URL = config.url.uat;
            console.log('Running Tests in UAT');
            if (browser.options.desiredCapabilities.browserName == 'internet explorer' && this.acceptSSLCert.isExisting()) {
                this.acceptSSLCert.click();
            }
            return 'uat';
        } else if (process.argv[process.argv.length-1] === 'dev2') {
            super.open(config.url.dev2);
            process.env.API_URL = config.url.dev2;
            console.log('Running Tests in DEV2');
            if (browser.options.desiredCapabilities.browserName == 'internet explorer' && this.acceptSSLCert.isExisting()) {
                this.acceptSSLCert.click();
            }
            return 'dev2';
        } else if (process.argv[process.argv.length-1] === 'dev3') {
            super.open(config.url.dev3);
            process.env.API_URL = config.url.dev3;
            console.log('Running Tests in DEV3');
            if (browser.options.desiredCapabilities.browserName == 'internet explorer' && this.acceptSSLCert.isExisting()) {
                this.acceptSSLCert.click();
            }
            return 'dev3';
        }  else if (process.argv[process.argv.length-1] === 'dev4') {
            super.open(config.url.dev4);
            process.env.API_URL = config.url.dev4;
            console.log('Running Tests in DEV4');
            if (browser.options.desiredCapabilities.browserName == 'internet explorer' && this.acceptSSLCert.isExisting()) {
                this.acceptSSLCert.click();
            }
            return 'dev4';
        }  else if (process.argv[process.argv.length-1] === 'dev5') {
            super.open(config.url.dev5);
            process.env.API_URL = config.url.dev5;
            console.log('Running Tests in DEV5');
            if (browser.options.desiredCapabilities.browserName == 'internet explorer' && this.acceptSSLCert.isExisting()) {
                this.acceptSSLCert.click();
            }
            return 'dev5';
        }  else if (process.argv[process.argv.length-1] === 'dev6') {
            super.open(config.url.dev6);
            process.env.API_URL = config.url.dev6;
            console.log('Running Tests in DEV6');
            if (browser.options.desiredCapabilities.browserName == 'internet explorer' && this.acceptSSLCert.isExisting()) {
                this.acceptSSLCert.click();
            }
            return 'dev6';
        } else if (process.argv[process.argv.length-1] === 'dev7') {
            super.open(config.url.dev7);
            process.env.API_URL = config.url.dev7;
            console.log('Running Tests in DEV7');
            if (browser.options.desiredCapabilities.browserName == 'internet explorer' && this.acceptSSLCert.isExisting()) {
                this.acceptSSLCert.click();
            }
            return 'dev7';
        } else if (process.argv[process.argv.length-1] === 'prd') {
            super.open(config.url.prd);
            process.env.API_URL = config.url.prd;
            console.log('Running Tests in PROD');
            if (browser.options.desiredCapabilities.browserName == 'internet explorer' && this.acceptSSLCert.isExisting()) {
                this.acceptSSLCert.click();
            }
            return 'prd';
        } else {
            super.open(config.url.dev);
            process.env.API_URL = config.url.dev;
            console.log('Running Tests in DEV');
            if (browser.options.desiredCapabilities.browserName == 'internet explorer' && this.acceptSSLCert.isExisting()) {
                this.acceptSSLCert.click();
            }
            return 'dev';
        }
    }

    currentPageTitle() {
        return browser.getTitle();
    }

    submit() {
        this.loginButton.click();
    }

    clickBrandHomeButton() {
        this.brandImage.click();
        this.currentPageTitle().should.equal('Citco Waterfall');
    }

    authenticate() {
        this.loginButton.waitForVisible(config.timeouts.long_timeout);
        this.userName.setValue(config.username);
        this.userPassword.setValue(config.password);
        this.submit();
        this.accountSelector.waitForVisible(config.timeouts.long_timeout);
        return this;
    }

    authenticateFirstUser() {
        this.userName.setValue(config.username);
        this.userPassword.setValue(config.password);
        this.submit();
        this.accountSelector.waitForVisible(config.timeouts.long_timeout);
        return this;
    }

    authenticateSecondUser() {
        this.userName.setValue(config.usernameSecond);
        this.userPassword.setValue(config.passwordSecond);
        this.submit();
        this.accountSelector.waitForVisible(config.timeouts.long_timeout);
        return this;
    }

    authenticateThirdUser() {
        this.userName.setValue(config.usernameThird);
        this.userPassword.setValue(config.passwordThird);
        this.submit();
        this.accountSelector.waitForVisible(config.timeouts.long_timeout);
        return this;
    }

    logout() {
        this.wait().logoutButton.click();
        this.okLogoutButton.waitForVisible(15000);
        this.logoutPopup.getText().should.equal(this.strings.expectedLogoutMessage);
        this.okLogoutButton.click();
        this.logoutPage.waitForVisible(15000);
        this.logoutPage.getText().should.equal(this.strings.expectedLogoutPageMessage);
    }
}

export default new LoginPage();
