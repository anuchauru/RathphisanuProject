import { Component, OnInit } from '@angular/core';
import { ClinicserviceService } from '../clinicservice.service';

@Component({
  selector: 'app-heal-1',
  templateUrl: './heal-1.component.html',
  styleUrls: ['./heal-1.component.css'],
  providers: [ClinicserviceService]
})
export class Heal1Component implements OnInit {
  data_ph: any;
  data_ap: any;
  data_tp: any;
  data: any; // ส่งข้อมูล
  txt: any;  // ส่ง mm
  txt_ap: any;
  txt_tp: any;
  if_text: any;
  if_txt: any;
  id_text: any;
  adjust_plan: any;
  form = 'show';
  postdata: any;
  page1: any;
  page2: any;
  page3: any;
  mm: any;
  id_ph: any;
  // เพิ่มข้อมูลวินิจฉัย
  heal_1: any;
  sta_dc: any;
  // แก้ไขข้อมูลแบบประเมินผู้ป่วย
  num_r: any;
  cl1: any;
  cl2: any;
  cl3: any;
  cl4: any;
  cl5: any;
  cl6: any;
  cl7: any;
  cl8: any;
  cl9: any;
  cl10: any;
  cl11: any;
  cl12: any;
  cl13: any;
  cl14: any;
  cl15: any;
  cl16: any;
  cl17: any;
  cl18: any;
  cl19: any;
  cl20: any;
  cl21: any;
  cl22: any;
  cl23: any;
  cl24: any;
  cl25: any;
  cl26: any;
  cl27: any;
  cl28: any;
  cl29: any;
  cl30: any;
  cl31: any;
  cl32: any;
  cl33: any;
  cl34: any;
  cl35: any;
  cl36: any;
  cl37: any;
  cl38: any;
  cl39: any;
  cl40: any;

  constructor(private clsv: ClinicserviceService) {
  }

  ngOnInit() {
    this.if_text = 'table';
    this.if_txt = 0;
    this.adjust_plan = 0;
    this.page1 = 'show';
    this.page2 = 'hide';
    this.page3 = 'hide';
    this.clsv.get_tb_send_check().subscribe(
      (txtdata) => this.data_ph = txtdata
    );
  }
  myPatient(id: any) {
    this.id_ph = id;
    // this.id_text = {
    //   id_screening: id,
    //   mm: 'query'
    // };
    // this.clsv.postScreening(this.id_text).subscribe(
    //   (txtdata) => this.postdata = txtdata,
    //   (error) => alert(error),
    //   () => {
    //      console.log(this.postdata);
    //   }
    // );
    this.id_text = {
      id_ph: id,
      mm: 'query'
    };
    this.clsv.get_heal_1(this.id_text).subscribe(
      (txtdata) => this.sta_dc = txtdata,
      (e) => alert(e),
      () => {
        this.num_r = this.sta_dc.num_row;
        this.cl1 = this.sta_dc.date_counsel;
        this.cl2 = this.sta_dc.first_day_pt;
        this.cl3 = this.sta_dc.prohibition;
        this.cl4 = this.sta_dc.diagnosis;
        this.cl5 = this.sta_dc.pathology;
        this.cl6 = this.sta_dc.ud;
        this.cl7 = this.sta_dc.pt_diagnosis;
        this.cl8 = this.sta_dc.history;
        this.cl9 = this.sta_dc.onset;
        this.cl10 = this.sta_dc.sta;
        this.cl11 = this.sta_dc.physical_examination;
        this.cl12 = this.sta_dc.observation;
        this.cl13 = this.sta_dc.consciousness;
        this.cl14 = this.sta_dc.communication;
        this.cl15 = this.sta_dc.edema;
        this.cl16 = this.sta_dc.lung;
        this.cl17 = this.sta_dc.rom;
        this.cl18 = this.sta_dc.limit_rom_at;
        this.cl19 = this.sta_dc.join_contracture_at;
        this.cl20 = this.sta_dc.muscle_length;
        this.cl21 = this.sta_dc.tightness_of;
        this.if_text = 'form';
        // this.cl14 = this.sta_dc.date_counsel;
        // this.cl14 = this.sta_dc.date_counsel;
        // this.cl14 = this.sta_dc.date_counsel;
        // this.cl14 = this.sta_dc.date_counsel;

        // this.cl14 = this.sta_dc.date_counsel;
        // this.cl14 = this.sta_dc.date_counsel;
        // this.cl14 = this.sta_dc.date_counsel;
        // this.cl14 = this.sta_dc.date_counsel;

        // this.cl14 = this.sta_dc.date_counsel;
      }
    );
  }

  my_page1() {
    this.page1 = 'show';
    this.page2 = 'hide';
    this.page3 = 'hide';
  }
  // --------------------------------------- แบบประเมิน
  my_page2() {
    this.page1 = 'hide';
    this.page2 = 'show';
    this.page3 = 'hide';
    this.mm = 'insert';
  }
  // เพิ่มวินิจฉัยโรค
  insert_heal_1(txt: any) {
    this.page1 = 'hide';
    this.page2 = 'hide';
    this.page3 = 'hide';
    this.clsv.get_heal_1(txt).subscribe(
      (txtdata) => this.heal_1 = txtdata,
      (e) => alert(e),
      () => {
      }
    );
  }
  // เรียกฟรอมแก้ไขแบบประเมินผู้ป่วย
  my_edit_form() {
    this.form = 'edit';
  }
  // แก้ไขแบบประเมินผู้ป่วย
  edit_heal_1(data: any) {
    console.log(data);
  }
  // --------------------------------------- การนัดหมาย
  my_page3() {
    this.page1 = 'hide';
    this.page2 = 'hide';
    this.page3 = 'show';
    this.if_txt = '0';
    this.txt_ap = {
      cn_1: this.sta_dc.cn_1,
      mm: 'query_tb_appoint_1'
    };
    this.clsv.get_heal_1(this.txt_ap).subscribe(
      (txtdata) => this.data_ap = txtdata,
      (e) => alert(e),
      () => {
        console.log(this.data_ap);
      }
    );
  }
  // เพิ่มการนัดหมาย
  in_appoint() {
    this.txt_tp = {
      cn_1: this.sta_dc.cn_1,
      mm: 'query_tb_tplan_clinic_1'
    };
    this.clsv.get_heal_1(this.txt_tp).subscribe(
      (txtdata) => this.data_tp = txtdata,
      (e) => alert(e),
      () => {
        this.if_txt = 1;
        console.log(this.data_tp);
      }
    );
  }
  // ปรับแผนการรักษา
  my_adjust_plan() {
    this.adjust_plan = 1;
  }
  // ยกเลิกปรับแผนการรักษา
  cn_adjust_plan() {
    this.adjust_plan = 0;
  }
  // บันทึกปรับแผน
  insert_tplan(data: any) {
    this.txt = {
      cn_1: data.cn_1,
      date_at: data.date_at,
      etc_hospital: data.etc_hospital,
      id_tp_c_1: data.id_tp_c_1,
      sta_end: data.sta_end,
      mm: 'insert_tb_tplan_clinic_1',
      tt_sta_1: data.tt_sta_1,
      tt_sta_2: data.tt_sta_2,
      tt_sta_3: data.tt_sta_3,
      tt_sta_4: data.tt_sta_4,
      tt_sta_5: data.tt_sta_5,
      tt_sta_6: data.tt_sta_6,
      tt_sta_7: data.tt_sta_7,
      tt_sta_8: data.tt_sta_8,
      tt_sta_9: data.tt_sta_9,
      tt_sta_10: data.tt_sta_10
    };
  this.clsv.get_heal_1(this.txt).subscribe(
    (txtdata) => this.data = txtdata,
    (e) => alert(e),
    () => {
      // console.log(this.data);
      this.txt_ap = {
        cn_1: this.sta_dc.cn_1,
        mm: 'query_tb_appoint_1'
      };
      this.clsv.get_heal_1(this.txt_ap).subscribe(
        (txtdata) => this.data_ap = txtdata,
        (e) => alert(e),
        () => {
          this.if_txt = 0;
        }
      );
    }
  );
}
}
