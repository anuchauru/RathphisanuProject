import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemPEditComponent } from './system-p-edit.component';

describe('SystemPEditComponent', () => {
  let component: SystemPEditComponent;
  let fixture: ComponentFixture<SystemPEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemPEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemPEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
