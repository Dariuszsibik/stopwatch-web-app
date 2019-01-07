import { Component, OnInit, Input, Inject } from '@angular/core';
import { Timer } from '../model/timer.model';
import { StopwatchModalComponent } from '../stopwatch-modal/stopwatch-modal.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveTime } from '../ngrx/stopwatch.actions';

@Component({
  selector: 'app-stopwatch-list',
  templateUrl: './stopwatch-list.component.html',
  styleUrls: ['./stopwatch-list.component.scss']
})
export class StopwatchListComponent {

  timesList: Observable<Timer[]>;

  constructor(
    private dialog: MatDialog,
    private store: Store<{ timeList }>
    ) {
      this.timesList = this.store.pipe(select('timeList'));
    }

  removeTime(index, event) {
    event.stopPropagation();
    this.store.dispatch(new RemoveTime(index));
  }

  showDetails(time) {
    this.dialog.open(StopwatchModalComponent, {data: time})
  }
}
