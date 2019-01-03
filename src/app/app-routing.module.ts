import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch-view/stopwatch.component';

const routes: Route[] = [
  { path: '', redirectTo: '/stopwatch', pathMatch: 'full'},
  { path: 'stopwatch', component: StopwatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
