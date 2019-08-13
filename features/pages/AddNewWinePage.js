var protractor = require("protractor");
var AddNewWinePage=function () {
    this.get=function () {
        browser.get('http://coenraets.org/angular-cellar/#/wines/add');
        browser.waitForAngular();
        // var EC = protractor.ExpectedConditions;
        // var headerVisible = EC.presenceOf(element(by.id('header')));
        // browser.wait(headerVisible, 5000);
        waitForElement(by.id('header'));
    }
    // this.getConfrimMessage=function () {
    //     return 'open';
    // };

    this.setName=function (value) {
        waitForElement(by.name('wine.name')).sendKeys(value);
    };
    this.setGrapes=function (value) {
        waitForElement(by.name('wine.grapes')).sendKeys(value);
    };
    this.setCountry=function (value) {
        waitForElement(by.name('wine.country')).sendKeys(value);
    };
    this.setRegion=function (value) {
        waitForElement(by.name('wine.region')).sendKeys(value);
    };
    this.setYear=function (value) {
        waitForElement(by.name('wine.year')).sendKeys(value);
    };
    this.Save=function () {
        waitForElement(by.buttonText('Save')).click();
    };
    this.getResult=function () {
        return waitForElement(by.css('#content h1')).getText();

    };

    function waitForElement(locator) {
        var EC = protractor.ExpectedConditions;
        var headerVisible = EC.presenceOf(element(locator));
        browser.wait(headerVisible, 5000);
        return element(locator);
    }
};
module.exports=AddNewWinePage;