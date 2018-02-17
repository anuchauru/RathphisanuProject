import { Component, OnInit } from '@angular/core';
import { StockseriveService } from '../stockserive.service';

@Component({
  selector: 'app-stock-p2',
  templateUrl: './stock-p2.component.html',
  styleUrls: ['./stock-p2.component.css'],
  providers: [StockseriveService]
})
export class StockP2Component implements OnInit {
  my_Class_1: any;
  my_Class_2: any;
  my_Class_3: any;
  data_medicine: any; // ข้อมูลยา
  data_msg: any; // msg
  data_unit: any; // ข้อมูลหน่วย
  data_array: any; // ข้อมูลarray
  data_bill: any;
  data_order: any;
  array: any;
  data: any;
  id_bill: any; // รหัสคำสั่งซื้อ
  id_medicine = ''; // รหัสยา
  id_unit = ''; // รหัสหน่วย
  if_txt = 'table'; // เงื่อนไข
 
  constructor(private sts: StockseriveService) { }

  ngOnInit() {
    this.my_Class_1 = 'show';
    this.my_Class_2 = 'hide';
    this.my_Class_3 = 'hide';
    this.sts.get_tb_unit().subscribe(
      (txtdata) => this.data_unit = txtdata
    );
     this.sts.get_order().subscribe(
      (txtdata) => this.data_order = txtdata
    );
    this.sts.get_id_bill().subscribe(
      (txtdata) => this.data_bill = txtdata,
      (error) => alert(error),
      () => {
       this.id_bill = this.data_bill;
      }
    );
    console.log(this.data_bill);
    this.array = [];
  }
  my_add() {
    this.if_txt = 'page2';
    this.sts.get_tb_medicine().subscribe(
      (txtdata) => this.data_medicine = txtdata
    );
  }
  my_cancen_add() {
    this.if_txt = 'page1';
  }
  my_add_new() {
    this.if_txt = 'page3';
  }
  my_cancen_add_new() {
    this.if_txt = 'page2';
  }
  // รายละเอียดยาและเวชภัณฑ์
  my_medicine(txt) {
    console.log(txt);
  }
  add_page1(data: any) {
    this.sts.post_order(data).subscribe(
      (txtdata) => this.data_bill = txtdata,
      (error) => alert(error),
      () => {
        this.sts.post_order_array(this.array).subscribe(
          (txtdata) => this.data = txtdata,
          (error) => alert(error),
          () => {
            this.if_txt = 'table';
          }
        );
      }
    );
  }
  add_array(data: any){
    this.sts.get_medicine_array(data).subscribe(
      (txtdata) => this.data_array = txtdata,
      (error) => alert(error),
      () => {
        this.array.push(this.data_array);
        this.if_txt = 'page1';
      }
    );
  }
  insert_medicine(data: any) { // เพิ่มข้อมูลยาและเวชภัณฑ์
    this.sts.post_medicine(data).subscribe(
      (txtdata) => this.data_msg = txtdata,
      (error) => alert(error),
      () => {
        this.sts.get_tb_medicine().subscribe(
          (txtdata) => this.data_medicine = txtdata,
          (error) => alert(error),
          () => {
            this.if_txt = 'page2';
          }
        );
      }
    );

  }

  myinsert() {
    this.if_txt = 'page1';
  }
  my_view() {
    this.if_txt = 'page4';
  }

}
