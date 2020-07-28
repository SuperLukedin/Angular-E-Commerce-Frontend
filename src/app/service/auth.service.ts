import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import { AppConfig } from './app.config';
import {BehaviorSubject, Observable, pipe, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { UserStoreService } from './user-store.service'
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
    return this.http.post(this.AUTH_API_URL + "/login", params, {withCredentials: true})
      .pipe(map((res) => {
        this.loggedIn.next(res.json().success);
        if (user.username == 'admin') {
          console.log(user.username)
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

  checklogin(): Observable<any> {
    return this.http.get(this.AUTH_API_URL + "/checklogin", {withCredentials: true})
      .pipe(map((res) => {
        this.loggedIn.next(res.json().success);
        this.router.navigate(['/home']);
        return res;
      }));
  }

  logout(): Observable<any> {
    localStorage.removeItem("user")
    return this.http.post(this.AUTH_API_URL + "/logout", {}, {withCredentials: true})
      .pipe(map(res => {
        res.json();
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
        return res;
      }));
  }

  register(user): Observable<any> {
    return this.http.post(this.AUTH_API_URL + "/users", user)
      .pipe(map(res => {
        if (res.json().success) {
          this.router.navigate(['/login']);
          this.userStoreService.setUser(user)
          return res.json()
        }
      }));
  }
}
