import { Component, OnInit } from '@angular/core';
import { timer, Observable, interval, Subscription } from 'rxjs';
import { Timer } from './model/timer.model';
import { increaseElementDepthCount } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {


  time = {
    flag: false,
    number: 0,
  };
  started = 0;
  currentElapsedTime = 0;
  totalElapsedTime = 0;
  startTime = null;
  subscription: Subscription;
  timeInterval = interval(1);

constructor() { }

ngOnInit() {

}

startPause() {
  console.log(this.time, this.startTime, this.currentElapsedTime, this.totalElapsedTime)
  if (this.time.flag === false) {
        this.startTime = new Date();
        this.increment();
  } else {
        this.time.flag = false;
        this.startTime = new Date();
        this.increment();
  }

};

reset() {

  this.time = {
    flag: true,
    number: 0
  };

}

increment() {

    this.subscription = this.timeInterval
        .subscribe(
          x => {
            this.time = {
              flag: false,
              number: 0
            };
            this.updateTimer();
          }
        )

}

updateTimer() {
    this.currentElapsedTime = this.getCurrentElapsedTime();
    this.time.number = this.totalElapsedTime + this.currentElapsedTime;
};

getCurrentElapsedTime() {
  let now = new Date();
  let start = new Date(this.startTime);
  return (now.getTime() - start.getTime() )
};

pause() {

  this.time.flag = true;
  this.subscription.unsubscribe()

}
}

