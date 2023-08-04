import fetchHTML from "./fetchHTML.js";
export default function renderHTML(types, names, details, amounts) {
    console.log(`${types}, ${names}, ${details}, ${amounts}`);
    fetchHTML();
    const outputElement = document.getElementById("ulOutput");
    outputElement.innerHTML += `
    <li class="border border-primary mt-3 p-3">
    <h4>${types}</h4>
    <p>Successfully ${types} with name of ${names}, ${details}, for IDR. ${amounts}</p>
    </li>
    `;
}
