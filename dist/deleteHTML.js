"use strict";
function deleteElement(outputId) {
    const elementRemove = document.getElementById(`${outputId}`);
    const parentElement = elementRemove === null || elementRemove === void 0 ? void 0 : elementRemove.parentNode;
    let confirmDelete = confirm("Are you sure to delete this data?");
    if (confirmDelete) {
        if (parentElement) {
            parentElement.removeChild(elementRemove);
        }
        localStorage.removeItem(outputId);
    }
}
