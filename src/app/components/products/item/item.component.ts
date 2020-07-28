import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../../service/cart.service'
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

  public quantity: number

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }
  addToCart() {
    this.item.status = 'Added'
    if (typeof this.quantity === 'undefined') {
      this.quantity = 1
    }
    this.cartService.addItem(this.item, this.quantity)
  }
}
