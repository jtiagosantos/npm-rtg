"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const constants_1 = require("../constants");
const { CHARACTERS } = constants_1.CONSTANTS;
const generateToken = (tokenLength) => {
    let token = '';
    for (let i = 0; i < length; i++) {
        token += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    }
    return token;
};
exports.generateToken = generateToken;
