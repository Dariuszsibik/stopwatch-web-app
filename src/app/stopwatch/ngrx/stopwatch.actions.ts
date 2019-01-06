import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddTime = '[AddTime] Add new time',
  RemoveTime = '[RemoveTime] Remove new time',
}

export class AddTime implements Action {
  readonly type = ActionTypes.AddTime;
}

export class RemoveTime implements Action {
  readonly type = ActionTypes.RemoveTime;
}

