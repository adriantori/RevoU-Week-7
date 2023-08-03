"use strict";
const formOutput = document.getElementById("ulOutput");
if ((formOutput === null || formOutput === void 0 ? void 0 : formOutput.getElementsByTagName("li").length) == 0) {
    console.log("empty");
}
const formInput = document.getElementById("formTransaction");
formInput === null || formInput === void 0 ? void 0 : formInput.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputType = document.getElementById("cashToggle").value;
    let inputName = document.getElementById("name").value;
    let inputDetails = document.getElementById("details").value;
    let inputAmount = document.getElementById("amount").value;
    console.log(`${inputType}, ${inputName}, ${inputDetails}, ${inputAmount}`);
});
