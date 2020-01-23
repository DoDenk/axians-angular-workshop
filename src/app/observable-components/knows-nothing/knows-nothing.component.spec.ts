import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowsNothingComponent } from './knows-nothing.component';

describe('KnowsNothingComponent', () => {
  let component: KnowsNothingComponent;
  let fixture: ComponentFixture<KnowsNothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowsNothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowsNothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
