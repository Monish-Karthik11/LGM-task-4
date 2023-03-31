var result = document.getElementById("result");

function addToResult(val) {
  result.value += val;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  var calculation = result.value;
  result.value = eval(calculation);
}
