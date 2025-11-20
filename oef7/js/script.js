"use strict";

function main() {
  const TEMPERATURE = parseFloat(prompt("Geef een temperatuur in: "));
  const unit = prompt("welke unit gebruikt u? Celsius of Fahrenheit (C of F):")
    .trim()
    .toUpperCase();
  let result = 0;

  switch (unit) {
    case "C":
      result = celsiusToFahrenheit(TEMPERATURE);

      console.log(
        `${TEMPERATURE}°${unit} omgezet naar Fahrenheit is ${result.toFixed(
          2
        )}°F`
      );
      break;
    case "F":
      result = fahrenheitToCelsius(TEMPERATURE);
      console.log(
        `${TEMPERATURE}°${unit} omgezet naar Celsius is ${result.toFixed(2)}°C`
      );
      break;
    default:
      console.error("De eenheid is niet correct ingevoerd!");
      alert("De eenheid is niet correct ingevoerd!");
      return;
  }
}
main();

function celsiusToFahrenheit(TEMPERATURE) {
  return (TEMPERATURE * 9) / 5 + 32;
}
function fahrenheitToCelsius(TEMPERATURE) {
  return ((TEMPERATURE - 32) * 5) / 9;
}
