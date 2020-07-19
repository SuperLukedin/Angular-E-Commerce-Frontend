import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Object>
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.listProducts()
      .subscribe((res) => {
        this.products = res
      })
  }
}
