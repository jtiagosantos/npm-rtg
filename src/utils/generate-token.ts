import { CONSTANTS } from '../constants';

import { generateTokenJustLetters } from './generate-token-just-letters';
import { generateTokenJustLowercaseLetters } from './generate-token-just-lowercase-letters';
import { generateTokenJustUppercaseLetters } from './generate-token-just-uppercase-letters';
import { generateTokenJustNumbers } from './generate-token-just-numbers';

import { TokenOptions } from '../types/token-options';

const { CHARACTERS } = CONSTANTS;

export const generateToken = (
  tokenLength: number,
  tokenOptions?: TokenOptions,
): string => {
  if (tokenOptions) {
    const {
      justLetters,
      justLowercaseLetters,
      justUppercaseLetters,
      justNumbers,
    } = tokenOptions;

    if (justLetters) return generateTokenJustLetters(tokenLength);

    if (justLowercaseLetters)
      return generateTokenJustLowercaseLetters(tokenLength);

    if (justUppercaseLetters)
      return generateTokenJustUppercaseLetters(tokenLength);

    if (justNumbers) return generateTokenJustNumbers(tokenLength);
  }

  let token = '';

  for (let i = 0; i < tokenLength; i++) {
    token += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }

  return token;
};
