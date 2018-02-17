import { Component, OnInit } from '@angular/core';
import { StockseriveService } from '../stockserive.service';
@Component({
  selector: 'app-stock-p0',
  templateUrl: './stock-p0.component.html',
  styleUrls: ['./stock-p0.component.css'],
  providers: [StockseriveService]
})
export class StockP0Component implements OnInit {
  data: any;

  constructor( private ssv: StockseriveService) { }

  ngOnInit() {
    this.ssv.get_tb_medicine().subscribe(
      (txtdata) => this.data = txtdata
    );

  }

}
