import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealC3Component } from './heal-c3.component';

describe('HealC3Component', () => {
  let component: HealC3Component;
  let fixture: ComponentFixture<HealC3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealC3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
