import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../service/orders.service'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  userName: String
  orders: Array<Object>

  constructor(private ordersService: OrdersService) {
    this.userName = localStorage.getItem("user")
  }

  ngOnInit(): void {
    this.ordersService.getUserOrders()
      .subscribe((res) => {
        console.log(res)
        this.orders = res
      })
  }
}
