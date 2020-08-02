import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../../service/cart.service'
import { AuthService } from '../../../service/auth.service'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  cart: Array<Object>

  @Input()
  item;

  @Input()
  index;

  @Output()
  onDeleteProduct = new EventEmitter<number>();

  public quantity: number

  constructor(private cartService: CartService, public authService: AuthService) { }

  ngOnInit(): void {

  }
  addToCart() {
    this.item.status = 'Added'
    if (typeof this.quantity === 'undefined') {
      this.quantity = 1
    }
    this.cartService.addItem(this.item, this.quantity)
  }

  deleteProduct() {
    this.onDeleteProduct.emit(this.item._id)
  }
}
