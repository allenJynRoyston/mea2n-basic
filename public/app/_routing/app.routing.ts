import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from '../app/app.component';
import { HomeComponent } from '../home/home';
import { AboutHomeComponent } from '../about/about';
import { AboutOneComponent } from '../about/about';
import { AboutTwoComponent } from '../about/about';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutHomeComponent
  },
  {
    path: 'about/1',
    component: AboutOneComponent
  },
  {
    path: 'about/2',
    component: AboutTwoComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
