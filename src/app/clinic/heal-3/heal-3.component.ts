import { Component, OnInit } from '@angular/core';
import { ClinicserviceService } from '../clinicservice.service';

@Component({
  selector: 'app-heal-3',
  templateUrl: './heal-3.component.html',
  styleUrls: ['./heal-3.component.css'],
  providers: [ClinicserviceService]
})
export class Heal3Component implements OnInit {
  data_ph: any;
  if_text: any;
  id_text: any;
  postdata: any;
  page1: any;
  page2: any;
  page3: any;
  page4: any;
  page5: any;
  // insert
  mm: any;
  id_ph: any;
  data: any;
  constructor( private clsv: ClinicserviceService ) {
    this.clsv.get_tb_send_check().subscribe(
      (txtdata) => this.data_ph = txtdata,
      (error) => alert(error),
      () => {
        console.log(this.data_ph);
      }
    );
  }

  ngOnInit() {
    this.mm = 'insert';
    this.if_text = 'table';
    this.page1 = 'show';
    this.page2 = 'hide';
    this.page3 = 'hide';
    this.page4 = 'hide';
    this.page5 = 'hide';
  }
  myPatient(id: any) {
    this.id_ph = id;
    this.if_text = 'form';
    this.id_text = {
      id_screening: id,
      mm: 'query'
     };
    this.clsv.postScreening(this.id_text).subscribe(
      (txtdata) => this.postdata = txtdata,
      (error) => alert(error),
      () => {
        console.log(this.postdata);
      }
    );
  }

  my_page1 () {
    this.page1 = 'show';
    this.page2 = 'hide';
    this.page3 = 'hide';
    this.page4 = 'hide';
    this.page5 = 'hide';
  }
  my_page2 () {
    this.page1 = 'hide';
    this.page2 = 'show';
    this.page3 = 'hide';
    this.page4 = 'hide';
    this.page5 = 'hide';
  }
  my_page3 () {
    this.page1 = 'hide';
    this.page2 = 'hide';
    this.page3 = 'show';
    this.page4 = 'hide';
    this.page5 = 'hide';
  }
  my_page4 () {
    this.page1 = 'hide';
    this.page2 = 'hide';
    this.page3 = 'hide';
    this.page4 = 'show';
    this.page5 = 'hide';
  }
  my_page5 () {
    this.page1 = 'hide';
    this.page2 = 'hide';
    this.page3 = 'hide';
    this.page4 = 'hide';
    this.page5 = 'show';
  }
   // เพิ่มข้อมูลแบบประเมินผู้ป่วยระบบกระดูกกล้ามเนื้อ และข้อ
   insert_heal_3(data: any) {
    this.clsv.get_heal_3(data).subscribe(
      (txtdata) => this.data = txtdata,
      (e) => alert(e),
      () => {
        console.log(this.data);
      }
    );
  }
}
