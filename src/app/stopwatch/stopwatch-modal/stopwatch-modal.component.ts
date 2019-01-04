import { Component, OnInit, Input, Inject } from '@angular/core';
import { Timer } from '../model/timer.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-stopwatch-modal',
  templateUrl: './stopwatch-modal.component.html',
  styleUrls: ['./stopwatch-modal.component.scss']
})
export class StopwatchModalComponent {

time: Timer;

constructor(
  private dialogRef: MatDialogRef<StopwatchModalComponent>,
  @Inject(MAT_DIALOG_DATA) private data: Timer
  ) {this.time = data;}


  close() {
    this.dialogRef.close();
  }
 }
