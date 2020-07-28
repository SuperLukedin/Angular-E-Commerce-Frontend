import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, URLSearchParams} from '@angular/http';
import { AppConfig } from './app.config';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private API_URL = AppConfig.API_URL;
  constructor(private http: Http) { }

  addItem (item) {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([item]))
    } else {
      let cartItems = JSON.parse(localStorage.getItem("cart"))
      cartItems.push(item)
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
  }

  checkout(totalPrice, cart) {
    let userName = localStorage.getItem("user")
    let numOfProducts = cart.length
    return this.http.post(this.API_URL + `/api/addOrder/`, {userName: userName, numOfProducts: numOfProducts, totalPrice: totalPrice})
    .subscribe((data) => {
      console.log(data)
    })
  }

}
