"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGenericToken = void 0;
const constants_1 = require("../constants");
const { CHARACTERS } = constants_1.CONSTANTS;
const generateGenericToken = (tokenLength) => {
    let genericToken = '';
    for (let i = 0; i < tokenLength; i++) {
        genericToken += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    }
    return genericToken;
};
exports.generateGenericToken = generateGenericToken;
