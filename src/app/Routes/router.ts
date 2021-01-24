import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {FormComponent} from '../components/form/form.component';
import {Page404Component} from '../wildcards/page404/page404.component';
import {ProfileComponent} from '../components/profile/profile.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent},
  {path: 'prof', component: ProfileComponent},
  {path: '**', pathMatch: 'full', component: Page404Component }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
