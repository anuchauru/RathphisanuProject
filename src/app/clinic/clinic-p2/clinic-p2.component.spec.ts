import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicP2Component } from './clinic-p2.component';

describe('ClinicP2Component', () => {
  let component: ClinicP2Component;
  let fixture: ComponentFixture<ClinicP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
