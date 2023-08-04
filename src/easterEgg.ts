export default function easter(name: string, detail: string, counterId: number){
    if(name == "kuru" && detail == "kuru"){
        const outputElement = document.getElementById("ulOutput") as HTMLElement;
        outputElement.innerHTML += `
        <li class="border border-primary mt-3 p-3" id="output-${counterId}">
        <img src="https://kurukuru.morian.icu/e.gif" alt="">
        </li>
        `;
    }
}