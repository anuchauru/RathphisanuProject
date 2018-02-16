import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockP3Component } from './stock-p3.component';

describe('StockP3Component', () => {
  let component: StockP3Component;
  let fixture: ComponentFixture<StockP3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockP3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
