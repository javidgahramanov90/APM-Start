import {Component, OnInit, OnDestroy} from '@angular/core';

import {Observable, Subscription} from 'rxjs';

import {Product} from './product';
import {ProductService} from './product.service';
import {catchError, map, tap} from 'rxjs/operators';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;

  products$: Observable<Product[]>;
  sub: Subscription;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {

    this.products$ = this.productService.products$
      .pipe(
        map(product => product.filter(x => x.quantityInStock > 6)),
        catchError(x => this.ErorHandler)
        )
    ;
  }

  public ErorHandler() {
   console.log('Error');
  }

  ngOnDestroy(): void {
  }

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
