import renderHTML from "./renderHTML";
import fetchHTML from "./fetchHTML";

fetchHTML();

const formInput = document.getElementById("formTransaction");

formInput?.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputType: string = (document.getElementById("cashToggle") as HTMLInputElement).value
    let inputName: string = (document.getElementById("name") as HTMLInputElement).value
    let inputDetails: string = (document.getElementById("details") as HTMLInputElement).value
    let inputAmount: string = (document.getElementById("amount") as HTMLInputElement).value

    //console.log(`${inputType}, ${inputName}, ${inputDetails}, ${inputAmount}`);
    renderHTML(inputType, inputName, inputDetails, inputAmount);
});

