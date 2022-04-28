import { CONSTANTS } from '../constants';

const { CHARACTERS } = CONSTANTS;

export const generateToken = (tokenLength: number): string => {
  let token = '';

  for(let i = 0; i < length; i++) {
      token += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }

  return token;
};
