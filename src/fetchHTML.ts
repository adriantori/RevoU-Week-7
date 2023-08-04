export default function fetchHTML(){
    const formOutput = document.getElementById("ulOutput") as HTMLElement
    //load data from localStorage
    if (formOutput?.getElementsByTagName("li").length == 0){
        formOutput.innerHTML = `
        <li>
        <h4>Empty Data</h4>
        <p>Please insert new transaction</p>
        </li>
        `;
    }else{
        return formOutput.innerHTML;
    }
}