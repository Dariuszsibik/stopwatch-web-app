import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { DateTransformPipe } from './shared/pipes/date-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateTransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StopwatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
