import { Component, Input, OnInit } from '@angular/core';
import { FrameModel } from 'src/app/models/frame.model';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-single-frame',
  templateUrl: './single-frame.component.html',
  styleUrls: ['./single-frame.component.css']
})
export class SingleFrameComponent implements OnInit {

  @Input() frame: FrameModel;


  constructor(public orderService: OrderServiceService) { }

  ngOnInit(): void {
  }
  pushFrame(frame: FrameModel) {
    this.orderService.pushInto(frame)
    
    console.log(this.orderService.OrderInfo)
  }

}
