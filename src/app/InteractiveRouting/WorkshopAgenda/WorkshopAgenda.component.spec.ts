import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopAgendaComponent } from './WorkshopAgenda.component';

describe('WorkshopAgenda', () => {
  let component: WorkshopAgendaComponent;
  let fixture: ComponentFixture<WorkshopAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
