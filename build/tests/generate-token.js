"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_generic_token_1 = require("../utils/generate-generic-token");
describe('generate token funcionality tests', () => {
    it('generate token with correct length', () => {
        const token = (0, generate_generic_token_1.generateGenericToken)(40);
        const tokenLength = token.length;
        expect(tokenLength).toBe(40);
    });
});
