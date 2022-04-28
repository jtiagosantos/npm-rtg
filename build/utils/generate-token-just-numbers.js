"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTokenJustNumbers = void 0;
const constants_1 = require("../constants");
const { NUMBERS } = constants_1.CONSTANTS;
const generateTokenJustNumbers = (tokenLength) => {
    let tokenJustNumbers = '';
    for (let i = 0; i < tokenLength; i++) {
        tokenJustNumbers += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
    }
    return tokenJustNumbers;
};
exports.generateTokenJustNumbers = generateTokenJustNumbers;
