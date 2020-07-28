import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component'
import { HomeComponent } from './components/home/home.component'
import { CartComponent } from './components/cart/cart.component'

import {LoginComponent} from './components/auth/login/login.component';
import {AppGuard} from './app.guard';
import {LogoutComponent} from './components/auth/logout/logout.component';
import {RegisterComponent} from './components/auth/register/register.component';
import { OrdersComponent } from './components/orders/orders.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [AppGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
