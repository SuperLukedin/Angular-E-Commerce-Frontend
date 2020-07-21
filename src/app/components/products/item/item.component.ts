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

  constructor(public cartService: CartService) { }

  ngOnInit(): void {

  }
  addToCart() {
    this.item.status = 'Added'
    this.cartService.addItem(this.item)
  }
}
