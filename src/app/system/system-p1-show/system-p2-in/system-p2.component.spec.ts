import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemP2Component } from './system-p2.component';

describe('SystemP2Component', () => {
  let component: SystemP2Component;
  let fixture: ComponentFixture<SystemP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
