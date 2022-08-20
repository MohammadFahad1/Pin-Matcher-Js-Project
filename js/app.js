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

document.getElementById('calculator').addEventListener('click', function (event) {
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        } else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    } else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumer = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById
        ('pin-failur');

    if (typedNumer === currentPin) {
        pinFailureMessage.style.display = 'none';
        pinSuccessMessage.style.display = 'block';
    } else {
        pinSuccessMessage.style.display = 'none';
        pinFailureMessage.style.display = 'block';
    }
});