import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent  implements OnInit{

  public country?: Country;

  constructor( private activatedRoute: ActivatedRoute,
                private countriesService: CountriesService,
                private router: Router
              ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode(id)),
      )
      .subscribe(country => {
        if(!country){
          return;
        }
        return this.country = country;
      });
  }


}
