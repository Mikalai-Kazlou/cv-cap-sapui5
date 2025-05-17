/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
  "use strict";

  sap.ui.require(
    ["com/exercise/cvsapui5/test/unit/model/formatter"],
    function () {
      QUnit.start();
    }
  );
});
