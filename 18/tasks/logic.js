function addField() {
    const selectElement = document.getElementById("user-selection");
    const formElement = document.querySelector("form");

    const inputField = document.createElement("input");
    inputField.setAttribute("type", selectElement.value);
    formElement.appendChild(inputField);
}