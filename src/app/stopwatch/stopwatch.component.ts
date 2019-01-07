import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { interval, Subscription, timer, Observable } from 'rxjs';
import { Timer } from './model/timer.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { StopwatchService } from './stopwatch.service';
import { AddTime, RemoveTime, RemoveAllTimes } from './ngrx/stopwatch.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})

export class StopwatchComponent implements OnInit, OnDestroy {

time: Timer;

// subscription: Subscription;

  constructor(
    private toast: MatSnackBar,
    private stopWatchService: StopwatchService,
    private store: Store<{ count: number }>
  )
  {}

  ngOnInit() {

  this.time = this.stopWatchService.time;
  this.stopWatchService.init();

  }

  ngOnDestroy() {

//    this.subscription.unsubscribe();
  }

  playWatch() {

    this.stopWatchService.playWatch();

  }

  pauseWatch() {

    this.stopWatchService.pauseWatch();

  }

  reset() {

    this.stopWatchService.reset();
    this.time = this.stopWatchService.time;
    this.store.dispatch(new RemoveAllTimes());
    this.toast.open('All Time has been successfuly removed', "", {panelClass: 'toast-error'})

  }

  addTime() {

    let addTimer = {
      number: 82800000,
      play: false,
      started: 0,
      currentElapsedTime: 0,
      totalElapsedTime: 82800000,
      startTime: null,
    };
    Object.assign(addTimer, this.time);
    this.store.dispatch(new AddTime(addTimer));
    this.toast.open('New Time has been successfuly created', "", {panelClass: 'toast-success'})

  }


}
