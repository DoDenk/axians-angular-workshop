import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowsEverythingComponent } from './knows-everything.component';

describe('KnowsEverythingComponent', () => {
  let component: KnowsEverythingComponent;
  let fixture: ComponentFixture<KnowsEverythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowsEverythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowsEverythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
