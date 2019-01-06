import { Action } from '@ngrx/store';
import { ActionTypes } from './stopwatch.actions';

export const initialState = 0;

export function stopwatchReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.AddTime:
      return state + 1;

    case ActionTypes.RemoveTime:
      return state - 1;

    default:
      return state;
  }
}
