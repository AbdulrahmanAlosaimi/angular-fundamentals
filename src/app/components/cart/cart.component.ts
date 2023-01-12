import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { User } from 'src/app/models/User';
import { OrderService } from 'src/app/services/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userProducts: any[] = [];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userProducts = this.cartService.getUserProducts();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalPrice = 0;
    for (let i = 0; i < this.userProducts.length; i++) {
      this.totalPrice +=
        this.userProducts[i].quantity * this.userProducts[i].product.price;
    }
    this.totalPrice = parseFloat(
      (Math.round(this.totalPrice * 100) / 100).toFixed(2)
    );
  }

  addOrder(user: User) {
    this.orderService.finalizeOrder(user, this.userProducts);
    this.router.navigate(['/confirmation']);
  }

  quantityChanged(quantity: number, object: any) {
    if (quantity == 0) {
      this.cartService.removeProduct(object);
      this.userProducts = this.userProducts.filter(
        (product) => product !== object
      );
      alert(`${object.product.name} has been removed from cart`);
      this.calculateTotal();
    } else {
      let index = this.userProducts.indexOf(object);
      if (index != -1) {
        this.userProducts[index].quantity = quantity;
      }
      alert(`${object.product.name} quantity has been updated to ${quantity}`);
      this.calculateTotal();
    }
  }
}
