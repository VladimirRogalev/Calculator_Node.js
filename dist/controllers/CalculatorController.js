"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CalculatorService_1 = __importDefault(require("../services/CalculatorService"));
class CalculatorController {
    constructor() {
        this.calculatorService = new CalculatorService_1.default();
    }
    calculate(operation, { a, b }) {
        return new Promise((resolve, reject) => {
            if ((a == null) || (b == null)) {
                reject(new Error("Missing parameters"));
            }
            else {
                const n = this.calculatorService[operation](+a, +b);
                resolve(`${operation}(${a},${b})=${n}`);
            }
        });
    }
}
exports.default = CalculatorController;
