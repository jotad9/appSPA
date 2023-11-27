import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';



//configuracion de rutas
export const routes: Routes = [
  {
    path:'by-capital',
    component: ByCapitalPageComponent
  }, {
    path:'by-country',
    component: ByCountryPageComponent
  }, {
    path:'region',
    component:ByRegionPageComponent
  }, {
    path: 'by/:id',
    component: CountryPageComponent
  }
];
