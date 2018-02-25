import { Component, OnInit } from '@angular/core';

import { ClinicserviceService } from '../../clinicservice.service';
import { LoginService } from '../../../app.service';


@Component({
  selector: 'app-clinic-m1',
  templateUrl: './clinic-m1.component.html',
  styleUrls: ['./clinic-m1.component.css'],
  providers: [ClinicserviceService, LoginService]
})
export class ClinicM1Component implements OnInit {
  // ประกาศตัวแปล
  data_ph: any;
  data_province: any;
  data_getamphures: any;
  data_district: any;
  data_tb_occupation: any;
  data_token: any;
  data_tb_ethnicity: any;
  data_tb_nationality: any;
  data_tb_religion: any;
  data_id: any;
  data_id_new = 1;
  if_text: string;
  edit_text: string;
  txform: any;
  str: any;
  txt: any;
  ph_txt: any;
  postdata: any;
  id_text: any;
  postdelete: any;
  data: any;
  data_pername: any;
  my_Class = 'style1';
  my_Class1 = 'style2';
  PRENAMEID = '';
  sex = '';
  PROVINCEID = '';
  AMPHURID = '';
  DISTRICTID = '';
  OCCUPATIONID = '';
  OCCUPATIONID1 = '';
  ETHNICITYEID = '';
  NATIONALITYID = '';
  RELIGIONID = '';
  lose = '';
  note = '';
  id_ph: number;
  // แพ้ยา
  id_report_allergys: any;
  id_medicine: any;
  symptom_allergys: any;
  note_allergys: any;
  data_report_allergys: any;
  data_tb_medicine: any;
  name: any;
  name2: any;
  private name_all: any;
  private Allergys: any;
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
  data_delete: any;
  mm: any;
  num_row: number;
  Per_Page = 5;
  Num_Pages: any;
  pstatus: any;
  count_ar = [];
  page_txt: any;

  constructor(private clsv: ClinicserviceService, private token: LoginService) {
    this.pstatus = this.clsv.pstatus;
    this.page_txt = {
      num_page: 1,
      num_list: this.Per_Page
    };
    this.clsv.getph(this.page_txt).subscribe(
      (txtdata) => this.data_ph = txtdata
    );
    this.clsv.get_num_row().subscribe(
      (txtdata) => this.num_row = txtdata,
      (error) => alert(error),
      () => {
        if (this.num_row <= this.Per_Page) {
          this.Num_Pages = 1;
        } else if ((this.num_row % this.Per_Page) == 0) {
          this.Num_Pages = (this.num_row / this.Per_Page);
        } else {
          this.Num_Pages = (this.num_row / this.Per_Page) + 1;
          this.Num_Pages = Math.floor(this.Num_Pages);
        }
        for (let i = 0; i < this.Num_Pages; i++) {
          this.count_ar.push(i);
        }
        console.log(this.count_ar);
      }
    );
  }

  ngOnInit() {
    // เก็บค่า
    this.if_text = 'table';
    this.data = JSON.parse(sessionStorage.getItem('data'));
    this.Allergys = [];
  }
  // จำนวนแสดง
  num_page(p: any) {
    this.page_txt = {
      num_page: 1,
      num_list: p
    };
    this.count_ar = [];
    this.clsv.getph_page(this.page_txt).subscribe(
      (txtdata) => this.data_ph = txtdata
    );
    this.clsv.get_num_row().subscribe(
      (txtdata) => this.num_row = txtdata,
      (error) => alert(error),
      () => {
        if (this.num_row <= this.Per_Page) {
          this.Num_Pages = 1;
        } else if ((this.num_row % this.Per_Page) == 0) {
          this.Num_Pages = (this.num_row / this.Per_Page);
        } else {
          this.Num_Pages = (this.num_row / this.Per_Page) + 1;
          this.Num_Pages = Math.floor(this.Num_Pages);
        }
        for (let i = 0; i < this.Num_Pages; i++) {
          this.count_ar.push(i);
        }
      }
    );
  }

  // เลือกหน้า
  selete_page(id: any) {
    this.page_txt = {
      num_page: id,
      num_list: this.Per_Page
    };
    this.clsv.getph_page(this.page_txt).subscribe(
      (txtdata) => this.data_ph = txtdata
    );
    console.log(id);
  }

  // เรียกฟอรฺ์มข้อมูลผู้ป่วย
  myinsert() {
    this.if_text = 'insert';
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
    this.clsv.getph_id().subscribe(
      (txtdata) => this.data_id = txtdata,
      (error) => alert(error),
      () => {
        this.id_ph = this.data_id;
      }
    );
  }

  // ยกเลิกการเพิ่มข้อมูลผู้ป่วย 
  mycancelinsert() {
    this.if_text = 'table';
  }

  // ปุ่มย้อนกลับ
  mycanceledit() {
    this.if_text = 'table';
  }

  // เลือกอำเภอ
  my_amphures(datal) {
    this.clsv.postamphures(datal).subscribe(
      (txdata) => this.data_getamphures = txdata,
      (error) => alert(error),
      () => {
        this.clsv.postdistrict(null).subscribe(
          (txdata) => this.data_district = txdata,
          (error) => alert(error),
          () => {
            this.AMPHURID = '';
            this.DISTRICTID = '';
            this.postdata.AMPHUR_ID = '';
            this.postdata.DISTRICT_ID = '';
          }
        );
      }
    );
  }

  // เลือกตำบล
  my_district(datal) {
    this.clsv.postdistrict(datal).subscribe(
      (txdata) => this.data_district = txdata,
      (error) => alert(error),
      () => {
        this.DISTRICTID = '';
        this.postdata.DISTRICT_ID = '';
      }
    );
  }

  // เรียกฟอร์มการแพ้ยา
  myAllergys() {
    // console.log(this.Allergys);
    this.my_Class = 'style2';
    this.my_Class1 = 'style1';
    this.id_report_allergys = '';
    this.id_medicine = '';
    this.symptom_allergys = '';
    this.note_allergys = '';
    this.clsv.get_report_allergys().subscribe((txtdata) => this.data_report_allergys = txtdata);
    this.clsv.get_tb_medicine().subscribe((txtdata) => this.data_tb_medicine = txtdata);
  }

  // บันทึกข้อมูลการแพ้ยาเข้า array
  submitdrug(txform1: any) {
    this.Allergys.unshift(txform1);
    this.name_all = [];
    this.my_Class = 'style1';
    this.my_Class1 = 'style2';
    this.Allergys.forEach((i) => {
      this.data_report_allergys.forEach((e) => {
        if (i.id_report_allergys == e.id_report_allergys) {
          this.name = e.name_report_allergys;
        }
      });
      this.data_tb_medicine.forEach((e) => {
        if (i.id_medicine == e.id_medicine) {
          this.name2 = e.n_medicine;
        }
      });
      this.name_all.push({
        name: this.name,
        age: this.name2
      });
    });
    console.log(this.Allergys);
    console.log(this.name_all);
  }

  // ลบการแพ้ยา(ฐานข้อมูล)
  remove_data(ar) {
    this.data_delete.unshift({
      id_allergys: ar.id_allergys
    });
    console.log(this.data_delete);
    this.data_allergys.forEach((element, index) => {
      if (element == ar) {
        this.data_allergys.splice(index, 1);
      }
    });
  }

  // ลบการแพ้ยา(array)
  remove(ar) {
    this.name_all.forEach((element, index) => {
      if (element == ar) {
        this.name_all.splice(index, 1);
        this.Allergys.splice(index, 1);
      }
    });
  }

  // ยกเลิกการแพ้ยา
  mycancelAllergy() {
    this.my_Class = 'style1';
    this.my_Class1 = 'style2';
  }

  // เพิ่มข้อมูลผู้ป่วย
  submit(txform: any) {
    this.page_txt = {
      num_page: 1,
      num_list: this.Per_Page
    };
    this.txt = {
      token: this.data.token,
      m_id: this.data.m_id
    };
    this.token.get_token(this.txt).subscribe(
      (txtdata) => this.data_token = txtdata,
      (error) => alert(error),
      () => {
        if (this.data_token.status === 'ture') {
          this.if_text = 'table';
          txform.mm_insert = 'mm_insert';
          this.str = {
            id_ph: txform.id_ph,
            PRENAME_ID: txform.PRENAME_ID,
            name_ph: txform.name_ph,
            lastname_ph: txform.lastname_ph,
            birthday: txform.birthday,
            time_birthday: txform.time_birthday,
            sex_ph: txform.sex_ph,
            no: txform.no,
            moo: txform.moo,
            road: txform.road,
            PROVINCE_ID: txform.PROVINCE_ID,
            AMPHUR_ID: txform.AMPHUR_ID,
            DISTRICT_ID: txform.DISTRICT_ID,
            OCCUPATION_ID: txform.OCCUPATION_ID,
            tel: txform.tel,
            ETHNICITYE_ID: txform.ETHNICITYE_ID,
            NATIONALITY_ID: txform.NATIONALITY_ID,
            RELIGION_ID: txform.RELIGION_ID,
            mm_insert: txform.mm_insert
          };
          this.clsv.postph(this.str).subscribe(
            () => {
              this.clsv.postarray(this.Allergys).subscribe(
                () => {
                  this.clsv.getph(this.page_txt).subscribe((txtdata) => this.data_ph = txtdata);
                }
              );
            }
          );
          // this.router.navigate(['../system',{outlets:{'c2':['s1']}}]); คำสั่งเปลียนหน้า
        } else {
          sessionStorage.removeItem('data');
          // window.location.reload();
          // this.router.navigate(['']);
          window.location.href = '';
        }
        // console.log(this.data_token);
      }
    );
  }

  // แสดงข้อมูลผู้ป่วย
  myclick(id: any) {
    this.data_delete = [];
    this.if_text = 'show';
    this.edit_text = 'show';
    this.id_text = {
      id_ph: id,
      mm_edit_query: 'mm_edit_query'
    };
    this.clsv.postEph(this.id_text).subscribe(
      (data) => this.postdata = data,
      (error) => alert(error),
      () => {
        this.PRENAMEID = this.postdata.PRENAME_ID;
        this.name_ph = this.postdata.name_ph;
        this.lastname_ph = this.postdata.lastname_ph;
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
        this.clsv.postamphures(this.postdata.PROVINCE_ID).subscribe(
          (txdata) => this.data_getamphures = txdata
        );
        this.clsv.postdistrict(this.postdata.AMPHUR_ID).subscribe(
          (txdata) => this.data_district = txdata
        );
      }
    );
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
    this.clsv.post_query_tb_allergys(this.id_text.id_ph).subscribe(
      (txtdata) => this.data_allergys = txtdata
    );
  }

  // เรียกฟอร์มแก้ไข
  myedit() {
    this.edit_text = 'edit';
    this.Allergys = [];
    this.name_all = [];
  }

  // ยกเลิกการแก้ไขข้อมูลผู้ป่วย
  mycancen() {
    this.Allergys = [];
    this.name_all = [];
    this.if_text = 'show';
    this.edit_text = 'show';
    this.clsv.postEph(this.id_text).subscribe(
      (data) => this.postdata = data,
      (error) => alert(error),
      () => {
        this.PRENAMEID = this.postdata.PRENAME_ID;
        this.name_ph = this.postdata.name_ph;
        this.lastname_ph = this.postdata.lastname_ph;
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
        this.clsv.postamphures(this.postdata.PROVINCE_ID).subscribe(
          (txdata) => this.data_getamphures = txdata
        );
        this.clsv.postdistrict(this.postdata.AMPHUR_ID).subscribe(
          (txdata) => this.data_district = txdata
        );
      }
    );

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
    this.clsv.post_query_tb_allergys(this.id_text.id_ph).subscribe(
      (txtdata) => this.data_allergys = txtdata
    );
    this.data_delete = [];
  }

  // บันทึกการแก้ไขข้อมูลผู้ป่วย
  edit(txform: any) {
    this.if_text = 'show';
    this.edit_text = 'show';
    txform.mm_edit = 'mm_edit';
    this.str = {
      id_ph: txform.id_ph,
      PRENAME_ID: txform.PRENAME_ID,
      name_ph: txform.name_ph,
      lastname_ph: txform.lastname_ph,
      birthday: txform.birthday,
      time_birthday: txform.time_birthday,
      sex_ph: txform.sex_ph,
      no: txform.no,
      moo: txform.moo,
      road: txform.road,
      PROVINCE_ID: txform.PROVINCE_ID,
      AMPHUR_ID: txform.AMPHUR_ID,
      DISTRICT_ID: txform.DISTRICT_ID,
      OCCUPATION_ID: txform.OCCUPATION_ID,
      tel_ph: txform.tel_ph,
      ETHNICITYE_ID: txform.ETHNICITYE_ID,
      NATIONALITY_ID: txform.NATIONALITY_ID,
      RELIGION_ID: txform.RELIGION_ID,
      mm_edit: txform.mm_edit
    };
    this.clsv.postEph(this.str).subscribe(
      (tsform) => this.postdata = tsform,
      (error) => alert(error),
      () => {
        if (this.Allergys.length > 0) {
          this.clsv.postarray(this.Allergys).subscribe(
            (tsform) => this.data = tsform,
            (error) => alert(error),
            () => {
              this.clsv.post_query_tb_allergys(txform.id_ph).subscribe(
                (txtdata) => this.data_allergys = txtdata
              );
            }
          );
        }
        if (this.data_delete.length > 0) {
          this.clsv.post_delete(this.data_delete).subscribe(
            (tsform) => this.postdata = tsform
          );
        }
      }
    );
  }

  // ลบ
  mydelete(id: any) {
    this.page_txt = {
      num_page: 1,
      num_list: this.Per_Page
    };
    this.id_text = {
      id_ph: id,
      mm_delete: 'mm_delete'
    };
    this.clsv.postdelete(this.id_text).subscribe(
      (data) => this.postdelete = data,
      (error) => alert(error),
      () => {
        this.clsv.getph(this.page_txt).subscribe(
          (txtdata) => this.data_ph = txtdata,
          (error) => alert(error)
        );
      }
    );
  }
  // ส่งคัดกรอง
  myScreening() {
    this.if_text = 'table';
    this.id_text = {
      id_ph: this.id_text.id_ph,
      mm_insert: 'tb_screening'
    };
    this.clsv.postph(this.id_text).subscribe(
      (txtdata) => this.postdata = txtdata,
      (error) => alert(error),
      () => {
        console.log(this.postdata);
      }
    );
  }

  // ค้นหา
  search(txform: any) {
    this.if_text = 'table';
    txform.mm_insert = 'search';
    this.str = {
      search: txform.search,
      key_search: txform.key_search,
      mm_insert: txform.mm_insert
    };
    this.clsv.postph(this.str).subscribe(
      (tsform) => this.data_ph = tsform,
      (error) => alert(error),
      () => {
        console.log(this.data_ph);
        // this.router.navigate(['../system',{outlets:{'c2':['s1']}}]); คำสั่งเปลียนหน้า
        // this.clsv.getph().subscribe(
        //   (txtdata) => this.data_ph = txtdata,
        //   (error) => alert(error),
        //   () => {
        //   }
        // );
      }
    );
  }

  // แสดงข้อมูลรายบุคล
  pagea() {
    this.if_text = 'show';
    this.edit_text = 'show';
  }

  // แสดงข้อมูลการเข้ารับบริการ 
  pageb() {
    this.if_text = 'show2';
  }

  // พิมพ์
  print() {
    window.print();
  }

  // ตัวอย่าง การเช็ค token
  // submit(txform: any) {
  //   this.str = {
  //         token: this.data.token,
  //         m_id: this.data.m_id
  //        };
  //   this.token.get_token(this.str).subscribe(
  //     (txtdata) => this.data_token = txtdata,
  //         (error) => alert(error),
  //         () => {
  //           if(this.data_token.status === 'ture') {
  //             alert('ture');
  //           } else {
  //             alert('false');
  //             sessionStorage.removeItem('data');
  //             // window.location.reload();
  //             // this.router.navigate(['']);
  //             window.location.href = '';
  //           }
  //           console.log(this.data_token);
  //         }
  //   );
  // }
}
