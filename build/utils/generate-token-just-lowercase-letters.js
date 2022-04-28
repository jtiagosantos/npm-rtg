"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTokenJustLowercaseLetters = void 0;
const constants_1 = require("../constants");
const { LETTERS } = constants_1.CONSTANTS;
const { LOWERCASE } = LETTERS;
const generateTokenJustLowercaseLetters = (tokenLength) => {
    let tokenJustLowercaseLetters = '';
    for (let i = 0; i < tokenLength; i++) {
        tokenJustLowercaseLetters +=
            LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)];
    }
    return tokenJustLowercaseLetters;
};
exports.generateTokenJustLowercaseLetters = generateTokenJustLowercaseLetters;
