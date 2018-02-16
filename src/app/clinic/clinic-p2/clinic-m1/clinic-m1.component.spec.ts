import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicM1Component } from './clinic-m1.component';

describe('ClinicM1Component', () => {
  let component: ClinicM1Component;
  let fixture: ComponentFixture<ClinicM1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicM1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicM1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
