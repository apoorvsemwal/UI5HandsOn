sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"./controller/HelloDialog"
], function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
	"use strict";
	return UIComponent.extend("test.app.Component", {
		//metadata : {
		//   rootView: {
		//      "viewName": "test.app.view.App",
		//      "type": "XML",
		//      "async": true,
		//      "id": "app"
		//   }
		//},

		//Refer it from manifest.json
		metadata: {
			manifest: "json"
		},
		init: function () {
			// call the init function of the base UIComponent.
			UIComponent.prototype.init.apply(this, arguments);
			var oData = {
				recipient: {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set i18n model
			var i18nModel = new ResourceModel({
				bundleName: "test.app.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
			this.getRouter().initialize();
		},
		
		exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.open();
		}		
	});
});