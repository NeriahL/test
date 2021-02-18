import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  OrderInformation: {
    name: string;
    FrameImage: string;
    color: string;
    width: number;
    framePrice: number;
    LenseImage: string;
    type: string;
    lensePrice: number;
    leftCylinder:string;
    rightCylinder:string;
    leftLense:string;
    rightLense:string
  };

  constructor(public orderService: OrderServiceService) { }

  ngOnInit(): void {
    this.OrderInformation = { 
      name: this.orderService.OrderInfo[2].firstName + " " + this.orderService.OrderInfo[2].lastName,
      FrameImage: this.orderService.OrderInfo[0].FrameImage,
      color: this.orderService.OrderInfo[0].color,
      width: this.orderService.OrderInfo[0].width,
      framePrice: this.orderService.OrderInfo[0].FramePrice,
      LenseImage: this.orderService.OrderInfo[1].LenseImage,
      type: this.orderService.OrderInfo[1].type,
      lensePrice: this.orderService.OrderInfo[1].LensePrice,
      leftCylinder: this.orderService.OrderInfo[2].leftCylinder,
      rightCylinder: this.orderService.OrderInfo[2].rightCylinder,
      leftLense: this.orderService.OrderInfo[2].leftLense,
      rightLense: this.orderService.OrderInfo[2].rightLense
    };
  }

}
