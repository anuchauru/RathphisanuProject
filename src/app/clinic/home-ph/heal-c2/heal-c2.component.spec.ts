import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealC2Component } from './heal-c2.component';

describe('HealC2Component', () => {
  let component: HealC2Component;
  let fixture: ComponentFixture<HealC2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealC2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
