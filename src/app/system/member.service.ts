import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { MemBer } from './member.model';

@Injectable()
export class MemberService {
  urlAPi = 'http://localhost/otom/query/member_query.php';
  urlAPi_in = 'http://localhost/otom/query/member_in.php';
  urlAPi_test = 'http://localhost/otom/query/member_test.php';
  constructor( private http: HttpClient) { }
  
  getMember(): Observable<MemBer[]> {
    return this.http.get<MemBer[]>(this.urlAPi);
  }
  postMember(str: any): Observable<any> {
    return this.http.post<any>(this.urlAPi_in, str);
  }
  postEdit(id_text: any): Observable<any> {
    return this.http.post<any>(this.urlAPi_in, id_text);
  }//ส่งเป็นชุดข้อมูล
  postdelete(id_text: any): Observable<any> {
    return this.http.post<any>(this.urlAPi_in, id_text);
  }//ส่งเป็นชุดข้อมูล
  // postEdit(id: number): Observable<any> {
  //   return this.http.post<any>(this.urlAPi_in, {id: id});
  // } ส่งข้อมูลแค่ id อย่างเดียว


}

