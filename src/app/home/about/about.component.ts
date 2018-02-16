import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    name = 'Anucha ruangsiriwattanakul';
    company = 'URU';
    logo = './assets/images/logo-small.png';
    logowidth = 200;

    isShow = false;
    staffs: string[] = ['John', 'Rebert', 'Ben'];
    students: Array<string> = ['boy', 'wat', 'tom'];

    drinks: Array<any> = [
        { name: 'Coke', price: 300 },
        { name: 'Pepsi', price: 200 }
    ];

    constructor(private title: Title) { }

    ngOnInit() {
        this.company = 'Uttaradit Rajabath Univerdity';
        this.title.setTitle('About Us');
    }

    save() {
        this.isShow = !this.isShow;
    }
}
