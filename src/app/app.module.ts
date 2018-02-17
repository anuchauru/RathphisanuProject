import { BrowserModule } from '@angular/platform-browser';  // Display on browser
import { NgModule } from '@angular/core';                   // Core for angular
import { RouterModule } from '@angular/router';             // Route path
import { RouterLinkActive } from '@angular/router';             // Route path
import { HttpClientModule } from '@angular/common/http';    // Http input/output
import { FormsModule } from '@angular/forms';

// Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
// import { NewsComponent } from './news/news.component';
// import { LoginComponent } from './login/login.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './home/about/about.component';
import { ProductComponent } from './home/product/product.component';
import { ProductDetailComponent } from './home/product/product-detail/product-detail.component';
// import { RegisterComponent } from './login/register/register.component';

import { ClinicComponent } from './clinic/clinic.component';
import { ClinicP1Component } from './clinic/clinic-p1/clinic-p1.component';
import { ClinicP2Component } from './clinic/clinic-p2/clinic-p2.component';
import { ClinicM1Component } from './clinic/clinic-p2/clinic-m1/clinic-m1.component';
import { ClinicM2Component } from './clinic/clinic-p2/clinic-m2/clinic-m2.component';
import { ClinicM3Component } from './clinic/clinic-p2/clinic-m3/clinic-m3.component';
import { ClinicP3Component } from './clinic/clinic-p3/clinic-p3.component';
import { ClinicP4Component } from './clinic/clinic-p4/clinic-p4.component';
import { ClinicP5Component } from './clinic/clinic-p5/clinic-p5.component';
import { ClinicP6Component } from './clinic/clinic-p6/clinic-p6.component';

import { HomeComponent } from './home/home.component';

// import Service
import { ProductService } from './home/product/shared/product.service';
// import { NewsService } from './news/shared/news.service';
import { AuthService } from './shared/auth.service';

import { SystemComponent } from './system/system.component';
import { SystemP1Component } from './system/system-p1-show/system-p1.component';
import { SystemP2Component } from './system/system-p1-show/system-p2-in/system-p2.component';
import { SystemPEditComponent } from './system/system-p1-show/system-p-edit/system-p-edit.component';
import { SystemP4Component } from './system/system-p4/system-p4.component';

import { StockComponent } from './stock/stock.component';
import { StockP0Component } from './stock/stock-p0/stock-p0.component';
import { StockP1Component } from './stock/stock-p1/stock-p1.component';
import { StockP2Component } from './stock/stock-p2/stock-p2.component';
import { StockP3Component } from './stock/stock-p3/stock-p3.component';
import { StockP4Component } from './stock/stock-p4/stock-p4.component';

import { MyMoneyComponent } from './my-money/my-money.component';
import { MyMoneyP1Component } from './my-money/my-money-p1/my-money-p1.component';
import { MyMoneyP2Component } from './my-money/my-money-p2/my-money-p2.component';
import { MyMoneyP3Component } from './my-money/my-money-p3/my-money-p3.component';
import { LoginUserComponent } from './login-user/login-user.component';

// const token: String = 'testtoken';


@NgModule({
  declarations: [
    // Declare Component
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    BestsellerComponent,
    // NewsComponent,
    // LoginComponent,
    SlideComponent,
    FooterComponent,
    AboutComponent,
    ProductComponent,
    ProductDetailComponent,
    // RegisterComponent,
    HomeComponent,
    ClinicP1Component,
    ClinicComponent,
    ClinicP2Component,
    ClinicP3Component,
    ClinicP4Component,
    ClinicP5Component,
    SystemComponent,
    SystemP1Component,
    SystemP2Component,
    SystemPEditComponent,
    SystemP4Component,
    ClinicP6Component,
    StockComponent,
    StockP0Component,
    StockP1Component,
    StockP2Component,
    StockP3Component,
    StockP4Component,
    MyMoneyComponent,
    MyMoneyP1Component,
    MyMoneyP2Component,
    MyMoneyP3Component,
    LoginUserComponent,
    ClinicM1Component,
    ClinicM2Component,
    ClinicM3Component
  ],
  imports: [
    // Import modules here
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      // Define Path URL
      { path: '', component: ClinicComponent },
      {
        path: 'clinic', component: ClinicComponent,
        children: [
          { path: 'c1', component: ClinicP1Component, outlet: 'c2' },
          {
            path: 'c2', component: ClinicP2Component, outlet: 'c2',
            children: [
              { path: 't1', component: ClinicM1Component, outlet: 'c3' },
              { path: 't2', component: ClinicM2Component, outlet: 'c3' },
              { path: 't3', component: ClinicM3Component, outlet: 'c3' },
              { path: 't4', component: ClinicM1Component, outlet: 'c3' },
              { path: '', component: ClinicComponent },
              { path: '**', component: ClinicM1Component, outlet: 'c3' }
              // {  path: '**', redirectTo: '/home', pathMatch: 'full' }
            ]
          },
          { path: 'c3', component: ClinicP3Component, outlet: 'c2' },
          { path: 'c4', component: ClinicP4Component, outlet: 'c2' },
          { path: 'c5', component: ClinicP5Component, outlet: 'c2' },
          { path: 'c6', component: ClinicP6Component, outlet: 'c2' },
          {
            path: '', component: ClinicP2Component, outlet: 'c2',
            children: [
              { path: '', component: ClinicM1Component, outlet: 'c3' },
            ]
          },
          { path: '**', component: ClinicP1Component, outlet: 'c2' }
        ]
      },
      {
        path: 'stock',
        component: StockComponent,
        children: [
          {

            path: 'st0', component: StockP0Component, outlet: 'c2',
            children: [
              { path: 't1', component: StockP1Component, outlet: 'c3' },
              { path: 't2', component: StockP2Component, outlet: 'c3' },
              { path: 't3', component: StockP3Component, outlet: 'c3' },
              { path: '', component: StockP1Component, outlet: 'c3' },
              { path: '**', component: ClinicM1Component, outlet: 'c3' }
            ]
          },
          { path: 'st1', component: StockP1Component, outlet: 'c2' },
          { path: 'st2', component: StockP2Component, outlet: 'c2' },
          { path: 'st3', component: StockP3Component, outlet: 'c2' },
          { path: 'st4', component: StockP4Component, outlet: 'c2' },
          {
            path: '', component: StockP0Component, outlet: 'c2',
            children: [
              { path: '', component: StockP1Component, outlet: 'c3' },
            ]
          },
          { path: '**', component: StockP1Component, outlet: 'c2' }
        ]
      },
      {
        path: 'money',
        component: MyMoneyComponent,
        children: [
          { path: 'm1', component: MyMoneyP1Component, outlet: 'c2' },
          { path: 'm2', component: MyMoneyP2Component, outlet: 'c2' },
          { path: 'm3', component: MyMoneyP3Component, outlet: 'c2' },
          { path: '', component: MyMoneyP1Component, outlet: 'c2' },
          { path: '**', component: MyMoneyP1Component, outlet: 'c2' }
        ]
      },
      {
        path: 'system',
        component: SystemComponent,
        children: [
          { path: 's1', component: SystemP4Component, outlet: 'c2' },
          { path: 's2', component: SystemP1Component, outlet: 'c2' },
          { path: 's3/id/:id', component: SystemPEditComponent, outlet: 'c2' },
          { path: '', component: SystemP4Component, outlet: 'c2' },
          { path: '**', component: SystemP4Component, outlet: 'c2' }
        ]
      },
      {
        path: 'product',
        component: ProductComponent,
      }
      // {
      //   path: 'register',
      //   component: RegisterComponent,
      //   outlet: 'aux'
      // },
      // {
      //   path: 'productdetail/id/:id/title/:title',
      //   component: ProductDetailComponent,
      //   outlet: 'aux'
      // },
      // {
      //   path: '', redirectTo: '/home', pathMatch: 'full'
      // },
      // {
      //   path: '**', redirectTo: '/home/(main:home||c2:index)'
      // }
    ],
      {
        useHash: false  // Add hash # in URL
      }

    )
  ],
  providers: [ProductService, AuthService], // Add Service providers NewsService,
  bootstrap: [AppComponent]   // First Component or First landingpage
})
export class AppModule { }
