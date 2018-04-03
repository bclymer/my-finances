import { Keys, ActionTypes } from './types';

export interface Workouts {
  count: number;
}

const initialState = {
  count: 0,
};

export default function workoutsReducer(state: Workouts = initialState, action: ActionTypes): Workouts {
  switch (action.type) {
    case Keys.Increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case Keys.Decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
