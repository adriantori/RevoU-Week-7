import renderHTML from "./renderHTML.js";
import fetchHTML from "./fetchHTML.js";

fetchHTML();

const formInput = document.getElementById("formTransaction") as HTMLFormElement;

let counterId :number = 0;
formInput?.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputType: string = (document.getElementById("cashToggle") as HTMLInputElement).value
    let inputName: string = (document.getElementById("name") as HTMLInputElement).value
    let inputDetails: string = (document.getElementById("details") as HTMLInputElement).value
    let inputAmount: string = (document.getElementById("amount") as HTMLInputElement).value

    //console.log(`${inputType}, ${inputName}, ${inputDetails}, ${inputAmount}`);
    renderHTML(inputType, inputName, inputDetails, inputAmount, counterId);
    counterId++;
});
