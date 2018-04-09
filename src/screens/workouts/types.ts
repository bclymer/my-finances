/* tslint:disable:max-classes-per-file */
import { StringTypeAction } from '../../redux';

export enum Keys {
  Increment = 'WorkoutIncrement',
  Decrement = 'WorkoutDecrement',
}

export type WorkoutActionTypes = Increment | Decrement;

export interface Increment extends StringTypeAction {
  readonly type: Keys.Increment;
}

export interface Decrement extends StringTypeAction {
  readonly type: Keys.Decrement;
}
