import { Routes } from '@angular/router';
import { AboutPageComponent } from './components/aboutPage/aboutPage.component';
import { ContactComponent } from './components/contact/contact.component';
import { CountriesComponent } from './countries/countries.component';
import { ByCapitalPageComponent } from './countries/pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './countries/pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './countries/pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './countries/pages/country-page/country-page.component';


//configuracion de rutas
export const routes: Routes = [

  {
    path:'about',
    component: AboutPageComponent
  }, {
    path:'contact',
    component: ContactComponent
  }, {
    path:'countries',
    component: CountriesComponent,
    children: [{
      path:'by-capital',
      component: ByCapitalPageComponent
      }, {
      path:'by-country',
      component: ByCountryPageComponent
      }, {
      path:'by-region',
      component:ByRegionPageComponent
      }, {
      path: 'by/:id',
      component: CountryPageComponent
      }]
  }, {
    path: '**',
    redirectTo: 'countries'
  }
];
