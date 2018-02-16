import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMoneyP2Component } from './my-money-p2.component';

describe('MyMoneyP2Component', () => {
  let component: MyMoneyP2Component;
  let fixture: ComponentFixture<MyMoneyP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMoneyP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMoneyP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
