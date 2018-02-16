import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = './assets/images/logo-small.png';
  
  constructor( private router: Router ) { }

  ngOnInit() {
  }
  logout() {
      sessionStorage.removeItem('data');
      // window.location.reload(); 
      // this.router.navigate(['']);
      window.location.href = '';
  }

}
