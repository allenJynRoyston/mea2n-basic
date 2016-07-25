import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>MEAN stack works!</h1>
    <a [routerLink]="['/']">Home</a>
	  <a [routerLink]="['/about']">About</a>
    <div class="outer-outlet">
      <router-outlet></router-outlet>
    </div>
  `,
  // add our router directives we will be using
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
