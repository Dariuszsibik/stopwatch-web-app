import { copyObj } from '@angular/animations/browser/src/util';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { timer, Observable, interval, Subscription } from 'rxjs';
import { Timer } from './model/timer.model';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})

export class StopwatchComponent implements OnInit, OnDestroy {

  time = {
    number: 82800000,
    play: false
  };
  started = 0;
  currentElapsedTime = 0;
  totalElapsedTime = 82800000;
  startTime = null;
  timesList = [];
  subscription: Subscription;
  timeInterval = interval(1);

  constructor() {}

  ngOnInit() {

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
    console.log(this.timesList);
    this.timesList.push((this.time));

  }

  removeTime(t) {

    this.timesList = this.timesList.filter((time) => {
      return time.number !== t.number;
    });

  }

  playWatch() {
    this.time.play = true;
    if (!this.startTime) {

      this.startTime = new Date();

    }

  }

  pauseWatch() {
    this.time.play = false;
    this.startTime = null;
    this.totalElapsedTime += this.currentElapsedTime;
    this.currentElapsedTime = 0;

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
      play: false
    };

    this.currentElapsedTime = 0;
    this.startTime = null;
    this.totalElapsedTime = 82800000;
    this.timesList = [];

  }

  updateTimer() {

    if (this.time.play) {
      this.currentElapsedTime = this.getCurrentElapsedTime();
      this.time.number = this.totalElapsedTime + this.currentElapsedTime;
    } else {
      this.time.number = this.totalElapsedTime;
    }

  }

  getCurrentElapsedTime() {
    const now = new Date();
    const start = new Date(this.startTime);
    return (now.getTime() - start.getTime());
  }

}
