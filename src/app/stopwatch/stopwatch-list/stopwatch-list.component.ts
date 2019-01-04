import { Component, OnInit, Input } from '@angular/core';
import { Timer } from '../model/timer.model';

@Component({
  selector: 'app-stopwatch-list',
  templateUrl: './stopwatch-list.component.html',
  styleUrls: ['./stopwatch-list.component.scss']
})
export class StopwatchListComponent {

  @Input() time: Timer;

}
