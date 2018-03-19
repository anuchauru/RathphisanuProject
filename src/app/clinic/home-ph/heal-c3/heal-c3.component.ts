import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heal-c3',
  templateUrl: './heal-c3.component.html',
  styleUrls: ['./heal-c3.component.css']
})
export class HealC3Component implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => this.id = +params['id']
    );
  }

}
