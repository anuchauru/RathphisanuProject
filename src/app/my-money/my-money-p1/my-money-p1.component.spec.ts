import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMoneyP1Component } from './my-money-p1.component';

describe('MyMoneyP1Component', () => {
  let component: MyMoneyP1Component;
  let fixture: ComponentFixture<MyMoneyP1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMoneyP1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMoneyP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
