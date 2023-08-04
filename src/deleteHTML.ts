function deleteElement(outputId :string){
    const elementRemove = document.getElementById(`${outputId}`);
    const parentElement = elementRemove?.parentNode;

    if(parentElement){
        parentElement.removeChild(elementRemove);
    }
    localStorage.removeItem(outputId);

}