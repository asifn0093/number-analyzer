// Get the input element
const numberInput = document.getElementById("numberInput");

// Get the button
const checkBtn = document.getElementById("checkBtn");

// Get result elements
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

// Run code when button is clicked
checkBtn.onclick = function () {

    // Get value from input
    const value = numberInput.value;

    // Check if input is empty
    if (value === "") {
        resultTitle.textContent = "Please Enter a Number";
        resultText.textContent = "You must enter a number first.";
        return;
    }

    // Convert input value into a number
    const number = Number(value);

    // Variables for our results
    let sign;
    let parity;

    // Check Positive / Negative / Zero
    if (number > 0) {
        sign = "Positive";
    } else if (number < 0) {
        sign = "Negative";
    } else {
        sign = "Zero";
    }

    // Check Even / Odd
    if (number % 2 === 0) {
        parity = "Even";
    } else {
        parity = "Odd";
    }

    // Show special result for zero
    if (number === 0) {
        resultTitle.textContent = "Zero & Even";
        resultText.textContent = "0 is Zero and it is also Even.";
        return;
    }

    // Show combined result
    resultTitle.textContent = `${number} is ${sign} & ${parity}`;
    resultText.textContent = `The number ${number} is ${sign} and ${parity}.`;
};
