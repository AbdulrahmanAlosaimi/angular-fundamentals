import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = new Product();
  private routeSub: Subscription = new Subscription();
  quantity: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.product = this.productService.getProduct(parseInt(params['id']));
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  addToCart(object: any) {
    if (object.quantity == 0) {
      alert('Please select a quantity');
      return;
    }
    return this.cartService.addToCart(object);
  }
}
