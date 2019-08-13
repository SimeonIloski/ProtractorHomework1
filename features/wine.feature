Feature:Add New Whine
  As a user of the wine app
  i want to insert wine info
  and add a new wine

Scenario: Add new wine
  Given The angular cellar page is open
  When  I click button New Wine
  When  I enter the name RedWine
  When  I enter the grapes RedGrapes
  When  I enter the country France
  When  I enter the region South
  When  I enter the year 1995
  When   I click on Save button
  Then  The result should be Welcome to Angular Cellar!
