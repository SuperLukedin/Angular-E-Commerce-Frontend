import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './service/auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.loggedIn
      .pipe((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
        }
        return isLoggedIn;
      });
  }
}
