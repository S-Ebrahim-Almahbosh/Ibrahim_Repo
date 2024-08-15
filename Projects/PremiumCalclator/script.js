function clearDisplay() {
    document.querySelector('input[name="display"]').value = '';
    // this code is to display nothing in the input field  that called name="display"
}

function deleteLastCharacter() {
    const display = document.querySelector('input[name="display"]');
    display.value = display.value.slice(0, -1);
    // this code is to remove the last character from the input field that called name="display"
}

function addToDisplay(value) {
    const display = document.querySelector('input[name="display"]');
    display.value += value;
    // this code is to add the given value to the input field that called name="display"
}

function calculate() {
    const display = document.querySelector('input[name="display"]');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
    // this code is to calculate the expression in the input field that called name="display" and display the result
}
