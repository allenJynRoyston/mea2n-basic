"use strict";
var router_1 = require('@angular/router');
var home_1 = require('../home/home');
var about_1 = require('../about/about');
var about_2 = require('../about/about');
var about_3 = require('../about/about');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_1.HomeComponent
    },
    {
        path: 'about',
        component: about_1.AboutHomeComponent
    },
    {
        path: 'about/1',
        component: about_2.AboutOneComponent
    },
    {
        path: 'about/2',
        component: about_3.AboutTwoComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map