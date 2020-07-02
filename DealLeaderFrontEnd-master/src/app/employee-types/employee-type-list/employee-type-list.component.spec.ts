import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTypeListComponent } from './employee-type-list.component';

describe('EmployeeTypeListComponent', () => {
  let component: EmployeeTypeListComponent;
  let fixture: ComponentFixture<EmployeeTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
