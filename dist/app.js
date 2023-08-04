import renderHTML from "./renderHTML.js";
import fetchHTML from "./fetchHTML.js";
fetchHTML();
const formInput = document.getElementById("formTransaction");
formInput === null || formInput === void 0 ? void 0 : formInput.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputType = document.getElementById("cashToggle").value;
    let inputName = document.getElementById("name").value;
    let inputDetails = document.getElementById("details").value;
    let inputAmount = document.getElementById("amount").value;
    //console.log(`${inputType}, ${inputName}, ${inputDetails}, ${inputAmount}`);
    renderHTML(inputType, inputName, inputDetails, inputAmount);
});
