var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var WineSteps=function () {

    var StartPage=require('C:\\Users\\siloski\\IdeaProjects\\ProtractorHomework1\\features\\pages\\Startpage.js');
    var AddNewWinePage=require('C:\\Users\\siloski\\IdeaProjects\\ProtractorHomework1\\features\\pages\\AddNewWinePage.js');
    this.World=function MyWorld() {
        this.page=new StartPage();
        this.addpage=new AddNewWinePage();
    }

    this.Given('The angular cellar page is open',function (callback) {
        this.page.get();
        callback();
    });
    this.When('I click button New Wine',function (callback) {
        this.page.clickOnNewButton();
        callback();
    });

    this.When('I enter the name $name',function (name,callback) {
        this.addpage.setName(name);
        callback();
    });
    this.When('I enter the grapes $grapes',function (grapes,callback) {
        this.addpage.setGrapes(grapes);
        callback();
    });
    this.When('I enter the country $country',function (country,callback) {
        this.addpage.setCountry(country);
        callback();
    });
    this.When('I enter the region $region',function (region,callback) {
        this.addpage.setRegion(region);
        callback();
    });
    this.When('I enter the year $year',function (year,callback) {
        this.addpage.setYear(year);
        callback();
    });
    this.When('I click on Save button',function (callback) {
        this.addpage.Save();
        callback();

    });
    this.Then('The result should be $result',function (result,callback) {
        expect(this.addpage.getResult()).to.eventually.equal(result).and.notify(callback);
    });





};
module.exports=WineSteps;