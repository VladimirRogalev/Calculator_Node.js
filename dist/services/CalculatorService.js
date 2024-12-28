"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CalculatorService {
    constructor() {
        this.sum = (a, b) => a + b;
        this.subtract = (a, b) => a - b;
        this.multiply = (a, b) => a * b;
        this.divide = (a, b) => a / b;
    }
}
exports.default = CalculatorService;
