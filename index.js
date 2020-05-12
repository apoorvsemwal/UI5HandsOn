// sap.ui.define([
// 	"sap/ui/core/mvc/XMLView"
// ], function (XMLView) {
// 	"use strict";
// 	XMLView.create({
// 		viewName: "test.app.view.App"
// 	}).then(function (oView) {
// 		oView.placeAt("content");
// 	});
// });

// Instead of calling the view directly we now use a ComponentContainer which will have the component managing our View.

sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "test.app",
		settings: {
			id: "testContainer"
		},
		async: true
	}).placeAt("content");
});