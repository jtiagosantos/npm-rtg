"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const constants_1 = require("../constants");
const generate_token_just_letters_1 = require("./generate-token-just-letters");
const generate_token_just_lowercase_letters_1 = require("./generate-token-just-lowercase-letters");
const generate_token_just_uppercase_letters_1 = require("./generate-token-just-uppercase-letters");
const generate_token_just_numbers_1 = require("./generate-token-just-numbers");
const { CHARACTERS } = constants_1.CONSTANTS;
const generateToken = (tokenLength, tokenOptions) => {
    if (tokenOptions) {
        const { justLetters, justLowercaseLetters, justUppercaseLetters, justNumbers, } = tokenOptions;
        if (justLetters)
            return (0, generate_token_just_letters_1.generateTokenJustLetters)(tokenLength);
        if (justLowercaseLetters)
            return (0, generate_token_just_lowercase_letters_1.generateTokenJustLowercaseLetters)(tokenLength);
        if (justUppercaseLetters)
            return (0, generate_token_just_uppercase_letters_1.generateTokenJustUppercaseLetters)(tokenLength);
        if (justNumbers)
            return (0, generate_token_just_numbers_1.generateTokenJustNumbers)(tokenLength);
    }
    let token = '';
    for (let i = 0; i < tokenLength; i++) {
        token += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    }
    return token;
};
exports.generateToken = generateToken;
