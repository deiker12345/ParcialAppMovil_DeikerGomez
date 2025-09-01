import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = environment.newsApiKey;
  private apiUrl = environment.newsApiUrl;

  constructor(private http: HttpClient) { }

  getTopHeadlines(country: string = 'us', page: number = 1): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/top-headlines?country=${country}&page=${page}&pageSize=10&apiKey=${this.apiKey}`
    );
  }

}
