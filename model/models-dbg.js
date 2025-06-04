sap.ui.define(
  [
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/BindingMode",
    "sap/ui/Device",
    "./constants",
  ],
  function (JSONModel, BindingMode, Device, constants) {
    "use strict";

    return {
      createDeviceModel: () => {
        const oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode(BindingMode.OneWay);
        return oModel;
      },

      createConstantModel: () => {
        const oModel = new JSONModel(constants);
        oModel.setDefaultBindingMode(BindingMode.OneWay);
        return oModel;
      },
    };
  }
);
