import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockP1Component } from './stock-p1.component';

describe('StockP1Component', () => {
  let component: StockP1Component;
  let fixture: ComponentFixture<StockP1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockP1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
