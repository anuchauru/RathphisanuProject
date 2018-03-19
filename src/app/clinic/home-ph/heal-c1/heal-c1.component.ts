import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClinicserviceService } from '../../clinicservice.service';

@Component({
  selector: 'app-heal-c1',
  templateUrl: './heal-c1.component.html',
  styleUrls: ['./heal-c1.component.css'],
  providers: [ClinicserviceService]
})
export class HealC1Component implements OnInit {
  id: any;
  if_txt: any;
  id_ph: any;
  mm: any;
  heal_1: any;
  id_text: any;
  data_heal_1: any;
  num_row: any;
  form: any;
  txt_ap: any;
  data_ap: any;
  cn_1: any;
  txt_tp: any;
  data_tp: any;
  appoint = 0;
  adjust_plan = 0;
  txt: any;
  data: any;
  constructor(private route: ActivatedRoute, private clsv: ClinicserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => this.id = +params['id']
    );
    this.id_ph = this.id;
    this.if_txt = 'table';
    this.id_text = {
      id_ph: this.id,
      mm: 'query_tb_clinic_1'
    };
    this.clsv.get_heal_1(this.id_text).subscribe(
      (txtdata) => this.data_heal_1 = txtdata,
      (e) => alert(e),
      () => {
        if (this.data_heal_1 === 0) {
          this.data_heal_1 = [];
        }
      }
    );
    this.id_text = {
      id_ph: this.id,
      mm: 'query_numrow'
    };
    this.clsv.get_heal_1(this.id_text).subscribe(
      (txtdata) => this.num_row = txtdata
    );
  }

  // เพิ่มข้อมูล
  myinsert() {
    this.if_txt = 'insert';
    this.mm = 'insert';
  }
  // เพิ่มวินิจฉัยโรค
  insert_heal_1(txt: any) {
    this.clsv.get_heal_1(txt).subscribe(
      (txtdata) => this.heal_1 = txtdata,
      (e) => alert(e),
      () => {
        this.if_txt = 'table';
      }
    );
  }
  // ---
  // edit
  my_edit(cn_1: any) {
    this.if_txt = 'edit';
    this.form = 'show';
    this.cn_1 = cn_1;
    this.txt_ap = {
      cn_1: cn_1,
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
  in_appoint(cn_1: any) {
    this.txt_tp = {
      cn_1: cn_1,
      mm: 'query_tb_tplan_clinic_1'
    };
    this.clsv.get_heal_1(this.txt_tp).subscribe(
      (txtdata) => this.data_tp = txtdata,
      (e) => alert(e),
      () => {
        this.appoint = 1;
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
          cn_1: this.cn_1,
          mm: 'query_tb_appoint_1'
        };
        this.clsv.get_heal_1(this.txt_ap).subscribe(
          (txtdata) => this.data_ap = txtdata,
          (e) => alert(e),
          () => {
            this.appoint = 0;
          }
        );
      }
    );
  }
  my_back() {
    this.appoint = 0;
  }

}
