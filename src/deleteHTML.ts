function deleteElement(outputId :string){
    const elementRemove = document.getElementById(`${outputId}`);
    const parentElement = elementRemove?.parentNode;

    if(parentElement){
        parentElement.removeChild(elementRemove);
    }
    console.log(outputId);
    localStorage.removeItem(outputId);

}