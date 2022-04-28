import { CONSTANTS } from '../constants';

const { NUMBERS } = CONSTANTS;

export const generateTokenJustNumbers = (tokenLength: number): string => {
  let tokenJustNumbers = '';

  for (let i = 0; i < tokenLength; i++) {
    tokenJustNumbers += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
  }

  return tokenJustNumbers;
};
