import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemP4Component } from './system-p4.component';

describe('SystemP4Component', () => {
  let component: SystemP4Component;
  let fixture: ComponentFixture<SystemP4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemP4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemP4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
