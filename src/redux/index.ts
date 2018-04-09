import { combineReducers, AnyAction } from 'redux';
import { Dispatch as ReduxDispatch } from 'redux';
import { NavigationState } from 'react-navigation';
import creditCards, { CreditCards } from '../screens/creditCards/reducer';
import workouts, { Workouts } from '../screens/workouts/reducer';
import nav from './NavReducer';

export interface AppState {
  workouts: Workouts;
  nav: NavigationState;
  creditCards: CreditCards;
}

export interface StringTypeAction extends AnyAction {
  type: string;
}

export type Dispatch = ReduxDispatch<AppState>;

// Add more
export default combineReducers<AppState>({
  workouts,
  nav,
  creditCards,
});
