import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  // xampp
  urlAPi_login = 'http://localhost/otom/query/login.php';
  urlAPi_token = 'http://localhost/otom/query/chack_token.php';
  // host
  // urlAPi_login = 'http://202.29.52.61/~hosdb/otom/query/login.php';
  // urlAPi_token = 'http://202.29.52.61/~hosdb/query/chack_token.php';

  constructor( private http: HttpClient) { }

  get_login(str: any): Observable<any> {
    return this.http.post<any>(this.urlAPi_login, str);
  }

  get_token(str: any): Observable<any> {
    return this.http.post<any>(this.urlAPi_token, str);
  }

}
