import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from '../../models/product';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const url = 'https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list';
    return this.httpClient.get<ProductResponse>(url).pipe(map(res => res.products));
  }

  addToCart(products: Product[]) {
    console.log('Added to cart', products);
  }
}
