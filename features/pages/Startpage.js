var  Startpage=function () {
    this.get=function () {
        browser.ignoreSynchronization=true;
        browser.get('http://coenraets.org/angular-cellar/#/wines');
    };

    this.clickOnNewButton=function () {
        waitForElement(by.buttonText("New Wine")).click();
    }

    function waitForElement(locator) {
        var EC = protractor.ExpectedConditions;
        var headerVisible = EC.presenceOf(element(locator));
        browser.wait(headerVisible, 5000);
        return element(locator);
    }

};
module.exports=Startpage;