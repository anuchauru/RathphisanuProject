import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-p2',
  templateUrl: './stock-p2.component.html',
  styleUrls: ['./stock-p2.component.css']
})
export class StockP2Component implements OnInit {
  my_Class_1: any;
  my_Class_2: any;
  my_Class_3: any;
  constructor() { }

  ngOnInit() {
    this.my_Class_1 = 'show';
    this.my_Class_2 = 'hide';
    this.my_Class_3 = 'hide';
  }

  my_add () {
    this.my_Class_1 = 'hide';
    this.my_Class_2 = 'show';
    this.my_Class_3 = 'hide';
  }
  my_cancen_add () {
    this.my_Class_1 = 'show';
    this.my_Class_2 = 'hide';
    this.my_Class_3 = 'hide';
  }

  my_add_new () {
    this.my_Class_1 = 'hide';
    this.my_Class_2 = 'hide';
    this.my_Class_3 = 'show';
  }
  my_cancen_add_new () {
    this.my_Class_1 = 'hide';
    this.my_Class_2 = 'show';
    this.my_Class_3 = 'hide';
  }
}
