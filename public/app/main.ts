import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app/app.components';
import { APP_ROUTER_PROVIDERS } from './components/routes/app.routes';
import {enableProdMode} from '@angular/core';

declare var _root:any;

if(_root.globals.enviroment != "development"){
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
]);
