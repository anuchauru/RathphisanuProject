import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicM2Component } from './clinic-m2.component';

describe('ClinicM2Component', () => {
  let component: ClinicM2Component;
  let fixture: ComponentFixture<ClinicM2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicM2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicM2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
