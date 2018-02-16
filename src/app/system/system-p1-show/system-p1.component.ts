import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { MemBer } from '../member.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


declare var $: any;

@Component({
  selector: 'app-system-p1',
  templateUrl: './system-p1.component.html',
  styleUrls: ['./system-p1.component.css'],
  providers: [MemberService]
})
export class SystemP1Component implements OnInit {
 member: MemBer[];
 str: any;
 id_text: any;
 member_txt: any;
 postdata: any;
 postdelete: any;
 if_text: string;
 m_acc_txt: number;
  constructor(
    private membersv: MemberService,
    private router: Router,
    private location: Location
    ) {
    this.membersv.getMember().subscribe(
      (txcourse) => this.member = txcourse,
      (error) => alert(error)
    );

   }

  ngOnInit() {
    // $("#test").click(function(){
    //   alert('hi');
    // });
    // $('#test2').val("xxxx");
    // $('#test3').html("xxxx");
    this.if_text = 'table';
    this.m_acc_txt = 1;
  }
  // submit(txform: any) {
  //   txform.mm_insert = 'mm_insert';
  //   this.str = {
  //     m_name: txform.m_name,
  //     m_lastname: txform.m_lastname,
  //     m_acc: txform.m_acc,
  //     mm_insert: txform.mm_insert
  //   };
  //   this.membersv.postMember(this.str).subscribe(
  //     (tsform) => this.member_txt = tsform,
  //     (error) => alert(error),
  //     () => {
  //       console.log(this.member_txt);
  //       console.log('เสร็จเรียบร้อย');
  //       $('#exampleModal').modal('hide');
  //       //this.router.navigate(['../system',{outlets:{'c2':['s1']}}]);
  //     //  window.location.reload(); 
  //     }
  //   );
  // }
  // myclick(id: number){
  //   this.membersv.postEdit(id).subscribe(
  //     (data) => this.postdata = data,
  //     (error) => alert(error),
  //     () => {
  //       console.log(this.postdata);
  //       console.log('เสร็จเรียบร้อย');
  //      }
  //   );

  // }

  // แก้ไข
  myclick(id: any){
    this.if_text = 'edit';
    this.id_text = {
          m_id: id,
          mm_edit_query: 'mm_edit_query'
         };
    // alert(this.id_text.mm_edit);
    this.membersv.postEdit(this.id_text).subscribe(
      (data) => this.postdata = data,
      (error) => alert(error),
      () => {
        console.log(this.postdata);
        //  this.router.navigate(['/system',{outlets:{'c2':['s1']}}]); คำสั่งเปลียนหน้า
       }
    );

  //   this.router.navigate([
  //     '/system',{outlets:{'c2':['s3','id',id]}}
  // ]); ส่งข้อมูลคนละหน้า
  }

  edit(txform: any) {
    // alert(txform.m_name);
    // alert(txform.m_lastname);
    this.if_text = 'table';
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
        // this.router.navigate(['../system',{outlets:{'c2':['s1']}}]); คำสั่งเปลียนหน้า
        this.membersv.getMember().subscribe(
          (txcourse) => this.member = txcourse,
          (error) => alert(error)
        );
      }
    );
  }
  // แก้ไข

  // เพิ่มข้อมูล
  myinsert(){
    this.if_text = 'insert';
  }
  
  submit(txform: any) {
    this.if_text = 'table';
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
        // this.router.navigate(['../system',{outlets:{'c2':['s1']}}]); คำสั่งเปลียนหน้า
        this.membersv.getMember().subscribe(
          (txcourse) => this.member = txcourse,
          (error) => alert(error)
        );
      }
    );
  }
  // เพิ่มข้อมูล

  // ลบ
  mydelete(id: any){
    this.id_text = {
          m_id: id,
          mm_delete: 'mm_delete'
         };
    // alert(this.id_text.mm_edit);
    this.membersv.postdelete(this.id_text).subscribe(
      (data) => this.postdelete = data,
      (error) => alert(error),
      () => {
        console.log(this.postdelete);
         //this.router.navigate(['../system',{outlets:{'c2':['s1']}}]);
         // window.location.reload();
        // this.location.replaceState('../system');
        this.membersv.getMember().subscribe(
          (txcourse) => this.member = txcourse,
          (error) => alert(error)
        );
       }
    );

  //   this.router.navigate([
  //     '/system',{outlets:{'c2':['s3','id',id]}}
  // ]);
  }
    // ลบ

  // goBack(): void {
  //   this.location.back();
  // }ตัวอย่าง การใช้ location.back


}


