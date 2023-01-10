import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userProducts: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.userProducts = this.cartService.getUserProducts();
    for (let i = 0; i < this.userProducts.length; i++) {
      this.totalPrice +=
        this.userProducts[i].quantity * this.userProducts[i].product.price;
    }
  }
}
