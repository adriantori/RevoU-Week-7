import renderHTML from "./renderHTML.js";
import fetchHTML from "./fetchHTML.js";

fetchHTML();

const formInput = document.getElementById("formTransaction") as HTMLFormElement;

formInput?.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputType: string = (document.getElementById("cashToggle") as HTMLInputElement).value
    let inputName: string = (document.getElementById("name") as HTMLInputElement).value
    let inputDetails: string = (document.getElementById("details") as HTMLInputElement).value
    let inputAmount: string = (document.getElementById("amount") as HTMLInputElement).value

    //console.log(`${inputType}, ${inputName}, ${inputDetails}, ${inputAmount}`);
    renderHTML(inputType, inputName, inputDetails, inputAmount);
});

