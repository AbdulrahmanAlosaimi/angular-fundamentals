import { Injectable } from '@angular/core';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  userProducts: Product[] = [
    {
      name: 'test',
      price: 23,
      id: 50,
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'testing description',
    },
    {
      name: 'test',
      price: 23,
      id: 50,
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'testing description',
    },
    {
      name: 'test',
      price: 23,
      id: 50,
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'testing description',
    },
  ];

  constructor() {}

  addToCart(product: Product): Product[] {
    this.userProducts.push(product);
    console.log(`added ${product.name} to cart`, this.userProducts);

    return this.userProducts;
  }

  getUserProducts(): Product[] {
    console.log('in cart serv', this.userProducts);

    return this.userProducts;
  }
}
