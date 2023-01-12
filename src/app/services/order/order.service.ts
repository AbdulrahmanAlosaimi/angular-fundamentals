import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: Order = new Order();

  constructor() {}

  finalizeOrder(user: User, productsInfo: any[]) {
    this.order.user = user;
    this.order.productInfo = productsInfo;
  }

  getOrder(): Order {
    return this.order;
  }

  resetOrder(): void {
    this.order = new Order();
  }
}
