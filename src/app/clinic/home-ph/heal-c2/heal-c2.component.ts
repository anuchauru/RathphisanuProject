import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClinicserviceService } from '../../clinicservice.service';

@Component({
  selector: 'app-heal-c2',
  templateUrl: './heal-c2.component.html',
  styleUrls: ['./heal-c2.component.css'],
  providers: [ClinicserviceService]
})
export class HealC2Component implements OnInit {
  id: any;
  page: any;
  id_text: any;
  data_heal_2: any;
  mm: any;
  data: any;
  num_row: any;
  appoint = 0;
  txt_tp: any;
  data_tp: any;
  cn_2: any;
  adjust_plan = 0;
  txt_ap: any;
  data_ap: any;
  txt: any;
  constructor(private route: ActivatedRoute, private clsv: ClinicserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => this.id = +params['id']
    );
    this.page = 'table';
    this.id_text = {
      id_ph: this.id,
      mm: 'query_table'
    };
    this.clsv.get_heal_2(this.id_text).subscribe(
      (txtdata) => this.data_heal_2 = txtdata,
      (e) => alert(e),
      () => {
        // console.log(this.data_heal_2);
        if (this.data_heal_2 === 0) {
          this.data_heal_2 = [];
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

  my_insert() {
    this.page = 'insert';
    this.mm = 'insert';
  }
  // เพิ่มข้อมูลแบบประเมินผู้ป่วยทางระบบหายใจ
  insert_heal_2(data: any) {
    // console.log(data);
    this.clsv.get_heal_2(data).subscribe(
      (txtdata) => this.data = txtdata,
      (e) => alert(e),
      () => {
        // console.log(this.data);
        this.page = 'table';
        this.id_text = {
          id_ph: this.id,
          mm: 'query_table'
        };
        this.clsv.get_heal_2(this.id_text).subscribe(
          (txtdata) => this.data_heal_2 = txtdata,
          (e) => alert(e),
          () => {
            if (this.data_heal_2 === 0) {
              this.data_heal_2 = [];
            }
          }
        );
      }
    );
  }
  // page 2
  my_edit(cn_2: any) {
    this.page = 'edit';
    this.cn_2 = cn_2;
    this.txt_ap = {
      cn_2: cn_2,
      mm: 'query_tb_appoint_2'
    };
    this.clsv.get_heal_2(this.txt_ap).subscribe(
      (txtdata) => this.data_ap = txtdata,
      (e) => alert(e),
      () => {
        console.log(this.data_ap);
      }
    );
  }
  in_appoint(cn_2: any) {
    this.txt_tp = {
      cn_2: cn_2,
      mm: 'query_tb_tplan_clinic_2'
    };
    this.clsv.get_heal_2(this.txt_tp).subscribe(
      (txtdata) => this.data_tp = txtdata,
      (e) => alert(e),
      () => {
        this.appoint = 1;
        // console.log(this.data_tp);
      }
    );
  }
  my_adjust_plan() {
    this.adjust_plan = 1;
  }
  cn_adjust_plan() {
    this.adjust_plan = 0;
  }
  my_back() {
    this.appoint = 0;
  }
  insert_tplan(data: any) {
    this.txt = {
      cn_2: data.cn_2,
      date_at: data.date_at,
      etc_hospital: data.etc_hospital,
      id_tp_c_2: data.id_tp_c_2,
      sta_end: data.sta_end,
      mm: 'insert_tb_tplan_clinic_2',
      tt_sta_1: data.tt_sta_1,
      tt_sta_2: data.tt_sta_2,
      tt_sta_3: data.tt_sta_3,
      tt_sta_4: data.tt_sta_4,
      tt_sta_5: data.tt_sta_5,
      tt_sta_6: data.tt_sta_6,
      tt_sta_7: data.tt_sta_7,
      tt_sta_8: data.tt_sta_8,
      tt_sta_9: data.tt_sta_9,
      tt_sta_10: data.tt_sta_10,
      tt_sta_txt: data.tt_sta_txt
    };
    // console.log(data);
    this.clsv.get_heal_2(this.txt).subscribe(
      (txtdata) => this.data = txtdata,
      (e) => alert(e),
      () => {
        // console.log(this.data);
        this.txt_ap = {
          cn_2: this.cn_2,
          mm: 'query_tb_appoint_2'
        };
        this.clsv.get_heal_2(this.txt_ap).subscribe(
          (txtdata) => this.data_ap = txtdata,
          (e) => alert(e),
          () => {
            this.appoint = 0;
          }
        );
      }
    );
  }

}

