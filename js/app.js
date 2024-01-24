function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else
        return getPin();
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generatePin').addEventListener('click', function () {
    const pin = getPin();
    const input = document.getElementById('input');
    input.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumber = document.getElementById('typeNumber');
    const previousNum = typeNumber.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumber.value = '';
        }
        else if (number === '<') {
            const digit = previousNum.split('');
            digit.pop();
            const remainingDigit = digit.join('');
            typeNumber.value = remainingDigit;
        }
    }
    else {
        const newNum = previousNum + number;
        typeNumber.value = newNum;
    }
})

document.getElementById('submit').addEventListener('click', function () {
    const input = document.getElementById('input');
    const inputVal = input.value;

    const number = document.getElementById('typeNumber');
    const numberVal = number.value;

    const success = document.getElementById('success');
    const fail = document.getElementById('fail');

    if (inputVal === numberVal) {
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
        fail.style.display = 'block';
        success.style.display = 'none';
    }

})