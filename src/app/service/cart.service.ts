import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, URLSearchParams} from '@angular/http';
import { AppConfig } from './app.config';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private API_URL = AppConfig.API_URL;
  constructor(private http: Http, private router: Router) { }

  addItem (item, quantity) {
    item.qty = quantity
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
    let numOfProducts = cart.reduce((accu, curr)=> { return accu + curr.qty}, 0)
    let product_ids = cart.map(item => item._id)
    return this.http.post(this.API_URL + `/api/addOrder/`, { userName: userName, numOfProducts: numOfProducts, totalPrice: totalPrice, product_ids: product_ids })
    .subscribe((data) => {
      this.router.navigate(['/orders'])
    })
  }

}
