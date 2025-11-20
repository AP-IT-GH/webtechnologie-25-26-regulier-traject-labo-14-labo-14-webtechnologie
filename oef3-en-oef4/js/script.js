"use strict";

function main() {
  const FIRST_NUMBER = parseInt(prompt("Geef het eerste getal:"), 10);
  const SECOND_NUMBER = parseInt(prompt("Geef het tweede getal:"), 10);
  const OPERATOR = prompt("Geef de operator in:").trim();
  let result = 0;
  
  switch (OPERATOR) {
    case "+":
      result = FIRST_NUMBER + SECOND_NUMBER;
      break;
    case "-":
      result = FIRST_NUMBER - SECOND_NUMBER;
      break;
    case "*":
      result = FIRST_NUMBER * SECOND_NUMBER;
      break;
    case "/":
      if (SECOND_NUMBER === 0) {
        console.log("Delen door 0 mag niet!");
        return; //main() stopt hier zodat onderstaande result output niet tevoorschijn komt
      } else {
        result = FIRST_NUMBER / SECOND_NUMBER;
      }
      break;
    default:
      console.log("Deze operator herkennen we niet.");
      return; //main() stopt hier zodat onderstaande result output niet tevoorschijn komt
      break;
  }

    console.log(
      `De uitkomst is ${FIRST_NUMBER} ${OPERATOR} ${SECOND_NUMBER} = ${result}`);
}
main();
