import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue: string = '';
  //Donde quieras inyectar el servicio, lo tienes que declarar en el constructor
  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }
  searchByCapital(term:string):void{
    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countries=countries;
    });
  }
}
