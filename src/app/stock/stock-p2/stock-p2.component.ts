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
  num_bill: any;
  order_bill: any;
  button: any;
  // ------------------------------------- edit
  data_id: any;
  data_array_db: any;
  data_delete = [];
  // ------------------------------------- edit
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
    this.array = [];
    this.data_array_db = [];

  }
  // ------------------------------------- insert
  myinsert() {
    this.if_txt = 'page1';
    this.button = 'set1';
    this.num_bill = '';
    this.order_bill = '';
    this.array = [];
    this.sts.get_id_bill().subscribe(
      (txtdata) => this.data_bill = txtdata,
      (error) => alert(error),
      () => {
        this.id_bill = this.data_bill;
      }
    );
  }
  // ------------------------------------- insert
  // ------------------------------------- edit
  my_view(data: any) { // แสดงข้อมูล
    this.button = 'set2';
    this.data_id = data;
    this.data_array_db = [];
    this.sts.get_order_edit(data).subscribe(
      (txtdata) => this.data = txtdata,
      (error) => alert(error),
      () => {
        this.if_txt = 'page4';
        this.my_Class_1 = 'show';
        this.my_Class_2 = 'hide';
        this.id_bill = this.data.id_bill;
        this.num_bill = this.data.num_bill;
        this.order_bill = this.data.order_bill;
      }
    );
    this.sts.get_order_edit_stock(data).subscribe(
      (txtdata) => this.array = txtdata,
      (error) => alert(error),
      () => {
      }
    );
  }
  my_edit_stock() { // แก้ไข
    this.my_Class_1 = 'hide';
    this.my_Class_2 = 'show';
    this.data_delete = [];
  }
  back_home() { // ยกเลิก
    this.if_txt = 'table';
  }
  add_page_edit(data: any) { // แก้ไขข้อมูล (orrder)
    this.sts.get_edit_order(data).subscribe(
      (txtdata) => this.data = txtdata,
      (error) => alert(error),
      () => {
        this.sts.post_order_array(this.data_array_db).subscribe(
          (txtdata) => this.data = txtdata,
          (error) => alert(error),
          () => {
            if (this.data_delete.length > 0) {
              this.sts.get_delete_list(this.data_delete).subscribe(
                (txtdata) => this.data = txtdata,
                (error) => alert(error),
                () => {
                  this.data_array_db = [];
                  this.sts.get_order_edit(this.data_id).subscribe(
                    (txtdata) => this.data = txtdata,
                    (error) => alert(error),
                    () => {
                      this.if_txt = 'page4';
                      this.my_Class_1 = 'show';
                      this.my_Class_2 = 'hide';
                      this.id_bill = this.data.id_bill;
                      this.num_bill = this.data.num_bill;
                      this.order_bill = this.data.order_bill;
                    }
                  );
                  this.sts.get_order_edit_stock(this.data_id).subscribe(
                    (txtdata) => this.array = txtdata
                  );
                }
              );
            } else {
              this.data_array_db = [];
              this.sts.get_order_edit(this.data_id).subscribe(
                (txtdata) => this.data = txtdata,
                (error) => alert(error),
                () => {
                  this.if_txt = 'page4';
                  this.my_Class_1 = 'show';
                  this.my_Class_2 = 'hide';
                  this.id_bill = this.data.id_bill;
                  this.num_bill = this.data.num_bill;
                  this.order_bill = this.data.order_bill;
                }
              );
              this.sts.get_order_edit_stock(this.data_id).subscribe(
                (txtdata) => this.array = txtdata
              );
            }
          }
        );


      }
    );

  }
  back_home_class() {
    this.data_array_db = [];
    this.sts.get_order_edit(this.data_id).subscribe(
      (txtdata) => this.data = txtdata,
      (error) => alert(error),
      () => {
        this.if_txt = 'page4';
        this.my_Class_1 = 'show';
        this.my_Class_2 = 'hide';
        this.id_bill = this.data.id_bill;
        this.num_bill = this.data.num_bill;
        this.order_bill = this.data.order_bill;
      }
    );
    this.sts.get_order_edit_stock(this.data_id).subscribe(
      (txtdata) => this.array = txtdata
    );
  }
  // ------------------------------------- edit
  // ------------------------------------- ใช่รวม
  my_add() {
    this.if_txt = 'page2';
    this.id_medicine = '';
    this.sts.get_tb_medicine().subscribe(
      (txtdata) => this.data_medicine = txtdata
    );
  }
  add_array(data: any) {
    this.sts.get_medicine_array(data).subscribe(
      (txtdata) => this.data_array = txtdata,
      (error) => alert(error),
      () => {
        if (this.button == 'set2') {
          this.data_array_db.push(this.data_array);
        }
        this.array.push(this.data_array);
        if (this.button == 'set1') {
          this.if_txt = 'page1';
        } else if (this.button == 'set2') {
          this.if_txt = 'page4';
        }
      }
    );
  }
  remove_array(ar) {
    if (this.button == 'set2') {
      if (ar.id_stock_medicine) {
        this.data_delete.push(ar);
      }
    }
    this.array.forEach((element, index) => {
      if (element == ar) {
        this.array.splice(index, 1);
      }
    });
  }
  // ------------------------------------- ใช่รวม
  add_page1(data: any) {
    this.sts.post_order(data).subscribe(
      (txtdata) => this.data_bill = txtdata,
      (error) => alert(error),
      () => {
        this.sts.post_order_array(this.array).subscribe(
          (txtdata) => this.data = txtdata,
          (error) => alert(error),
          () => {
            this.sts.get_order().subscribe(
              (txtdata) => this.data_order = txtdata
            );
            this.if_txt = 'table';
          }
        );

      }
    );
  }

  my_cancen_add() {
    if (this.button == 'set1') {
      this.if_txt = 'page1';
    } else {
      this.if_txt = 'page4';
    }
  }
  my_add_new() {
    this.if_txt = 'page3';
    this.id_unit = '';
  }
  my_cancen_add_new() {
    this.if_txt = 'page2';
  }
  // รายละเอียดยาและเวชภัณฑ์
  my_medicine(txt) {
    // console.log(txt);
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




  my_add_to() {
    this.if_txt = 'page2';
    this.button = 'set2';
    this.sts.get_tb_medicine().subscribe(
      (txtdata) => this.data_medicine = txtdata
    );
  }
}
