sap.ui.define(function () {
  "use strict";

  return {
    formatDate: function (sDate) {
      if (!sDate) {
        return "";
      }

      // DD/MM/YYYY --> YYYY-MM-DD
      const oDate = new Date(sDate.split("/").reverse().join("-"));
      if (isNaN(oDate)) {
        return sDate;
      }

      if (oDate.getFullYear() === 9999) {
        return "Till now";
      }

      const aMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const sMonth = aMonths[oDate.getMonth()];
      const sYear = oDate.getFullYear();

      return `${sMonth}-${sYear}`;
    },

    formatDateRange: function (sBegDate, sEndDate) {
      const sFormattedBeg = this.formatter.formatDate(sBegDate);
      const sFormattedEnd = this.formatter.formatDate(sEndDate);

      return `${sFormattedBeg} - ${sFormattedEnd}`;
    },
  };
});
