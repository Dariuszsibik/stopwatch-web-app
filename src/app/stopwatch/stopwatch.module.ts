import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from './stopwatch-view/stopwatch.component';
import { MaterialModule } from '../material/material.module';
import { StopwatchListComponent } from './stopwatch-list/stopwatch-list.component';

@NgModule({
  declarations: [StopwatchComponent, StopwatchListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class StopwatchModule { }
