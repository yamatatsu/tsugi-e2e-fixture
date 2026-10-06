import { add } from './math';

declare const it: (name: string, fn: () => void) => void;

it('adds two numbers', () => {
  if (add(1, 2) !== 3) throw new Error('unexpected');
});
