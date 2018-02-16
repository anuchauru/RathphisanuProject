import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/product.service';
import { Product } from './shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProduct().subscribe(
        (product) => this.product = product
        //product => console.log(product)
      );
  }

}
