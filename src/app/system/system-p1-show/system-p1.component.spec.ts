import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemP1Component } from './system-p1.component';

describe('SystemP1Component', () => {
  let component: SystemP1Component;
  let fixture: ComponentFixture<SystemP1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemP1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
