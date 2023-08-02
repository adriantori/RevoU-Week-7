"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auto_1 = __importDefault(require("chart.js/auto"));
const formInput = document.getElementById("formTransaction");
formInput === null || formInput === void 0 ? void 0 : formInput.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputType = document.getElementById("cashToggle").value;
    let inputName = document.getElementById("name").value;
    let inputDetails = document.getElementById("details").value;
    let inputAmount = document.getElementById("amount").value;
    if (inputType == "0") {
        console.log("Cash In");
    }
    else {
        console.log("Cash Out");
    }
    console.log(`${inputName}, ${inputDetails}, ${inputAmount}`);
});
/* large line chart */
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        let chartCanvas = document.getElementById('chLine');
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
        ];
        new auto_1.default(chartCanvas, {
            type: 'line',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: data.map(row => row.count)
                    }
                ]
            }
        });
    });
})();
