sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("test.app.controller.HelloPanel", {
		onShowHello: function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// show message
			MessageToast.show(sMsg);
		},

		onOpenDialog: function () {
			this.getOwnerComponent().openHelloDialog();
		},

		onCloseDialog: function () {
			this.byId("helloDialog").close();
		}

	});
});