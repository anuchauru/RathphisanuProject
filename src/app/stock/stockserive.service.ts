import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockseriveService {
  // xampp
  query_tb_stock_medicine = 'http://localhost/otom/query/stock_medicine/query_tb_stock_medicine.php';
  constructor(private http: HttpClient) {}
  // คิวรี่
  get_tb_stock_medicine(): Observable<any> {
    return this.http.get<any>(this.query_tb_stock_medicine);
  }
}
