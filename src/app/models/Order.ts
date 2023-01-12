import { User } from './User';
import { Product } from './Product';
export class Order {
  user: User;
  productInfo: any[];

  constructor() {
    this.user = new User();
    this.productInfo = [{ product: new Product(), quantity: 0 }];
  }
}
