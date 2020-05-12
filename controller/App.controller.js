sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("test.app.controller.App", {
		onOpenDialog: function () {
			this.getOwnerComponent().openHelloDialog();
		}		
	});

});