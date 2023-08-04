import renderHTML from "./renderHTML.js";
import fetchHTML from "./fetchHTML.js";

const formInput = document.getElementById("formTransaction") as HTMLFormElement;

let counterId :number = parseInt(fetchHTML());
console.log(counterId);
formInput?.addEventListener('submit', (event) => {
    event.preventDefault();
    if(Number.isNaN(counterId)){
        counterId = 0;
    }else{
        counterId!++;
    }
    let inputType: string = (document.getElementById("cashToggle") as HTMLInputElement).value
    let inputName: string = (document.getElementById("name") as HTMLInputElement).value
    let inputDetails: string = (document.getElementById("details") as HTMLInputElement).value
    let inputAmount: string = (document.getElementById("amount") as HTMLInputElement).value
    console.log(counterId);
    renderHTML(inputType, inputName, inputDetails, inputAmount, counterId!);

    
});
