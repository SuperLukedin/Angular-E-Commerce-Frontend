import { Injectable } from '@angular/core';
import { AppConfig } from './app.config';
import {Http, URLSearchParams} from '@angular/http';
import {BehaviorSubject, Observable, pipe, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = AppConfig.API_URL;
  constructor(private http: Http) { }

  listProducts(): Observable<any> {
    return this.http.get(this.API_URL + "/api/listProduct")
      .pipe(map((res) => {
        return res.json()
      }))
  }
}
