"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTokenJustUppercaseLetters = void 0;
const constants_1 = require("../constants");
const { LETTERS } = constants_1.CONSTANTS;
const { UPPERCASE } = LETTERS;
const generateTokenJustUppercaseLetters = (tokenLength) => {
    let tokenJustUppercaseLetters = '';
    for (let i = 0; i < tokenLength; i++) {
        tokenJustUppercaseLetters +=
            UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
    }
    return tokenJustUppercaseLetters;
};
exports.generateTokenJustUppercaseLetters = generateTokenJustUppercaseLetters;
