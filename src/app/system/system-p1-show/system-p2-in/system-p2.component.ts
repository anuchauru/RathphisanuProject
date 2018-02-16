import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../member.service';
import { MemBer } from '../../member.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-system-p2',
  templateUrl: './system-p2.component.html',
  styleUrls: ['./system-p2.component.css'],
  providers: [MemberService]
})
export class SystemP2Component implements OnInit {
  str: any;
  member_txt: any;
  m_acc_txt: any;
  m: any;
  f: any;
  constructor(private membersv: MemberService, private router: Router) { 

  }

  ngOnInit() {
    this.m_acc_txt = 1;
  
  }

  submit(txform: any) {
    txform.mm_insert = 'mm_insert';
    this.str = {
      m_name: txform.m_name,
      m_lastname: txform.m_lastname,
      add: txform.add,
      tel: txform.tel,
      sex: txform.sex,
      age: txform.age,
      m_acc: txform.m_acc,
      mm_insert: txform.mm_insert
    };
    this.membersv.postMember(this.str).subscribe(
      (tsform) => this.member_txt = tsform,
      (error) => alert(error),
      () => {
        console.log(this.member_txt);
        console.log('เสร็จเรียบร้อย');
        this.router.navigate(['../system',{outlets:{'c2':['s1']}}]);
      }
    );
  }

}
