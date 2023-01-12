import { Injectable } from '@angular/core';
import { Product } from '../../models/Product';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    let observables = this.httpClient.get<Product[]>('../assets/data.json');
    observables.subscribe((data) => {
      this.products = data;
    });
    return observables;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id) as Product;
  }

  resetProducts(): void {
    this.products = [];
  }
}
