import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import { AppConfig } from './app.config';
import {BehaviorSubject, Observable, pipe, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { UserStoreService } from './user-store.service'
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_API_URL = AppConfig.AUTH_API_URL;

  loggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);
  isAdmin: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: Http, private router: Router, private userStoreService: UserStoreService) { }

  login(user): Observable<any> {
    let params = new URLSearchParams();
    params.set("username", user.username);
    params.set("password", user.password);
    return this.http.post(this.AUTH_API_URL + "/api/login", params)
      .pipe(map((res) => {
        this.loggedIn.next(res.json().success);
        if (user.username == 'admin') {
          this.isAdmin.next(true)
        } else {
          this.isAdmin.next(false)
        }
        if (this.loggedIn) {
          localStorage.setItem("user", user.username)
          this.router.navigate(['/home']);
        }
        return res;
      }));
  }


  // checklogin(): Observable<any> {
  //   if (localStorage.getItem("user") == 'admin') {
  //     this.isAdmin.next(true)
  //   } else {
  //     this.isAdmin.next(false)
  //   }
  //   this.loggedIn.next(localStorage.getItem("user") !== null);
  //   this.router.navigate(['/home']);
  //   const res = {}
  //   res['success'] = localStorage.getItem("user") !== null
  //   return res;
  // }

  logout(): Observable<any> {
    localStorage.removeItem("user")
    return this.http.post(this.AUTH_API_URL + "/api/logout", {})
      .pipe(map(res => {
        res.json();
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
        return res;
      }));
  }

  register(user): Observable<any> {
    return this.http.post(this.AUTH_API_URL + "/api/addUser", user)
      .pipe(map(res => {
        if (res.json().success) {
          this.router.navigate(['/login']);
          // this.userStoreService.setUser(user)
          return res.json()
        }
      }));
  }
}
