import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MemberService } from '../../member.service';

@Component({
  selector: 'app-system-p-edit',
  templateUrl: './system-p-edit.component.html',
  styleUrls: ['./system-p-edit.component.css'],
  providers: [MemberService]
})
export class SystemPEditComponent implements OnInit {
id: number;
id_text: any;
postdata: any;
str: any;
text: any;
member_txt: any;
  constructor(private act: ActivatedRoute, private location: Location, private membersv: MemberService, private router: Router) { }

  ngOnInit() {
    this.id = this.act.snapshot.params['id'];
      this.id_text = {
          m_id: this.id,
          mm_edit_query: 'mm_edit_query'
         };
    // alert(this.id_text.mm_edit);    
    this.membersv.postEdit(this.id_text).subscribe(
      (data) => this.postdata = data,
      (error) => alert(error),
      () => {
        console.log(this.postdata);
       }
    );
    
   }

   edit(txform: any) {
    // alert(txform.m_name);
    // alert(txform.m_lastname);
    txform.mm_edit = 'mm_edit';

    this.str = {
      m_id: txform.m_id,
      m_name: txform.m_name,
      m_lastname: txform.m_lastname,
      m_acc: txform.m_acc,
      mm_edit: txform.mm_edit
    };

    this.membersv.postEdit(this.str).subscribe(
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
