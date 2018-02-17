import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockseriveService {
  // xampp
  // คิวรี่
  query_tb_medicine = 'http://localhost/otom/query/query_tb_medicine.php';
  query_tb_unit = 'http://localhost/otom/query/query_tb_unit.php';
  query_id_bill = 'http://localhost/otom/query/query_id_bill.php';

  // insert
  insert_medicine = 'http://localhost/otom/query/stock_medicine/insert_medicine.php';

  constructor(private http: HttpClient) { }
  // คิวรี่
  get_tb_medicine(): Observable<any> {
    return this.http.get<any>(this.query_tb_medicine);
  }
  get_tb_unit(): Observable<any> {
    return this.http.get<any>(this.query_tb_unit);
  }
  get_id_bill(): Observable<any> {
    return this.http.get<any>(this.query_id_bill);
  }
  // insert
  post_medicine(data: any): Observable<any> {
    return this.http.post<any>(this.insert_medicine, data);
  }
}
