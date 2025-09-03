import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Country } from '../model/user.interface'; 

interface CountryApiResponse {
  error: boolean;
  msg: string;
  data: {
    name: string;
    unicodeFlag: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://countriesnow.space/api/v0.1/countries/flag/unicode';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<CountryApiResponse>(this.apiUrl).pipe(
      map(response => 
        response.data.map(apiCountry => ({
          id: apiCountry.name,
          name: apiCountry.name
        }))
      )
    );
  }
}
