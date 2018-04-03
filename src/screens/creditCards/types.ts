/* tslint:disable:max-classes-per-file */
import { StringTypeAction } from '../../redux';

export enum Keys {
  Increment = 'CreditCardsIncrement',
  Decrement = 'CreditCardsDecrement',
}

export type ActionTypes = Increment | Decrement;

export interface Increment extends StringTypeAction {
  readonly type: Keys.Increment;
  username: string;
}

export interface Decrement extends StringTypeAction {
  readonly type: Keys.Decrement;
  password: string;
}
