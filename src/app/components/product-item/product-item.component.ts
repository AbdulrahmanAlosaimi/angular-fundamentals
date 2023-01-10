import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product = new Product();
  @Output() added = new EventEmitter();
  quantity: number = 0;

  constructor(private cartService: CartService) {}

  addToCart(object: any) {
    if (object.quantity == 0) {
      alert('Please select a quantity');
      return;
    }
    return this.cartService.addToCart(object);
  }
}
