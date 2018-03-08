import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Heal2Component } from './heal-2.component';

describe('Heal2Component', () => {
  let component: Heal2Component;
  let fixture: ComponentFixture<Heal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
