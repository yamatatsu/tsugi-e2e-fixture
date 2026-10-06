import { greet } from './greet';

declare const it: (name: string, fn: () => void) => void;

it('greets with the sum', () => {
  if (!greet('tsugi').includes('1+1=2')) throw new Error('unexpected');
});
