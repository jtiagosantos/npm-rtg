import { CONSTANTS } from '../constants';

const { LETTERS } = CONSTANTS;
const { LOWERCASE } = LETTERS;

export const generateTokenJustLowercaseLetters = (
  tokenLength: number,
): string => {
  let tokenJustLowercaseLetters = '';

  for (let i = 0; i < tokenLength; i++) {
    tokenJustLowercaseLetters +=
      LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)];
  }

  return tokenJustLowercaseLetters;
};
