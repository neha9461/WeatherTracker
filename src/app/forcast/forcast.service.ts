import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ForcastService {
  heroesUrl = 'https://api.openweathermap.org/data/2.5/forecast'; // URL to web api

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    city = city.trim();
    let param = {
      q: city,
      appid: '13f7eb9eda57be53bb7d28b6556cc3b3',
      units: 'metric'
    };
    return this.http.get(this.heroesUrl, {
      params: param
    });
  }
}
