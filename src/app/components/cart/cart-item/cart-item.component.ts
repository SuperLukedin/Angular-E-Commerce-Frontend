import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  item;

  @Input()
  index;

  @Output()
  onDeleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteCartItem() {
    this.onDeleteItem.emit(this.index)
  }

}
