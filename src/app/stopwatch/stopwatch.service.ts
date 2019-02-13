import { Injectable } from '@angular/core';
import { Timer } from './model/timer.model';
import { Subscription, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {

  readonly zero_timestamp = new Date().setHours(0, 0, 0, 0);

  time: Timer = {
    number: this.zero_timestamp,
    play: false,
    started: 0,
    currentElapsedTime: 0,
    totalElapsedTime: this.zero_timestamp,
    startTime: null,
  };

  subscription: Subscription;
  timeInterval = interval(1);

  constructor() { }


  public get currentTime(): Timer {

    return this.time;
  }

  init() {

    this.start();

  }

  tooglePlay() {

    this.time.play = !this.time.play;
    if (this.time.play) {

      this.playWatch();

    } else {

      this.pauseWatch();

    }

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
