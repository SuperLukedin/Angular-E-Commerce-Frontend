import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service'
import { CartService } from '../../service/cart.service'
import { UserStoreService } from '../../service/user-store.service'
import { AuthService } from '../../service/auth.service'

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
    public UserStoreService: UserStoreService,
    public authService: AuthService
    ) {}
  // cart: Array<Object>

  ngOnInit(): void {
    this.list()

  }
  list() {
    this.productService.listProducts()
      .subscribe((res) => {
        res.forEach(item => {
          item.status = "Add to cart"
        })
        this.products = res
      })
  }
  addProduct(product) {
    this.productService.addProduct(product)
      .subscribe((res) => {
        this.list()
      })
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe((res) => {
        if (res.deleteDone && res._id) {
          this.list()
        }
      })
  }
}
