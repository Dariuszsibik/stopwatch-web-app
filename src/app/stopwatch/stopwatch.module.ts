import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from './stopwatch.component';
import { MaterialModule } from '../material/material.module';
import { StopwatchListComponent } from './stopwatch-list/stopwatch-list.component';
import { StopwatchModalComponent } from './stopwatch-modal/stopwatch-modal.component';

@NgModule({
  declarations: [StopwatchComponent, StopwatchListComponent, StopwatchModalComponent],
  entryComponents: [StopwatchModalComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class StopwatchModule { }
