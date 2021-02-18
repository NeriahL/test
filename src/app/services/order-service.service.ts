import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  OrderInfo = []

  constructor() { }

  pushInto(val:any) {
    this.OrderInfo.push(val)
  }
  
}



