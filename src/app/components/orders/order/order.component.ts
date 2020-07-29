import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../service/auth.service'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input()
  order;

  @Input()
  index;

  @Output()
  onDeleteOrder = new EventEmitter<number>();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  deleteOrder() {
    this.onDeleteOrder.emit(this.order._id)
  }
}
