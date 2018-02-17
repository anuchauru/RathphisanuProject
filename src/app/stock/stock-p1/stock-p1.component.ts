import { Component, OnInit } from '@angular/core';
import { StockseriveService } from '../stockserive.service';
@Component({
  selector: 'app-stock-p1',
  templateUrl: './stock-p1.component.html',
  styleUrls: ['./stock-p1.component.css'],
  providers: [StockseriveService]
})
export class StockP1Component implements OnInit {
  data: any;

  constructor( private ssv: StockseriveService) { }

  ngOnInit() {
    this.ssv.get_tb_medicine().subscribe(
      (txtdata) => this.data = txtdata
    );

  }

}
