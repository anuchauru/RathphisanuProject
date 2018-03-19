import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-ph',
  templateUrl: './data-ph.component.html',
  styleUrls: ['./data-ph.component.css']
})
export class DataPhComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => this.id = +params['id']
    );
  }

}
