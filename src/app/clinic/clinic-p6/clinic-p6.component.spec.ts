import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicP6Component } from './clinic-p6.component';

describe('ClinicP6Component', () => {
  let component: ClinicP6Component;
  let fixture: ComponentFixture<ClinicP6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicP6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicP6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
