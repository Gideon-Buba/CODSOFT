let display = document.getElementById('display');
let currentInput = '';
let operator = '';

function calculate(event) {
  if (event.target.tagName === 'BUTTON') {
    const value = event.target.textContent;

    if (value >= '0' && value <= '9') {
      currentInput += value;
    } else if (value === '.') {
      if (!currentInput.includes('.')) {
        currentInput += value;
      }
    } else {
      if (currentInput !== '') {
        operator = value;
        currentInput += ' ' + operator + ' ';
      }
    }

    display.textContent = currentInput;
  }
}

function calculateResult() {
  if (currentInput !== '') {
    const result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
  }
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  display.textContent = '0';
}
