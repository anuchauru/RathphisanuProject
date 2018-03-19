import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-ph',
  templateUrl: './home-ph.component.html',
  styleUrls: ['./home-ph.component.css']
})
export class HomePhComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => this.id = +params['id']
    );
  }

}
