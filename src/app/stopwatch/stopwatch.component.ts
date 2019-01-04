import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { Timer } from './model/timer.model';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})

export class StopwatchComponent implements OnInit, OnDestroy {

  time: Timer;

  timesList: Array<Timer> = [];
  subscription: Subscription;
  timeInterval = interval(1);

  constructor(
    private toast: MatSnackBar,
  ) {}

  ngOnInit() {

    this.time = {
      number: 82800000,
      play: false,
      started: 0,
      currentElapsedTime: 0,
      totalElapsedTime: 82800000,
      startTime: null,
    };

    this.start();

  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

  tooglePlay() {

    this.time.play = !this.time.play;
    if (this.time.play) {

      this.playWatch();

    } else {

      this.pauseWatch();

    }

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
    this.timesList.push(addTimer);

    this.toast.open('New Time has been successfuly created', "", {panelClass: 'toast-success'})

  }

  removeTime(t) {

    this.timesList = this.timesList.filter((time) => {
      return time.number !== t.number;
    });

  }

  playWatch() {

    this.time.play = true;
    if (!this.time.startTime) {

      this.time.startTime = new Date();

    }

  }

  pauseWatch() {

    this.time.play = false;
    this.time.startTime = null;
    this.time.totalElapsedTime += this.time.currentElapsedTime;
    this.time.currentElapsedTime = 0;

  }

  start() {

    this.subscription = this.timeInterval
      .subscribe(
        x => {
          this.updateTimer();
        }
      );

  }

  reset() {

    this.time = {
      number: 82800000,
      play: false,
      started: 0,
      currentElapsedTime: 0,
      startTime: null,
      totalElapsedTime: 82800000
    };

    this.timesList = [];

    this.toast.open('All Time has been successfuly removed', "", {panelClass: 'toast-error'})


  }

  updateTimer() {

    if (this.time.play) {
      this.time.currentElapsedTime = this.getCurrentElapsedTime();
      this.time.number = this.time.totalElapsedTime + this.time.currentElapsedTime;
    } else {
      this.time.number = this.time.totalElapsedTime;
    }

  }

  getCurrentElapsedTime() {

    const now = new Date();
    const start = new Date(this.time.startTime);
    return (now.getTime() - start.getTime());
  }

}
