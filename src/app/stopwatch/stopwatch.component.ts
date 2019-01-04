import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { Timer } from './model/timer.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { StopwatchService } from './stopwatch.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})

export class StopwatchComponent implements OnInit, OnDestroy {

subscription: Subscription;

  constructor(
    private toast: MatSnackBar,
    private stopWatchService: StopwatchService
  ) {}

  ngOnInit() {

    this.stopWatchService.init();

  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

}
