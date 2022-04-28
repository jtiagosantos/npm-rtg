"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTokenJustLetters = void 0;
const constants_1 = require("../constants");
const { LETTERS } = constants_1.CONSTANTS;
const { ALLCASE } = LETTERS;
const generateTokenJustLetters = (tokenLength) => {
    let tokenJustLetters = '';
    for (let i = 0; i < tokenLength; i++) {
        tokenJustLetters += ALLCASE[Math.floor(Math.random() * ALLCASE.length)];
    }
    return tokenJustLetters;
};
exports.generateTokenJustLetters = generateTokenJustLetters;
