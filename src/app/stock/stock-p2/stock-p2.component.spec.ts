import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockP2Component } from './stock-p2.component';

describe('StockP2Component', () => {
  let component: StockP2Component;
  let fixture: ComponentFixture<StockP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
