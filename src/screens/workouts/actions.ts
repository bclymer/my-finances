import { Increment, Decrement } from './types';
import { Keys } from './types';

export function increment(): Increment {
  return {
    type: Keys.Increment,
  };
}

export function decrement(): Decrement {
  return {
    type: Keys.Decrement,
  };
}
