let number1 = null;
let number2 = null;
let operator = "";
let result = null;

document.addEventListener("DOMContentLoaded", function () {
  showNumber = document.querySelector("#input");
  showNumber.textContent = "";
  const buttons = document.querySelectorAll(
    ".operators div, .numbers div, .equal"
  );
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let buttonText = button.textContent;
      if (buttonText === "C") { // clear button
        clear();
      } else if ( // operator button
        buttonText === "+" ||
        buttonText === "-" ||
        buttonText === "×" ||
        buttonText === "÷"
      ) {
        number = showNumber.textContent;
        operator = buttonText;
        if (number1 === null) {
          number1 = parseFloat(number);
        } else {
          number2 = parseFloat(number);
          operate(operator);
          showNumber.textContent = result;
        }
        showNumber.textContent = "";
      } else if (buttonText === "=") { // equal 
        number2 = parseFloat(showNumber.textContent);
        operate(operator);
        showNumber.textContent = result;
        
      } else { // number button
        // If result is being shown and user hits a number, clear first
        if (showNumber.textContent == result && result !== null) {
          clear();
        }
        show(buttonText);
      }
    });
  });
});

function clear() {
  number1 = null;
  number2 = null;
  operator = "";
  result = null;
  showNumber.textContent = "";
}

function operate(operation) {
  if (result != null) {
    num1 = result
  } else {
    num1 = number1;
  }
  if (operation === "+") {
    result = num1 + number2;
  } else if (operation === "-") {
    result = num1 - number2;
  } else if (operation === "×") {
    result = num1 * number2;
  } else if (operation === "÷") {
    if (number2 === 0) {
      result = "Error";
      return;
    }
    result = num1 / number2;
  }
}

function show(value) {
  showNumber.textContent += value;
}
