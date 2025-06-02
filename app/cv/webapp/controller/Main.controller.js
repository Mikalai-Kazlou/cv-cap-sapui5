sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel"], function (BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("com.exercise.cvsapui5.controller.Main", {
    onInit: function () {
      const oViewModel = new JSONModel();
      this.setModel(oViewModel, "strings");
    },

    onWorkExperienceListUpdateFinished: function (oEvent) {
      const oList = oEvent.getSource();
      const aItems = oList.getItems();
      const oData = [];

      aItems.forEach((oItem) => {
        const oItemData = oItem.getBindingContext("mockdata").getObject();

        oData.push({
          sTechnologies: this._convertListToSortedString(oItemData.technologies),
          sProjectRoles: this._convertListToSortedString(oItemData.projectRoles),
        });

        oItem.bindElement({
          path: `/${oData.length - 1}`,
          model: "strings",
        });
      });

      this.getModel("strings").setData(oData);
    },

    _convertListToSortedString: function (aList) {
      aList.sort((a, b) => a.order - b.order);
      const aTitles = aList.map((oList) => oList.child.title);
      return aTitles.join(", ");
    },
  });
});
