export default function fetchHTML() {
    const formOutput = document.getElementById("ulOutput") as HTMLElement
    let loopCtr: number = 0
    let outputKey: string | null  = "";
    for (loopCtr; loopCtr < localStorage.length; loopCtr++) {
        outputKey = localStorage.key(loopCtr);
        let outputObj: string | null;
        if(outputKey){
            outputObj = localStorage.getItem(outputKey);
            if(outputObj){
                let parsedOutput: Array<string> = JSON.parse(outputObj);
                formOutput.innerHTML += `
                    <li class="border border-primary mt-3 p-3" id="${outputKey}">
                    <h4>${parsedOutput[0]}</h4>
                    <p>Successfully ${parsedOutput[1]}, ${parsedOutput[2]}, for IDR. ${parsedOutput[3]}</p>
                    <button type="button" class="btn btn-danger" onclick="deleteElement('${outputKey}')">DELETE</button>
                    </li>
                    `;
            }
        }
    }
    return outputKey!.substring(7,8)
}