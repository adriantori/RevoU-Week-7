export default function saveHTML(htmlId: Array<string>){
    const basket: Array<string> = [htmlId[1], htmlId[2], htmlId[3], htmlId[4]]
    const basketStringify: string = JSON.stringify(basket);
    const outputName: string = htmlId[0];
    localStorage.setItem(outputName, basketStringify);
}