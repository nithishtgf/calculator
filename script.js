let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    let result = eval(display.value);
    
    // Round to 3 decimals if not an integer
    if (!Number.isInteger(result)) {
      result = result.toFixed(3);
    }

    display.value = Number(result).toLocaleString('en-IN');
  } catch {
    display.value = 'Error';
  }
}

let openBracket = true;

function handleBracket() {
  if (openBracket) {
    display.value += "(";
  } else {
    display.value += ")";
  }
  openBracket = !openBracket;
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

