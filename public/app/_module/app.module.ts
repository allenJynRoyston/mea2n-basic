import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from '../app/app.component';

import { HomeComponent } from '../home/home';
import { AboutHomeComponent } from '../about/about';
import { AboutOneComponent } from '../about/about';
import { AboutTwoComponent } from '../about/about';
import { routing }        from '../_routing/app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutHomeComponent,
    AboutOneComponent,
    AboutTwoComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
