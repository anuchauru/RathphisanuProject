import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicP1Component } from './clinic-p1.component';

describe('ClinicP1Component', () => {
  let component: ClinicP1Component;
  let fixture: ComponentFixture<ClinicP1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicP1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
