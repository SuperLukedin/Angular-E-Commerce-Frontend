import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';
import { UserStoreService } from '../../../service/user-store.service'
import { CartService } from '../../../service/cart.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response;

  constructor(public authService: AuthService,
              private router: Router,
              public userStoreService: UserStoreService,
              public cartService: CartService
              ) { }

  ngOnInit() {
    this.authService.checklogin()
      .subscribe((res) => {
        this.response = res;
        console.log(res);
        if (res.success) {
          this.router.navigate(['/home']);
        }
      });
  }

  login(user) {
    this.authService.login(user)
      .subscribe((res) => {
        this.response = res;
        if (res.success) {

        }
      });
  }
}
