import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order/order.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  order: Order = new Order();
  orderTotal: number = 0;

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.order = this.orderService.getOrder();

    for (let i = 0; i < this.order.productInfo.length; i++) {
      this.orderTotal +=
        this.order.productInfo[i].quantity *
        this.order.productInfo[i].product.price;
    }
    this.orderTotal = parseFloat(
      (Math.round(this.orderTotal * 100) / 100).toFixed(2)
    );
  }

  onClick() {
    this.orderService.resetOrder();
    this.cartService.resetCart();
    this.productService.resetProducts();
    this.router.navigate(['/']);
  }
}
