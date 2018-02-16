// import Module
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { AppComponent } from '../app.component';

// import model
import { Auth } from './auth.model';

// import Operator
import 'rxjs/add/operator/catch';  // catch error
import 'rxjs/add/observable/throw'; // Throw error

@Injectable()
export class AuthService {

  auth: Auth;
  error: HttpErrorResponse;

  constructor(private httpClient: HttpClient) { }

  register(email: string, password: string): Observable<Auth> {

    const apiURL = 'https://anucha.auth0.com/dbconnections/signup';

    const myheader = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    const body = {
      'client_id': '6XOvEf3WTZy2zdbme7x3cunD5ABo4kuQ',    // Client id
      'email': email,
      'password': password,
      'connection': 'Username-Password-Authentication'    // database name
    };


    return this.httpClient.post<Auth>(apiURL, body, myheader).catch(
      (errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      }
    );
    // body : json ที่ต้องการส่งไป backend
    // header : ของไฟล์ json
  }

  login(email: string, password: string): Observable<any> {
    const apiURL = 'https://anucha.auth0.com/oauth/token';
    const myheader = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    const body = {
      'grant_type': 'password',
      'username': email,
      'password': password,
      'audience': 'https://anucha.auth0.com/api/v2/',    // https://manage.auth0.com/#/apis
      'scope': 'openid',
      'client_id': '6XOvEf3WTZy2zdbme7x3cunD5ABo4kuQ'
    };

    return this.httpClient.post<any>(apiURL, body, myheader).catch(
      (errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      }
    );
    // body : json ที่ต้องการส่งไป backend
    // header : ของไฟล์ json
  }

  getProfile(): Observable<any>{
    const apiURL = 'https://anucha.auth0.com/userinfo';
    const token = JSON.parse(localStorage.getItem('token'));
    const access_token=token.access_token;

    const myheader = {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+access_token)
    };

    return this.httpClient.get<any>(apiURL, myheader).catch(
      (errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      }
    );
    // body : json ที่ต้องการส่งไป backend
    // header : ของไฟล์ json
  }
}
