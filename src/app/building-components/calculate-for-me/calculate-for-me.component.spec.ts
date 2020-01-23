import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateForMeComponent } from './calculate-for-me.component';

describe('CalculateForMeComponent', () => {
  let component: CalculateForMeComponent;
  let fixture: ComponentFixture<CalculateForMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateForMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateForMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
