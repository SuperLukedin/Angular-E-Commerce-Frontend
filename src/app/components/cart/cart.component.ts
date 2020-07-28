import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Array<Object>
  totalPrice: number

  constructor(public cartService: CartService,) {

  }

  ngOnInit(): void {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]))
      this.cart = JSON.parse(localStorage.getItem("cart"))
    } else {
      this.cart = JSON.parse(localStorage.getItem("cart"))
    }

    this.totalPrice = this.getTotalPrice(this.cart)
  }

  getTotalPrice(cart) {
    return cart.reduce((accu, curr) => {
      return parseInt(accu) + (parseInt(curr.price) * curr.qty)
    },0)
  }

  deleteCartItem(index: number) {
    this.cart.splice(index, 1)
    this.totalPrice = this.getTotalPrice(this.cart)
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }

  checkout() {
    this.cartService.checkout(this.totalPrice, this.cart)
    this.cart.length = 0
    localStorage.removeItem("cart")
    this.totalPrice = this.getTotalPrice(this.cart)
  }
}
