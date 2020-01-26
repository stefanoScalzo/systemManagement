import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpassedComponent } from './surpassed.component';

describe('SurpassedComponent', () => {
  let component: SurpassedComponent;
  let fixture: ComponentFixture<SurpassedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpassedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
