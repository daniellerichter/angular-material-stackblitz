import { Component, OnInit } from '@angular/core';
import { Product, selectionPluralMap } from '../models/product';
import { ProductService } from '../shared/services/product.service';
import { take } from 'rxjs';
import { SelectableTableComponent } from '../shared/table/selectable-table.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends SelectableTableComponent<Product> implements OnInit {
  displayedColumns: string[] = ['select', 'product_id', 'name', 'price'];
  products: Product[];
  selectionPluralMap: selectionPluralMap;
  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.productService.getProducts().pipe(take(1)).subscribe(products => {
      this.products = products;
    });

    this.selectionPluralMap = {
      '=0': 'Select a product',
      '=1': '1 product selected',
      other: '# products selected',
    };
  }

  addToCart() {
    this.productService.addToCart(this.selectedItems);
  }

}
