import { Action } from '@ngrx/store';
import { ActionTypes } from './stopwatch.actions';

export const initialState = [];

export class MyStateAction implements Action {
  type: string;
  payload: any;
}

export function stopwatchReducer(state = initialState, action: MyStateAction) {
  switch (action.type) {
    case ActionTypes.AddTime:
      return [...state, action.payload]

    case ActionTypes.RemoveAllTimes:
      return [];

    case ActionTypes.RemoveTime:
      state.splice(action.payload, 1)
      return state;

    default:
      return state;
  }
}
