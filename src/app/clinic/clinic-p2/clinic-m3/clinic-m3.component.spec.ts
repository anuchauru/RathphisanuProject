import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicM3Component } from './clinic-m3.component';

describe('ClinicM3Component', () => {
  let component: ClinicM3Component;
  let fixture: ComponentFixture<ClinicM3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicM3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicM3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
