import { Component, OnInit } from '@angular/core';

import { LoginService } from '../app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent implements OnInit {
  title = 'app angular 4';
  token: string;
  userid= 'user01';
  if_text: any;
  str: any;
  data: any;
  isLogin: any;
  text: any;
  constructor(private loginl: LoginService) { }

  ngOnInit() {
    // localStorage.removeItem('data');
    this.data =  JSON.parse(sessionStorage.getItem('data'));
    if (!this.data) {
      this.if_text = 'login';
    }else {
      this.if_text = this.data.status_login;
      this.token = this.data.token;
    }
    // console.log(this.token);
    }
   // บันทึกข้อมูล
   submit(txform: any) {
    this.str = {
      user: txform.user,
      password: txform.pass,
      mm: 'login'
    };
    
    // console.log(this.str);
    this.loginl.get_login(this.str).subscribe(
      (isLogin) => this.isLogin = isLogin,
      (error) => alert(error),
      () => {
        sessionStorage.setItem('data', JSON.stringify(this.isLogin));
        this.if_text = this.isLogin.status_login;
        if ( this.if_text === 'login') {
          alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่านใหม่!!');
        }
        // console.log(this.isLogin.status_login);
        // this.router.navigate(['../system',{outlets:{'c2':['s1']}}]); คำสั่งเปลียนหน้า
        // this.clsv.get_tb_screening().subscribe(
        //   (txtdata) => this.data_ph = txtdata,
        //   (error) => alert(error),
        //   () => {
        //   }
        // );
      }
    );
  }  

//   login(loginForm: any) {
//     this.authService.login(loginForm.email, loginForm.password).subscribe(
//        (loginFeedback) =>   {
//          this.isLogin = true;
//          this.loginFeedback = loginFeedback;
//          localStorage.setItem('token', JSON.stringify(this.loginFeedback));
//          this.authService.getProfile().subscribe(
//              (profile) => {
//                this.profile = profile;
//                localStorage.setItem('profile', JSON.stringify(profile));
//              }
//          );
//        },
//        (error) => {
//            console.log(error);
//        }
//     );
//  }

}
