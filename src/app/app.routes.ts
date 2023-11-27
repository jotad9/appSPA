import { Routes } from '@angular/router';
import { AboutPageComponent } from './components/aboutPage/aboutPage.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';


//configuracion de rutas
export const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  }, {
    path:'about',
    component: AboutPageComponent
  }, {
    path:'contact',
    component: ContactComponent
  }, {
    path: '**',
    redirectTo: ''
  }
];
