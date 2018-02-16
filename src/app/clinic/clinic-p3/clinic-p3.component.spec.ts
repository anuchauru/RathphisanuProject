import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicP3Component } from './clinic-p3.component';

describe('ClinicP3Component', () => {
  let component: ClinicP3Component;
  let fixture: ComponentFixture<ClinicP3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicP3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
