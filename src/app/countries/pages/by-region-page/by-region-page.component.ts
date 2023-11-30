import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';
@Component({
  selector: 'by-region-page',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];

  public regions:Region[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;

  //Donde quieras inyectar el servicio, lo tienes que declarar en el constructor
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region:Region):void{
    this.selectedRegion=region;
    this.countriesService.searchRegion(region).subscribe(countries => {
      this.countries=countries;
    });
  }
}
