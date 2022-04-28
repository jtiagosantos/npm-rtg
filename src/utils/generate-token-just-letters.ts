import { CONSTANTS } from '../constants';

const { LETTERS } = CONSTANTS;
const { ALLCASE } = LETTERS;

export const generateTokenJustLetters = (tokenLength: number): string => {
  let tokenJustLetters = '';

  for (let i = 0; i < tokenLength; i++) {
    tokenJustLetters += ALLCASE[Math.floor(Math.random() * ALLCASE.length)];
  }

  return tokenJustLetters;
};
