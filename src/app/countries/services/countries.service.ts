import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/CacheStore';
import { Country } from '../interfaces/country';
import { Region } from '../interfaces/region.type';


@Injectable({providedIn: 'root'})
export class CountriesService {

  public cacheStore: CacheStore = {
    byCapital:   { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion:    { region: '', countries: [] },
  }
  private apiUrl: string = 'https://restcountries.com/v3.1'

  private getCountriesRequest(url: string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(url).pipe(
      catchError( () =>of([]))
    );
  }
  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ));
  }

  private loadFromLocalStorage() {
    if ( !localStorage.getItem('cacheStore') ) return;

    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }
  searchCountryByAlphaCode(code: string):Observable<Country | null>{
    const url=`${this.apiUrl}/alpha/${code}`;

    return this.httpClient.get<Country[]>(url)
                      .pipe(
                        map(countries=> countries.length>0?countries[0]:null),
                        catchError( () =>of(null) )
                      );
  }
  searchCapital(term: string):Observable<Country[]>{
    //Esto no es una soliciutd http, es un observable
    //falta un subscribe
    const url=`${this.apiUrl}/capital/${term}`;
    //El of en rxjs sirve para costruir un observable
    //basado en un valor que le pasamos
    return this.getCountriesRequest(url)
        .pipe(
          tap( countries => this.cacheStore.byCapital = { term, countries }),
          tap( () => this.saveToLocalStorage() ),
        );
  }

  searchRegion(region: Region):Observable<Country[]>{
    const url=`${this.apiUrl}/region/${region}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byRegion = { region, countries }),
        tap( () => this.saveToLocalStorage() ),
      );
  }

  searchCountry(term: string):Observable<Country[]>{
    const url=`${this.apiUrl}/name/${term}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCountries = { term, countries }),
        tap( () => this.saveToLocalStorage() ),
      );
  }

}
