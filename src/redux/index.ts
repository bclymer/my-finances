import { combineReducers, AnyAction } from 'redux';
import workouts, { Workouts } from '../screens/creditCards/reducer';
import { Dispatch as ReduxDispatch } from 'redux';

export interface AppState {
  counter: Workouts;
}

export interface StringTypeAction extends AnyAction {
  type: string;
}
export type Dispatch = ReduxDispatch<AppState>;

// Add more
const appReducer = combineReducers<AppState>({
  workouts,
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = action.type === 'RESET' ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
