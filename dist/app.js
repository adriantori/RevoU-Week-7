import renderHTML from "./renderHTML.js";
import fetchHTML from "./fetchHTML.js";
const formInput = document.getElementById("formTransaction");
let counterId = parseInt(fetchHTML());
console.log(counterId);
formInput === null || formInput === void 0 ? void 0 : formInput.addEventListener('submit', (event) => {
    event.preventDefault();
    if (Number.isNaN(counterId)) {
        counterId = 0;
    }
    else {
        counterId++;
    }
    let inputType = document.getElementById("cashToggle").value;
    let inputName = document.getElementById("name").value;
    let inputDetails = document.getElementById("details").value;
    let inputAmount = document.getElementById("amount").value;
    console.log(counterId);
    renderHTML(inputType, inputName, inputDetails, inputAmount, counterId);
});
