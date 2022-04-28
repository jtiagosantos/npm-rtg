import { generateGenericToken } from '../utils/generate-generic-token';
import { generateTokenJustLetters } from '../utils/generate-token-just-letters';
import { generateTokenJustLowercaseLetters } from '../utils/generate-token-just-lowercase-letters';
import { generateTokenJustUppercaseLetters } from '../utils/generate-token-just-uppercase-letters';
import { generateTokenJustNumbers } from '../utils/generate-token-just-numbers';

import {
  justLettersValidator,
  justLowercaseLettersValidator,
  justUppercaseLettersValidator,
  justNumbers,
} from '../validators';

describe('generate token funcionality tests', () => {
  it('generate token with correct length', () => {
    const token = generateGenericToken(40);
    const tokenLength = token.length;

    expect(tokenLength).toBe(40);
  });

  it('generate token just letters', () => {
    const token = generateTokenJustLetters(40);
    const isValidToken = justLettersValidator.test(token);

    expect(isValidToken).toBe(true);
  });

  it('generate token just lowercase letters', () => {
    const token = generateTokenJustLowercaseLetters(40);
    const isValidToken = justLowercaseLettersValidator.test(token);

    expect(isValidToken).toBe(true);
  });

  it('generate token just uppercase letters', () => {
    const token = generateTokenJustUppercaseLetters(40);
    const isValidToken = justUppercaseLettersValidator.test(token);

    expect(isValidToken).toBe(true);
  });

  it('generate token just numbers', () => {
    const token = generateTokenJustNumbers(40);
    const isValidToken = justNumbers.test(token);

    expect(isValidToken).toBe(true);
  });
});
