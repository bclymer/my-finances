import { combineReducers, AnyAction } from 'redux';
import { Dispatch as ReduxDispatch } from 'redux';
import { NavigationState } from 'react-navigation';
import workouts, { Workouts } from '../screens/creditCards/reducer';
import nav from './NavReducer';

export interface AppState {
  workouts: Workouts;
  nav: NavigationState;
}

export interface StringTypeAction extends AnyAction {
  type: string;
}

export type Dispatch = ReduxDispatch<AppState>;

// Add more
export default combineReducers<AppState>({
  workouts,
  nav,
});
