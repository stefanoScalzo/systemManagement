import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPriorityComponent } from './event-priority.component';

describe('EventPriorityComponent', () => {
  let component: EventPriorityComponent;
  let fixture: ComponentFixture<EventPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
