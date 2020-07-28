import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemComponent } from './components/products/item/item.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { RegisterComponent } from './components/auth/register/register.component';
import {AuthService} from './service/auth.service';
import {AppGuard} from './app.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrderImgComponent } from './components/orders/order/order-img/order-img.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    CartComponent,
    ItemComponent,
    CartItemComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    OrdersComponent,
    OrderComponent,
    OrderImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
