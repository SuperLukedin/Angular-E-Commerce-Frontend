import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              ) { }

  ngOnInit() {
  }

  register(user) {
    this.authService.register(user)
      .subscribe((res) => {
        // if (res.success) {
        // }
      });
  }
}
