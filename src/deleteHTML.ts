function deleteElement(outputId :string){
    const elementRemove = document.getElementById(`${outputId}`);
    const parentElement = elementRemove?.parentNode;

    let confirmDelete = confirm("Are you sure to delete this data?");
    if(confirmDelete){
        if(parentElement){
            parentElement.removeChild(elementRemove);
        }
        localStorage.removeItem(outputId);
    }

}