import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
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
    console.log(userName)
    return this.http.get(this.API_URL + `/api/getOrder/${userName}`)
      .pipe(map((res) => {
        return res.json()
      }))
  }
}
