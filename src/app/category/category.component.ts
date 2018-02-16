import { Component, OnInit } from '@angular/core';

import { ProductService } from '../home/product/shared/product.service';
import { Product } from '../home/product/shared/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  product: Product[];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(
      (product) => this.product = product
    );
  }
  openCourse(p) {
    //console.log(p);
    this.router.navigate(['/productdetail', 'id', p.id, 'title', p.c_title]);
    // /productdetail - path
    // 'id' - varible ,  p.id - value
    // 'title' - varible ,  p.c_title - value
  }

}
