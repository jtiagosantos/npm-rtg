import { CONSTANTS } from '../constants';

import { generateTokenJustLetters } from './generate-token-just-letters';

import { TokenOptions } from '../types/token-options';

const { CHARACTERS } = CONSTANTS;

export const generateToken = (
  tokenLength: number,
  tokenOptions?: TokenOptions,
): string => {
  if (tokenOptions) {
    const { justLetters } = tokenOptions;

    if (justLetters) return generateTokenJustLetters(tokenLength);
  }

  let token = '';

  for (let i = 0; i < tokenLength; i++) {
    token += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }

  return token;
};
