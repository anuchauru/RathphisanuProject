// import modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // ดึกค่าพารามิเตอร์ผ่าน url 
import { Location } from '@angular/common';

// import services
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  // define variable
  id: number;
  title: string;
  product: Array<any>;

  // if want to use module add paramiter here
  constructor(private activatedroute: ActivatedRoute, private location: Location, private productService: ProductService) { }

  ngOnInit() {
    // this.id = this.activatedroute.snapshot.params['id'];
    // this.title = this.activatedroute.snapshot.params['title'];
    this.activatedroute.params.subscribe(params => {
      // define variable
      this.id = params['id'];
      this.title = params['title'];

      // Subscribe data from service
      this.productService.getProductDetail(this.id).subscribe(
        (product) => this.product = product
        // display data at console
        // (product) => console.log(product)
      );
    });

  }
  goBack() {
    this.location.back();
  }

}
