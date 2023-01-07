import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  userProducts: Product[] = [];

  constructor(private cartService: CartService) {}

  addToCart(product: Product): Product[] {
    this.userProducts = this.cartService.addToCart(product);
    return this.userProducts;
  }
}
