import fetchHTML from "./fetchHTML.js";
export default function renderHTML(types, names, details, amounts, counterId) {
    console.log(`${types}, ${names}, ${details}, ${amounts}`);
    fetchHTML();
    const outputElement = document.getElementById("ulOutput");
    outputElement.innerHTML += `
    <li class="border border-primary mt-3 p-3" id="output-${counterId}">
    <h4>${types}</h4>
    <p>Successfully ${types} with name of ${names}, ${details}, for IDR. ${amounts}</p>
    <button type="button" class="btn btn-danger" onclick="deleteElement('output-${counterId}')">DELETE</button>
    </li>
    `;
    // document.getElementById(`output-${counterId}`)?.addEventListener('click', (event) => {
    //     console.log("delete");
    //     const elementRemove = document.getElementById(`output-${counterId}`);
    //     const parentElement = elementRemove?.parentNode;
    //     if(parentElement){
    //         parentElement.removeChild(elementRemove);
    //     }
    //     console.log(counterId);
    // });
}
