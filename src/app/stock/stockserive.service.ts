import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockseriveService {
  // คลังยา
  query_tb_medicine = 'http://202.29.52.61/~hosdb/otom/query/query_tb_medicine.php';
  // คลังยา

  // รับยา คิวรี่
  query_tb_unit = 'http://202.29.52.61/~hosdb/otom/query/query_tb_unit.php';
  query_id_bill = 'http://202.29.52.61/~hosdb/otom/query/stock_medicine/query_id_bill.php';
  insert_medicine = 'http://202.29.52.61/~hosdb/otom/query/stock_medicine/insert_medicine.php';
  array_tb_stock_medicine = 'http://202.29.52.61/~hosdb/otom/query/stock_medicine/array_tb_stock_medicine.php';
  insert_order = 'http://202.29.52.61/~hosdb/otom/query/stock_medicine/insert_order.php';
  insert_order_array = 'http://202.29.52.61/~hosdb/otom/query/stock_medicine/insert_order_array.php';
  query_order = 'http://202.29.52.61/~hosdb/otom/query/stock_medicine/query_order.php';
  // รับยา
  constructor(private http: HttpClient) { }
  // คลังยา
  get_tb_medicine(): Observable<any> {
    return this.http.get<any>(this.query_tb_medicine);
  }
  // คลังยา
  // รับยา
  get_tb_unit(): Observable<any> {
    return this.http.get<any>(this.query_tb_unit);
  }
  get_id_bill(): Observable<any> {
    return this.http.get<any>(this.query_id_bill);
  }
  post_medicine(data: any): Observable<any> {
    return this.http.post<any>(this.insert_medicine, data);
  }
  post_order(data: any): Observable<any> {
    return this.http.post<any>(this.insert_order, data);
  }
  get_medicine_array(data: any): Observable<any> {
    return this.http.post<any>(this.array_tb_stock_medicine, data);
  }
  post_order_array(data: any): Observable<any> {
    return this.http.post<any>(this.insert_order_array, data);
  }
  get_order(): Observable<any> {
    return this.http.get<any>(this.query_order);
  }
  // รับยา
}
