import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProvinceComponent } from './view-province.component';

describe('ViewProvinceComponent', () => {
  let component: ViewProvinceComponent;
  let fixture: ComponentFixture<ViewProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProvinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
