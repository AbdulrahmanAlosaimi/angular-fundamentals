import { Injectable } from '@angular/core';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  userProducts: Product[] = [];

  constructor() {}

  addToCart(product: Product): Product[] {
    this.userProducts.push(product);
    return this.userProducts;
  }
}
