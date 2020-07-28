import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../service/orders.service'
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  userName: String
  orders: Array<Object>

  constructor(private ordersService: OrdersService, public authService: AuthService) {
    this.userName = localStorage.getItem("user")
  }

  ngOnInit(): void {
    this.ordersService.getUserOrders()
      .subscribe((res) => {
        this.orders = res
      })
  }
}
