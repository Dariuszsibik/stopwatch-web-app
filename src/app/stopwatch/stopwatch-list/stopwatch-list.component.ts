import { Component, OnInit, Input, Inject } from '@angular/core';
import { Timer } from '../model/timer.model';
import { StopwatchModalComponent } from '../stopwatch-modal/stopwatch-modal.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-stopwatch-list',
  templateUrl: './stopwatch-list.component.html',
  styleUrls: ['./stopwatch-list.component.scss']
})
export class StopwatchListComponent {
  @Input()
  timesList: Array<Timer>;

  constructor( private dialog: MatDialog,) {}

  removeTime(index, event) {
    event.stopPropagation();
    this.timesList.splice(index, 1)
  }

  showDetails(time) {
    this.dialog.open(StopwatchModalComponent, {data: time})
  }
}
