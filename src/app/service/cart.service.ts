import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSource = new BehaviorSubject<Array<Object>>([]);
  cart = this.cartSource.asObservable();
  constructor() { }

  addItem (item) {
    const currentCart = this.cartSource.value
    const updatedCart = [...currentCart, item]
    this.cartSource.next(updatedCart)
  }
}
