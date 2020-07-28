import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-img',
  templateUrl: './order-img.component.html',
  styleUrls: ['./order-img.component.css']
})
export class OrderImgComponent implements OnInit {

  @Input()
  img;

  @Input()
  index;

  constructor() { }

  ngOnInit(): void {
  }

}
