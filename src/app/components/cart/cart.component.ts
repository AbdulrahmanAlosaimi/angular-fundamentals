import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userProducts: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.userProducts = this.cartService.getUserProducts();

    console.log(`in cart comp`, this.userProducts);
  }
}
