import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchModalComponent } from './stopwatch-modal.component';

describe('StopwatchModalComponent', () => {
  let component: StopwatchModalComponent;
  let fixture: ComponentFixture<StopwatchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopwatchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwatchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
