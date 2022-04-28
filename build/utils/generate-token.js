"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const generate_generic_token_1 = require("./generate-generic-token");
const generate_token_just_letters_1 = require("./generate-token-just-letters");
const generate_token_just_lowercase_letters_1 = require("./generate-token-just-lowercase-letters");
const generate_token_just_uppercase_letters_1 = require("./generate-token-just-uppercase-letters");
const generate_token_just_numbers_1 = require("./generate-token-just-numbers");
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
    return (0, generate_generic_token_1.generateGenericToken)(tokenLength);
};
exports.generateToken = generateToken;
