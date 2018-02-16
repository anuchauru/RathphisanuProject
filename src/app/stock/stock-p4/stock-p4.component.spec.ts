import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockP4Component } from './stock-p4.component';

describe('StockP4Component', () => {
  let component: StockP4Component;
  let fixture: ComponentFixture<StockP4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockP4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockP4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
