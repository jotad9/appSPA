import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, RouterModule, ByCapitalPageComponent,],
  templateUrl: './countries.component.html',
  styles: ''
})
export class CountriesComponent {

}
