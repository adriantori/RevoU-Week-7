export default function fetchHTML() {
    const formOutput = document.getElementById("ulOutput");
    console.log(formOutput.getElementsByTagName("li").length);
    //load data from localStorage
    if ((formOutput === null || formOutput === void 0 ? void 0 : formOutput.getElementsByTagName("li").length) == 0) {
        formOutput.innerHTML = `
        <li>
        <h4>Empty Data</h4>
        <p>Please insert new transaction</p>
        </li>
        `;
    }
    else {
        return formOutput.innerHTML;
        console.log("out");
    }
}
