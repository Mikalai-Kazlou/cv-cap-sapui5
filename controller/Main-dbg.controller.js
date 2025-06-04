sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/util/File",
    "sap/m/MessageToast",
    "../model/formatter",
  ],
  function (BaseController, JSONModel, File, MessageToast, Formatter) {
    "use strict";

    return BaseController.extend("com.exercise.cvsapui5.controller.Main", {
      formatter: Formatter,

      onInit: function () {
        const oViewModel = new JSONModel();
        this.setModel(oViewModel, "strings");
        this.oResourceBundle = this.getResourceBundle();
      },

      onWorkExperienceListUpdateFinished: function (oEvent) {
        const aItems = oEvent.getSource().getItems();
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

      onDownloadPress: function () {
        const oModel = this.getModel("constants");
        const sFileUrl = oModel.getProperty("/cvFileUrl");
        const sFileDisplayName = oModel.getProperty("/cvFileDisplayName");
        const sMimeType = "application/pdf";

        $.ajax({
          url: sFileUrl,
          method: "GET",
          xhrFields: {
            responseType: "arraybuffer",
          },
          success: function (data) {
            const oBlob = new Blob([data], { type: sMimeType });
            File.save(oBlob, sFileDisplayName, "pdf", sMimeType);
          },
          error: function (oError) {
            MessageToast.show(this.oResourceBundle.getText("downloadError"));
            console.error("Download error:", oError);
          },
        });
      },

      onImageIconPress: function (oEvent) {
        const link = oEvent.getSource().getAlt();
        sap.m.URLHelper.redirect(link, true);
      },

      _convertListToSortedString: function (aList) {
        aList.sort((a, b) => a.order - b.order);
        const aTitles = aList.map((oList) => oList.child.title);
        return aTitles.join(", ");
      },
    });
  }
);
