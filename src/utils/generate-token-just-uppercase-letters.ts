import { CONSTANTS } from '../constants';

const { LETTERS } = CONSTANTS;
const { UPPERCASE } = LETTERS;

export const generateTokenJustUppercaseLetters = (
  tokenLength: number,
): string => {
  let tokenJustUppercaseLetters = '';

  for (let i = 0; i < tokenLength; i++) {
    tokenJustUppercaseLetters +=
      UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
  }

  return tokenJustUppercaseLetters;
};
