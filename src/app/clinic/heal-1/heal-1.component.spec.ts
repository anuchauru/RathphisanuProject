import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Heal1Component } from './heal-1.component';

describe('Heal1Component', () => {
  let component: Heal1Component;
  let fixture: ComponentFixture<Heal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
