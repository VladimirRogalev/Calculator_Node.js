"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CalculatorController_1 = __importDefault(require("../controllers/CalculatorController"));
const router = (0, express_1.Router)();
const controller = new CalculatorController_1.default();
function handleRequest(operation, { query }, response) {
    controller.calculate(operation, query)
        .then(v => response.send(v))
        .catch(e => response.status(400).send(e.message));
}
router.get("/sum", (req, res) => handleRequest("sum", req, res));
router.get("/subtract", (req, res) => handleRequest("subtract", req, res));
router.get("/multiply", (req, res) => handleRequest("multiply", req, res));
router.get("/divide", (req, res) => handleRequest("divide", req, res));
exports.default = router;
