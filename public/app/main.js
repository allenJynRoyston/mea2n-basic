"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_components_1 = require('./components/app/app.components');
var app_routes_1 = require('./components/routes/app.routes');
var core_1 = require('@angular/core');
if (_root.globals.enviroment != "development") {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_components_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS
]);
//# sourceMappingURL=main.js.map