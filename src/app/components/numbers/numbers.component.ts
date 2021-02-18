import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor(public orderService: OrderServiceService) { }

  ngOnInit(): void {
  }

  submitOrder(firstName:string,
    lastName:string,
    leftCylinder:string,
    rightCylinder:string,
    leftLense:string,
    rightLense:string) 
  {
    this.orderService.OrderInfo.push(
      {firstName: firstName,
      lastName: lastName,
      leftCylinder: leftCylinder,
      rightCylinder: rightCylinder,
      leftLense: leftLense,
      rightLense: rightLense}
      )
      console.log(this.orderService.OrderInfo)
  }

}
