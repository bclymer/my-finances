/* tslint:disable:max-classes-per-file */
import { StringTypeAction } from '../../redux';
import { CreditCard } from './reducer';

export enum Keys {
  Add = 'CreditCardAdd',
  Edit = 'CreditCardEdit',
  CancelEdit = 'CreditCardCancelEdit',
  UpdateEdit = 'CreditCardUpdateEdit',
  Save = 'CreditCardSave',
  Delete = 'CreditCardDelete',
}

export type CreditCardActionTypes = Add | Edit | CancelEdit | Save | UpdateEdit | Delete;

export interface Add extends StringTypeAction {
  readonly type: Keys.Add;
}

export interface Edit extends StringTypeAction {
  readonly type: Keys.Edit;
  readonly cardToEdit: CreditCard;
}

export interface CancelEdit extends StringTypeAction {
  readonly type: Keys.CancelEdit;
}

export interface Save extends StringTypeAction {
  readonly type: Keys.Save;
}

export interface UpdateEdit extends StringTypeAction {
  readonly type: Keys.UpdateEdit;
  readonly card: CreditCard;
}

export interface Delete extends StringTypeAction {
  readonly type: Keys.Delete;
  readonly card: CreditCard;
}
