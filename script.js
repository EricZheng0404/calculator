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
        number1 = parseInt(number);
        operator = buttonText;
        showNumber.textContent = "";
        
      } else if (buttonText === "=") { // equal 
        number2 = parseInt(showNumber.textContent);
        operate(operator);
        showNumber.textContent = result;
      } else { // number button
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
    result = num1 / number2;
  }
}

function show(value) {
  showNumber.textContent += value;
}
