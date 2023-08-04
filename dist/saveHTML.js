export default function saveHTML(htmlId) {
    const basket = [htmlId[1], htmlId[2], htmlId[3], htmlId[4]];
    const basketStringify = JSON.stringify(basket);
    const outputName = htmlId[0];
    localStorage.setItem(outputName, basketStringify);
}
