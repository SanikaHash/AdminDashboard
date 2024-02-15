import {Component, OnInit} from '@angular/core';
import { OrdersService } from "../oservice/orders.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  string = '';
  order:any;

  constructor(private orderservice: OrdersService) { }

  ngOnInit() {
   this.orderservice.getorders().subscribe(orders => {
     this.order = orders;
   })
  }

}
