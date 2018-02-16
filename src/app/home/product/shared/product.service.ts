// import modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// import model
import { Product } from './product.model';

@Injectable()
export class ProductService {
  urlAPI = 'https://codingthailand.com/api/get_courses.php';
  urlAPI2 = 'https://codingthailand.com/api/get_course_detail.php';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlAPI);
  }

  getProductDetail(id: number): Observable<any> {
    const param = new HttpParams().set('course_id', id.toString());
    return this.http.get<any>(this.urlAPI2, { params: param });
  }
}
