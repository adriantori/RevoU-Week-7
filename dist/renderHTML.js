import saveHTML from "./saveHTML.js";
export default function renderHTML(types, names, details, amounts, counterId) {
    const outputElement = document.getElementById("ulOutput");
    const amountNumber = +amounts;
    outputElement.innerHTML += `
    <li class="border border-primary mt-3 p-3" id="output-${counterId}">
    <h4>${types}</h4>
    <p>Successfully ${names}, ${details}, for IDR.${amountNumber.toLocaleString()}</p>
    <button type="button" class="btn btn-danger" onclick="deleteElement('output-${counterId}')">DELETE</button>
    </li>
    `;
    let inputs = [`output-${counterId}`, types, names, details, amounts];
    saveHTML(inputs);
}
