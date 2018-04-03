import {
  CreditCardsIncrement,
  CreditCardsDecrement,
  TypePrefix,
} from './types';
import { StringTypeAction } from '../../redux';

export interface Workouts {
  count: number;
}

const initialState = {
  count: 0,
};

export default function workoutsReducer(
  state: Workouts = initialState,
  action: StringTypeAction
): Workouts {
  if (!action.type.startsWith(TypePrefix)) {
    return;
  }
  if (action instanceof CreditCardsIncrement) {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action instanceof CreditCardsDecrement) {
    return {
      ...state,
      count: state.count - 1,
    };
  } else {
    return state;
  }
}
