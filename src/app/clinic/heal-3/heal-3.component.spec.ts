import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Heal3Component } from './heal-3.component';

describe('Heal3Component', () => {
  let component: Heal3Component;
  let fixture: ComponentFixture<Heal3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heal3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
