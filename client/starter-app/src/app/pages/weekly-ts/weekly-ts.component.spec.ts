import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTsComponent } from './weekly-ts.component';

describe('WeeklyTsComponent', () => {
  let component: WeeklyTsComponent;
  let fixture: ComponentFixture<WeeklyTsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyTsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
