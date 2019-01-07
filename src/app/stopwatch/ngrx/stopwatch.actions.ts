import { Action } from '@ngrx/store';
import { Time } from '@angular/common';
import { Observable } from 'rxjs';
import { Timer } from '../model/timer.model';

export enum ActionTypes {
  AddTime = '[AddTime] Add new time',
  RemoveTime = '[RemoveTime] Remove time',
  RemoveAllTimes = '[RemoveAllTimes] Remove All Times',
}

export class AddTime implements Action {
  readonly type = ActionTypes.AddTime;

  constructor(public payload: Timer) {}
}

export class RemoveTime implements Action {
  readonly type = ActionTypes.RemoveTime;

  constructor(public payload: number) {}
}

export class RemoveAllTimes implements Action {
  readonly type = ActionTypes.RemoveTime;

  constructor(public payload: any = null) {}

}

