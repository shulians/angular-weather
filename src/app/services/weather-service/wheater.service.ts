import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

let headers = new HttpHeaders()
.set('Content-Type', 'application/json; charset=utf-8');

@Injectable({
    providedIn: 'root'
  })

export class WheaterService {
  
    constructor(private http: HttpClient) {}

    getData(lat: string, lng: string ): Observable<any> {
      const url = 'http://localhost:8085/apibff/weather';
console.log("hola mundo");
      return this.http.post<any>(url, { coordinates: {latitude: lat, longitude: lng}  });
    }
}