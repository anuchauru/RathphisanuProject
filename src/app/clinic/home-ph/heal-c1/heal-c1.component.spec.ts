import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealC1Component } from './heal-c1.component';

describe('HealC1Component', () => {
  let component: HealC1Component;
  let fixture: ComponentFixture<HealC1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealC1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
