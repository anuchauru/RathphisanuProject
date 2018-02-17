import { Component, OnInit } from '@angular/core';
import { ClinicserviceService } from '../clinicservice.service';

@Component({
  selector: 'app-clinic-p5',
  templateUrl: './clinic-p5.component.html',
  styleUrls: ['./clinic-p5.component.css'],
  providers: [ClinicserviceService]
})
export class ClinicP5Component implements OnInit {
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
