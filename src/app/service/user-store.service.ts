import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, pipe } from 'rxjs'
import { AppConfig } from './app.config';
import {Http, URLSearchParams} from '@angular/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private API_URL = AppConfig.API_URL;
  constructor(private http: Http) { }
  private userProfile$ = new Subject<Object>();

  fetchUserProfile(user) {

    localStorage.setItem("user", user.username)
    return this.http.get(this.API_URL + `/api/getUser/${user.username}`)
      .subscribe(data => this.userProfile$.next(data))
  }

  getUserProfile(): Observable<Object> {
    return this.userProfile$.asObservable()
  }

  setUser(user): Observable<any> {

    return this.http.post(this.API_URL + `/api/addUser/${user.username}`, {userName: user.username, orders: []})
  }
}
