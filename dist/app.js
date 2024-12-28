"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const calculatorRoutes_1 = __importDefault(require("./routes/calculatorRoutes"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use("/calculator", calculatorRoutes_1.default); // /subtract?a=3&b=2
app.listen(PORT, () => console.log("Listening on port", PORT));
