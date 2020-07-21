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

  constructor(public cartService: CartService) {
    this.cartService.cart.subscribe((cart_) => {
      this.cart = cart_
    })
  }

  ngOnInit(): void {
    this.totalPrice = this.getTotalPrice(this.cart)
  }

  getTotalPrice(cart) {
    return cart.reduce((accu, curr) => {
      return parseInt(accu) + parseInt(curr.price)
    },0)
  }
}
