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


var tryLeft = 3;

function generatePin() {
    const random = Math.round(Math.random() * 10000);

    tryLeft = 3;
    var tryLeftElement = document.getElementById('try-left');
    tryLeftElement.style.display = 'block';
    tryLeftElement.innerText = tryLeft + " try left";
    document.getElementById('verify-pin').removeAttribute("disabled");

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

document.getElementById('verify-pin').addEventListener('click', function (event) {
    tryLeft--;
    var tryLeftElement = document.getElementById('try-left');
    tryLeftElement.style.display = 'block';
    tryLeftElement.innerText = tryLeft + " try left";

    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumer = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById
        ('pin-failur');

    if (tryLeft > 0) {
        if (typedNumer === currentPin) {
            pinFailureMessage.style.display = 'none';
            pinSuccessMessage.style.display = 'block';
            tryLeftElement.style.display = 'none';
            event.target.setAttribute('disabled', true);
        } else {
            pinSuccessMessage.style.display = 'none';
            pinFailureMessage.style.display = 'block';
        }
    } else {
        tryLeftElement.style.display = 'none';
        pinSuccessMessage.style.display = 'none';
        pinFailureMessage.style.display = 'block';
        pinFailureMessage.innerText = '❌ All Tries Finished! Generate another pin and try again!';
    }
});