// tslint:disable:max-classes-per-file
import { Keys, CreditCardActionTypes } from './types';

export interface CreditCards {
  cards: CreditCard[];
  editingCard: CreditCard | null;
}

export class CreditCard {
  name?: string;
  rewards: CreditCardReward[] = [];
  constructor(public id: string) {}
}

export class CreditCardReward {
  name?: string;
  cashBack: number = 1;
}

const initialState: CreditCards = {
  cards: [],
  editingCard: null,
};

export default function workoutsReducer(state: CreditCards = initialState, action: CreditCardActionTypes): CreditCards {
  switch (action.type) {
    case Keys.Add:
      return {
        ...state,
        editingCard: new CreditCard(uuidv4()),
      };
    case Keys.Edit:
      return {
        ...state,
        editingCard: action.cardToEdit,
      };
    case Keys.CancelEdit:
      return {
        ...state,
        editingCard: null,
      };
    case Keys.Save:
      if (state.editingCard == null) {
        // Invalid state. Maybe log here?
        return state;
      }
      return {
        ...state,
        editingCard: null,
        cards: state.cards.concat(state.editingCard),
      };
    case Keys.UpdateEdit:
      return {
        ...state,
        editingCard: action.card,
      };
    case Keys.Delete:
      return {
        ...state,
        cards: state.cards.filter(card => {
          return card.id !== action.card.id;
        }),
      };
    default:
      return state;
  }
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // tslint:disable-next-line:no-bitwise
    const r = (Math.random() * 16) | 0;
    // tslint:disable-next-line:no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
