const formInput = document.getElementById("formTransaction");

formInput?.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputType: string = (document.getElementById("cashToggle") as HTMLInputElement).value
    let inputName: string = (document.getElementById("name") as HTMLInputElement).value
    let inputDetails: string = (document.getElementById("details") as HTMLInputElement).value
    let inputAmount: string = (document.getElementById("amount") as HTMLInputElement).value

    if (inputType == "0"){
        console.log("Cash In");
    } else {
        console.log("Cash Out");
    }
    console.log(`${inputName}, ${inputDetails}, ${inputAmount}`)
});