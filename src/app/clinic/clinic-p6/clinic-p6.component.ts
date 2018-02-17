import { Component, OnInit } from '@angular/core';
import { ClinicserviceService } from '../clinicservice.service';

@Component({
  selector: 'app-clinic-p6',
  templateUrl: './clinic-p6.component.html',
  styleUrls: ['./clinic-p6.component.css'],
  providers: [ClinicserviceService]
})
export class ClinicP6Component implements OnInit {
  if_text = 'table';
  data: any;
  constructor(private cvl: ClinicserviceService) { }

  ngOnInit() {
    this.cvl.get_tb_screening_cli().subscribe(
      (txtdata) => this.data = txtdata,
      (error) => alert(error),
      () => {
        console.log(this.data);
      }
    );
  }

}
