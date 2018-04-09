import { Add, Edit, CancelEdit, Save, UpdateEdit, Delete } from './types';
import { Keys } from './types';
import { CreditCard } from './reducer';

export function add(): Add {
  return {
    type: Keys.Add,
  };
}

export function edit(cardToEdit: CreditCard): Edit {
  return {
    type: Keys.Edit,
    cardToEdit,
  };
}

export function cancelEdit(): CancelEdit {
  return {
    type: Keys.CancelEdit,
  };
}

export function save(): Save {
  return {
    type: Keys.Save,
  };
}

export function updateEdit(card: CreditCard): UpdateEdit {
  return {
    type: Keys.UpdateEdit,
    card,
  };
}

export function deleteCard(card: CreditCard): Delete {
  return {
    type: Keys.Delete,
    card,
  };
}
