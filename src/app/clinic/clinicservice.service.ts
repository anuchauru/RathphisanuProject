import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { history, tb_screening } from './clinic.model';

@Injectable()
export class ClinicserviceService {
  // xampp
  // urlAPi = 'http://localhost/otom/query/ph_query.php';
  // urlAPi_pername = 'http://localhost/otom/query/query_pername.php';
  // urlAPi_province = 'http://localhost/otom/query/query_province.php';
  // urlAPi_room = 'http://localhost/otom/query/query_rooms.php';
  // urlAPi_amphures = 'http://localhost/otom/query/query_amphures.php';
  // urlAPi_district = 'http://localhost/otom/query/query_district.php';
  // urlAPi_tb_occupation = 'http://localhost/otom/query/query_tb_occupation.php';
  // urlAPi_tb_ethnicity = 'http://localhost/otom/query/query_tb_ethnicity.php';
  // urlAPi_tb_nationality = 'http://localhost/otom/query/query_tb_nationality.php';
  // urlAPi_tb_religion = 'http://localhost/otom/query/query_tb_religion.php';
  // urlAPi_in_arr = 'http://localhost/otom/query/in_allergys.php';
  // urlAPi_id = 'http://localhost/otom/query/ph_query_id.php';
  // urlAPi_report_allergys = 'http://localhost/otom/query//query_report_allergys.php';
  // urlAPi_tb_medicine = 'http://localhost/otom/query/query_tb_medicine.php';
  // query_tb_allergys = 'http://localhost/otom/query/query_allergys.php';
  // urlAPi_tb_screening = 'http://localhost/otom/query/tb_screening_query.php';
  // urlAPi_tb_send_check = 'http://localhost/otom/query/tb_send_check_query.php';
  // urlAPi_in = 'http://localhost/otom/query/ph_in_edit_del.php';
  // urlAPi_Screening = 'http://localhost/otom/query/tb_screening_in_edit_del.php';
  // urlAPi_test = 'http://localhost/otom/query/member_test.php';
  // del_tb_allergys = 'http://localhost/otom/query/del_tb_allergys.php';
  // ph_query_num = 'http://localhost/otom/query/ph_query_num.php';

  // host
  urlAPi = 'http://202.29.52.61/~hosdb/otom/query/ph_query.php';
  urlAPi_pername = 'http://202.29.52.61/~hosdb/otom/query/query_pername.php';
  urlAPi_province = 'http://202.29.52.61/~hosdb/otom/query/query_province.php';
  urlAPi_room = 'http://202.29.52.61/~hosdb/otom/query/query_rooms.php';
  urlAPi_amphures = 'http://202.29.52.61/~hosdb/otom/query/query_amphures.php';
  urlAPi_district = 'http://202.29.52.61/~hosdb/otom/query/query_district.php';
  urlAPi_tb_occupation = 'http://202.29.52.61/~hosdb/otom/query/query_tb_occupation.php';
  urlAPi_tb_ethnicity = 'http://202.29.52.61/~hosdb/otom/query/query_tb_ethnicity.php';
  urlAPi_tb_nationality = 'http://202.29.52.61/~hosdb/otom/query/query_tb_nationality.php';
  urlAPi_tb_religion = 'http://202.29.52.61/~hosdb/otom/query/query_tb_religion.php';
  urlAPi_in_arr = 'http://202.29.52.61/~hosdb/otom/query/in_allergys.php';
  urlAPi_id = 'http://202.29.52.61/~hosdb/otom/query/ph_query_id.php';
  urlAPi_report_allergys = 'http://202.29.52.61/~hosdb/otom/query/query_report_allergys.php';
  urlAPi_tb_medicine = 'http://202.29.52.61/~hosdb/otom/query/query_tb_medicine.php';
  query_tb_allergys = 'http://202.29.52.61/~hosdb/otom/query/query_allergys.php';
  urlAPi_tb_screening = 'http://202.29.52.61/~hosdb/otom/query/tb_screening_query.php';
  urlAPi_tb_send_check = 'http://202.29.52.61/~hosdb/otom/query/tb_send_check_query.php';
  urlAPi_in = 'http://202.29.52.61/~hosdb/otom/query/ph_in_edit_del.php';
  urlAPi_Screening = 'http://202.29.52.61/~hosdb/otom/query/tb_screening_in_edit_del.php';
  urlAPi_test = 'http://202.29.52.61/~hosdb/otom/query/member_test.php';
  del_tb_allergys = 'http://202.29.52.61/~hosdb/otom/query/del_tb_allergys.php';
  ph_query_num = 'http://202.29.52.61/~hosdb/otom/query/ph_query_num.php';

  pstatus: string[] = ['รอคัดกรอง', 'รอตรวจ', 'เสร็จสิ้น'];

  // ห้องตรวจ
  query_tb_screening = 'http://202.29.52.61/~hosdb/otom/query/clinic/query_tb_screening.php';

  constructor(private http: HttpClient) { }

  // คิวรี่
  getph(page: any): Observable<history[]> {
    return this.http.post<history[]>(this.urlAPi, page);
  }
  getph_page(id: any): Observable<history[]> {
    return this.http.post<history[]>(this.urlAPi, id);
  }
  get_num_row(): Observable<any> {
    return this.http.get<any>(this.ph_query_num);
  }
  getpername(): Observable<any> {
    return this.http.get<any>(this.urlAPi_pername);
  }
  getprovince(): Observable<any> {
    return this.http.get<any>(this.urlAPi_province);
  }
  getrooms(): Observable<any> {
    return this.http.get<any>(this.urlAPi_room);
  }
  postamphures(str: any): Observable<any> {
    return this.http.post<any>(this.urlAPi_amphures, str);
  }
  postdistrict(str: any): Observable<any> {
    return this.http.post<any>(this.urlAPi_district, str);
  }
  gettb_occupation(): Observable<any> {
    return this.http.get<any>(this.urlAPi_tb_occupation);
  }
  gettb_ethnicity(): Observable<any> {
    return this.http.get<any>(this.urlAPi_tb_ethnicity);
  }
  gettb_nationality(): Observable<any> {
    return this.http.get<any>(this.urlAPi_tb_nationality);
  }
  gettb_religion(): Observable<any> {
    return this.http.get<any>(this.urlAPi_tb_religion);
  }
  getph_id(): Observable<any> {
    return this.http.get<any>(this.urlAPi_id);
  }
  get_report_allergys(): Observable<any> {
    return this.http.get<any>(this.urlAPi_report_allergys);
  }
  get_tb_medicine(): Observable<any> {
    return this.http.get<any>(this.urlAPi_tb_medicine);
  }
  get_tb_screening(): Observable<tb_screening[]> {
    return this.http.get<tb_screening[]>(this.urlAPi_tb_screening);
  }
  get_tb_send_check(): Observable<tb_screening[]> {
    return this.http.get<tb_screening[]>(this.urlAPi_tb_send_check);
  }
  post_query_tb_allergys(str: any): Observable<any> {
    return this.http.post<any>(this.query_tb_allergys, str);
  }
  postarray(str: any): Observable<any> {
    return this.http.post<any>(this.urlAPi_in_arr, str);
  }
  postph(str: any): Observable<any> {
    return this.http.post<any>(this.urlAPi_in, str);
  }
  post_delete(str: any): Observable<any> {
    return this.http.post<any>(this.del_tb_allergys, str);
  }

  postScreening(str: any): Observable<any> {

    console.log(str);
    return this.http.post<any>(this.urlAPi_Screening, str);
  }
  postEph(id_text: any): Observable<any> {
    return this.http.post<any>(this.urlAPi_in, id_text);
  }
  // ส่งเป็นชุดข้อมูล
  postdelete(id_text: any): Observable<any> {
    return this.http.post<any>(this.urlAPi_in, id_text);
  }
  // ส่งเป็นชุดข้อมูล
  // postEdit(id: number): Observable<any> {
  //   return this.http.post<any>(this.urlAPi_in, {id: id});
  // } ส่งข้อมูลแค่ id อย่างเดียว

  // ห้องตรวจ
  get_tb_screening_cli(): Observable<any> {
    return this.http.get<any>(this.query_tb_screening);
  }
  // ห้องยา
  get_tb_screening_med(): Observable<any> {
    return this.http.get<any>(this.query_tb_screening);
  }
  // ห้องฟิตเน็ต
  get_tb_screening_fin(): Observable<any> {
    return this.http.get<any>(this.query_tb_screening);
  }
}


