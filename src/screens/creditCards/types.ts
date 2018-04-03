/* tslint:disable:max-classes-per-file */
import { StringTypeAction } from '../../redux';

export const TypePrefix = 'CreditCards';

export class CreditCardsIncrement implements StringTypeAction {
  type = 'CreditCardsIncrement';
  constructor(public username: string | null) {}
}

export class CreditCardsDecrement implements StringTypeAction {
  type = 'CreditCardsDecrement';
  constructor(public password: string | null) {}
}
