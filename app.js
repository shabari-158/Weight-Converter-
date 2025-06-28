function convertWeight() {
  var input = parseFloat(document.getElementById("weightInput").value);
  var fromUnit = document.getElementById("fromUnit").value;
  var resultBox = document.getElementById("resultBox");

  var result;
  if (fromUnit === "kg") {
    result = input * 2.20462;
    resultBox.textContent = input + " kg = " + result.toFixed(2) + " lb";
  } else {
    result = input / 2.20462;
    resultBox.textContent = input + " lb = " + result.toFixed(2) + " kg";
  }
}
