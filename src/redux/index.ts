import { combineReducers, AnyAction } from 'redux';
import workouts, { Workouts } from '../screens/creditCards/reducer';
import { Dispatch as ReduxDispatch } from 'redux';

export interface AppState {
  workouts: Workouts;
}

export interface StringTypeAction extends AnyAction {
  type: string;
}

export type Dispatch = ReduxDispatch<AppState>;

// Add more
export default combineReducers<AppState>({
  workouts,
});
