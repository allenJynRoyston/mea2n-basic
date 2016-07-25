import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from '../../components/home/home.components';
import { AboutComponent, AboutHomeComponent, AboutItemComponent } from '../../components/about/about.components';


export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', component: AboutHomeComponent },
      { path: 'item/:id', component: AboutItemComponent }
    ]
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
