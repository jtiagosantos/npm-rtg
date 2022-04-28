import { CONSTANTS } from '../constants';

const { CHARACTERS } = CONSTANTS;

export const generateGenericToken = (tokenLength: number): string => {
  let genericToken = '';

  for (let i = 0; i < tokenLength; i++) {
    genericToken += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }

  return genericToken;
};
