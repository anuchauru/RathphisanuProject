import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

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
  query_order_edit = 'http://202.29.52.61/~hosdb/otom/query/stock_medicine/query_order_edit.php';
  query_order_edit_stock = 'http://202.29.52.61/~hosdb/otom/query/stock_medicine/query_order_edit_stock.php';
  edit_order = 'http://202.29.52.61/~hosdb/otom/query/stock_medicine/edit_order.php';
  delete_list = 'http://202.29.52.61/~hosdb/otom/query/stock_medicine/delete_list.php';
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
  get_order_edit(str: any): Observable<any> {
    return this.http.post<any>(this.query_order_edit, str);
  }
  get_order_edit_stock(str: any): Observable<any> {
    return this.http.post<any>(this.query_order_edit_stock, str);
  }
  get_edit_order(str: any): Observable<any> {
    return this.http.post<any>(this.edit_order, str);
  }
  get_delete_list(str: any): Observable<any> {
    return this.http.post<any>(this.delete_list, str);
  }
  // รับยา
}
