"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderHTML_1 = __importDefault(require("./renderHTML"));
const formInput = document.getElementById("formTransaction");
formInput?.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputType = document.getElementById("cashToggle").value;
    let inputName = document.getElementById("name").value;
    let inputDetails = document.getElementById("details").value;
    let inputAmount = document.getElementById("amount").value;
    (0, renderHTML_1.default)(inputType, inputName, inputDetails, inputAmount);
});
