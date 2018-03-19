import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPhComponent } from './data-ph.component';

describe('DataPhComponent', () => {
  let component: DataPhComponent;
  let fixture: ComponentFixture<DataPhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
