/* When you concate an empty string with a number then the number becomes an string */

function getPin() {
    const pin = generatePin();
    const pinString = pin + ''; //converting pin to a string
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});