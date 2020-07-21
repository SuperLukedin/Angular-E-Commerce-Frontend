import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service'
import { CartService } from '../../service/cart.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Object>
  constructor(public productService: ProductService, public cartService: CartService) {}
  cart: Array<Object>

  ngOnInit(): void {
    this.productService.listProducts()
      .subscribe((res) => {
        this.products = res
      })

      this.cartService.cart.subscribe((cart_) => {
        this.cart = cart_
      })
  }
}
