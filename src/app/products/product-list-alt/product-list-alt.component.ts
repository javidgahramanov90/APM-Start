import {Component, OnInit, OnDestroy} from '@angular/core';

import {Observable, Subscription} from 'rxjs';

import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId;
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products$ = this.productService.products$;
  }

  ngOnDestroy(): void {
  }

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
