import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  userProducts: any[] = [];

  constructor() {}

  addToCart(object: any): any[] {
    this.userProducts.push(object);
    console.log(
      `added ${object.quantity} ${object.product.name} to cart`,
      this.userProducts
    );

    return this.userProducts;
  }

  getUserProducts(): any[] {
    console.log('in cart serv', this.userProducts);

    return this.userProducts;
  }
}
