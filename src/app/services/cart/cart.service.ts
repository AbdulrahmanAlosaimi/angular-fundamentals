import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/Order';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  userProducts: any[] = [];
  order: Order = new Order();

  constructor() {}

  addToCart(object: any): any[] {
    this.userProducts.push(object);
    alert(`added ${object.quantity} ${object.product.name} to cart`);

    return this.userProducts;
  }

  getUserProducts(): any[] {
    return this.userProducts;
  }

  removeProduct(removingProduct: any): void {
    this.userProducts = this.userProducts.filter(
      (product) => product !== removingProduct
    );
  }

  resetCart(): void {
    this.userProducts = [];
  }
}
