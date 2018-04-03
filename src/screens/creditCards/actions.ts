import { Increment, Decrement } from './types';
import { Keys } from './types';

export function increment(): Increment {
  return {
    type: Keys.Increment,
    username: 'yay',
  };
}

export function decrement(): Decrement {
  return {
    type: Keys.Decrement,
    password: 'yay',
  };
}
