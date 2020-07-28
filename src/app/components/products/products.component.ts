import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service'
import { CartService } from '../../service/cart.service'
import { UserStoreService } from '../../service/user-store.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Object>
  constructor(
    public productService: ProductService,
    public cartService: CartService,
    public UserStoreService: UserStoreService
    ) {}
  // cart: Array<Object>

  ngOnInit(): void {
    this.productService.listProducts()
      .subscribe((res) => {
        console.log(res)
        res.forEach(item => {
          item.status = "Add to cart"
        })
        this.products = res
      })
  }
}
