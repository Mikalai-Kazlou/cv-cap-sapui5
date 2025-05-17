/*global QUnit, opaTest*/

sap.ui.define(["sap/ui/test/opaQunit", "./pages/Main"], function () {
  "use strict";

  QUnit.module("Navigation");

  opaTest("Should open the Cart page", function (Given, When, Then) {
    // Arrangements
    Given.iStartMyUIComponent({
      componentConfig: {
        name: "com.exercise.cvsapui5",
      },
    });

    //Actions
    When.onTheMainPage.iPressTheCartButton();

    // Assertions
    Then.onTheMainPage.iShouldSeeTheCartPage();

    // Cleanup
    Then.iTeardownMyApp();
  });
});
