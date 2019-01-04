import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from './stopwatch.component';
import { MaterialModule } from '../material/material.module';
import { StopwatchListComponent } from './stopwatch-list/stopwatch-list.component';

@NgModule({
  declarations: [StopwatchComponent, StopwatchListComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class StopwatchModule { }
