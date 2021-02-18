import { Component, Input, OnInit } from '@angular/core';
import { LenseModel } from 'src/app/models/lense.model';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-single-lense',
  templateUrl: './single-lense.component.html',
  styleUrls: ['./single-lense.component.css']
})
export class SingleLenseComponent implements OnInit {

  @Input() lense: LenseModel;

  constructor(public orderService: OrderServiceService) { }

  ngOnInit(): void {
  }
  pushLense(lense: LenseModel) {
    this.orderService.pushInto(lense)
    
    console.log(this.orderService.OrderInfo)

  }
}
