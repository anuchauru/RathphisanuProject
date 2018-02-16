import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMoneyP3Component } from './my-money-p3.component';

describe('MyMoneyP3Component', () => {
  let component: MyMoneyP3Component;
  let fixture: ComponentFixture<MyMoneyP3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMoneyP3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMoneyP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
