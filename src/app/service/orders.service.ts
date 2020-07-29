import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http } from '@angular/http';
import { AppConfig } from './app.config';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private API_URL = AppConfig.API_URL;

  constructor(private http: Http) {
  }

  getUserOrders(): Observable<any> {
    let userName = localStorage.getItem("user")

    return this.http.get(this.API_URL + `/api/getOrder/${userName}`)
      .pipe(map((res) => {
        return res.json()
      }))
  }

  deleteOrder(id): Observable<any> {
    return this.http.post(this.API_URL + '/api/deleteOrder/', {id})
      .pipe(map((res) => {
        return res.json()
      }))
  }
}
