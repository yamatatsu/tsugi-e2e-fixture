import { add } from './math';

export const greet = (name: string): string => `hello ${name}, 1+1=${add(1, 1)}`;
