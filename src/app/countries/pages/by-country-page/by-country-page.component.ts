import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{
  public countries: Country[] = [];
  public initialValue: string = '';
  //Donde quieras inyectar el servicio, lo tienes que declarar en el constructor
  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }
  searchByCountry(term:string):void{
    this.countriesService.searchCountry(term).subscribe(countries => {
      this.countries=countries;
    });
  }
}
