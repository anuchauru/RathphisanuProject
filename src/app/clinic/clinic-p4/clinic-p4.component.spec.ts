import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicP4Component } from './clinic-p4.component';

describe('ClinicP4Component', () => {
  let component: ClinicP4Component;
  let fixture: ComponentFixture<ClinicP4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicP4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicP4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
