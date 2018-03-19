import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePhComponent } from './home-ph.component';

describe('HomePhComponent', () => {
  let component: HomePhComponent;
  let fixture: ComponentFixture<HomePhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
