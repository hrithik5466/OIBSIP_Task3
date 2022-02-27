let val = document.getElementById("input_value");
const btn = document.getElementById("convert");
let result = document.getElementById("result");
let input = document.getElementById("input");
let output = document.getElementById("output");

btn.addEventListener("click", convertTemperature);
input.addEventListener("change", convertTemperature);
output.addEventListener("change", convertTemperature);

function convertTemperature() {
  let inputValue = input.value;
  let outputValue = output.value;
  var res = 0;
  //Celsius
  if (inputValue === "celsius" && outputValue === "fahrenheit") {
    console.log(val.value);
    res = Number((val.value * 9) / 5 + 32);
    console.log("c-f");
  } else if (inputValue === "celsius" && outputValue === "celsius") {
    res = val.value;
    console.log("c-c");
  }

  //Fahrenheit
  if (inputValue === "fahrenheit" && outputValue === "celsius") {
    res = Number(((val.value - 32) * 5) / 9);
    console.log("f-c");
  } else if (inputValue === "fahrenheit" && outputValue === "fahrenheit") {
    res = val.value;
    console.log("f-f");
  }

  console.log(res);
  result.value = res;
}

function reset() {
  convertTemperature();
}