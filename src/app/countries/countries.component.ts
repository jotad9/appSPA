import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule,
            RouterModule,
            ByCapitalPageComponent,
            ByCountryPageComponent,
            ByRegionPageComponent,
            CountryPageComponent,
            HttpClientModule
          ],
  templateUrl: './countries.component.html',
  styles: ''
})
export class CountriesComponent {

}
