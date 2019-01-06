import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { StoreModule } from '@ngrx/store';
import { stopwatchReducer } from './stopwatch/ngrx/stopwatch.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StopwatchModule,
    StoreModule.forRoot({ timeList: stopwatchReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
