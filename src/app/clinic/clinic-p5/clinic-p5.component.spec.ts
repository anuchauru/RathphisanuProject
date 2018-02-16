import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicP5Component } from './clinic-p5.component';

describe('ClinicP5Component', () => {
  let component: ClinicP5Component;
  let fixture: ComponentFixture<ClinicP5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicP5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicP5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
