import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from './stopwatch-view/stopwatch.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [StopwatchComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class StopwatchModule { }
