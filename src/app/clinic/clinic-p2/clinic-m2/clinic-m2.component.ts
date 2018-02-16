import { Component, OnInit } from '@angular/core';

import { ClinicserviceService } from '../../clinicservice.service';

@Component({
  selector: 'app-clinic-m2',
  templateUrl: './clinic-m2.component.html',
  styleUrls: ['./clinic-m2.component.css'],
  providers: [ClinicserviceService]
})
export class ClinicM2Component implements OnInit {
  // ประกาศตัวแปล
  if_text: string;
  id_text: any;
  data_ph: any;
  postdata: any;
  postdatal: any;
  str: any;
  my_Class = 'style1';
  my_Class1 = 'style2';
  id_screening: any;
  // ประวัติผู้ป่วย
  PRENAMEID: any;
  name_ph: any;
  lastname_ph: any;
  birthday: any;
  time_birthday: any;
  sex_ph: any;
  no: any;
  moo: any;
  road: any;
  PROVINCE_ID: any;
  AMPHUR_ID: any;
  DISTRICT_ID: any;
  OCCUPATION_ID: any;
  tel_ph: any;
  ETHNICITYE_ID: any;
  NATIONALITY_ID: any;
  RELIGION_ID: any;
  data_allergys: any;

  data_pername: any;
  data_province: any;
  data_tb_occupation: any;
  data_tb_ethnicity: any;
  data_tb_nationality: any;
  data_tb_religion: any;
  data_id: any;
  data_getamphures: any;
  data_district: any;

  u1: any;
  u2: any;
  u3: any;
  u4: any;
  u5: any;
  u6: any;
  u7: any;
  u8: any;
  u9: any;
  u10: any;
  u11: any;
  u12: any;
  u13: any;
  u14: any;
  u15: any;
  mm: any;
  status: any;
  constructor( private clsv: ClinicserviceService ) { 
    this.clsv.get_tb_screening().subscribe(
      (txtdata) => this.data_ph = txtdata,
      (error) => alert(error),
      () => {
      }
    );
  }

  ngOnInit() {
    this.if_text = 'table';
  }
  myPatient(id: any) {
    this.if_text = 'form';
    this.id_text = {
      id_screening: id,
      mm: 'query'
     };
    this.clsv.postScreening(this.id_text).subscribe(
      (txtdata) => this.postdata = txtdata,
      (error) => alert(error),
      () => {
        this.u1 = this.postdata['0'];
        this.u2 = this.postdata['1'];
        this.clsv.getpername().subscribe(
          (txtdata) => this.data_pername = txtdata
        );
        this.clsv.getprovince().subscribe(
          (txtdata) => this.data_province = txtdata
        );
        this.clsv.gettb_occupation().subscribe(
          (txtdata) => this.data_tb_occupation = txtdata
        );
        this.clsv.gettb_ethnicity().subscribe(
          (txtdata) => this.data_tb_ethnicity = txtdata
        );
        this.clsv.gettb_nationality().subscribe(
          (txtdata) => this.data_tb_nationality = txtdata
        );
        this.clsv.gettb_religion().subscribe(
          (txtdata) => this.data_tb_religion = txtdata
        );
        this.clsv.postamphures(this.postdata.PROVINCE_ID).subscribe(
          (txdata) => this.data_getamphures = txdata
        );
        this.clsv.postdistrict(this.postdata.AMPHUR_ID).subscribe(
          (txdata) => this.data_district = txdata
        );
        this.id_screening = this.postdata.id_screening;
        this.name_ph = this.postdata.name_ph;
        this.lastname_ph = this.postdata.lastname_ph;
        this.PRENAMEID = this.postdata.PRENAME_ID;
        this.birthday = this.postdata.birthday;
        this.time_birthday = this.postdata.time_birthday;
        this.sex_ph = this.postdata.sex_ph;
        this.no = this.postdata.no;
        this.moo = this.postdata.moo;
        this.road = this.postdata.road;
        this.PROVINCE_ID = this.postdata.PROVINCE_ID;
        this.AMPHUR_ID = this.postdata.AMPHUR_ID;
        this.DISTRICT_ID = this.postdata.DISTRICT_ID;
        this.OCCUPATION_ID = this.postdata.OCCUPATION_ID;
        this.tel_ph = this.postdata.tel_ph;
        this.ETHNICITYE_ID = this.postdata.ETHNICITYE_ID;
        this.NATIONALITY_ID = this.postdata.NATIONALITY_ID;
        this.RELIGION_ID = this.postdata.RELIGION_ID;
        this.mm = 'update';
        this.status = '1';
      }
    );
  }
  // ยกเลิก
  myCancel(){
    this.if_text = 'table';
  }

  // บันทึกข้อมูล
  submit(txform: any) {
    this.if_text = 'table';
    // this.str = txform;
    this.str = {
      id_screening: this.id_screening,
      mm: this.mm 
     };
    this.clsv.postScreening(txform).subscribe(
      (tsform) => this.postdata = tsform,
      (error) => alert(error),
      () => {
        console.log(this.postdata);
        // this.router.navigate(['../system',{outlets:{'c2':['s1']}}]); คำสั่งเปลียนหน้า
        // this.clsv.get_tb_screening().subscribe(
        //   (txtdata) => this.data_ph = txtdata,
        //   (error) => alert(error),
        //   () => {
        //   }
        // );
      }
    );
  }
  // ข้อมูลระเบียนเวช
  my_click() {
    this.my_Class = 'style2';
    this.my_Class1 = 'style1';
  }

 // ยกเลิก
  my_cancel() {
    this.my_Class = 'style1';
    this.my_Class1 = 'style2';
  }

  my_hit (id: any) {
    this.if_text = 'form';
    this.id_text = {
      id_screening: id,
      mm: 'query'
     };
    this.clsv.postScreening(this.id_text).subscribe(
      (tsform) => this.postdata = tsform,
      (error) => alert(error),
      () => {
        this.u1 = this.postdata['0'];
        this.u2 = this.postdata['1'];
        this.u3 = this.postdata.id_types;
        this.u4 = this.postdata.id_department;
        this.u5 = this.postdata.id_room;
        this.u6 = this.postdata.weight;
        this.u7 = this.postdata.height;
        this.u8 = this.postdata.blood_pressure_top;
        this.u9 = this.postdata['1'];
        this.u10 = this.postdata['1'];
        this.u11 = this.postdata['1'];
        this.u12 = this.postdata['1'];
        this.u13 = this.postdata['1'];
        this.u14 = this.postdata['1'];
        this.u15 = this.postdata['1'];
        console.log(this.postdata);
      }
    );
  }

}
