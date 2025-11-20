"use strict";

function main(){
    let number = parseInt(prompt("Geef een nummer tussen 0 en 10 in:"), 10);
    let feedback = "";
    let badInput = false;
    switch (number) {
      case number >= 0 && number <= 2:
        feedback = "Zeer slecht";
        break;
      case number >= 3 && number <= 4:
        feedback = "Onvoldoende";
        break;
      case number >= 5 && number <= 6:
        feedback = "Voldoende";
        break;
      case number >= 7 && number <= 8:
        feedback = "Goed";
        break;
      case number >= 9 && number <= 10:
        feedback = "Zeer goed";
        break;
      default:
        badInput = true;
        console.log(`${number} ligt buiten de range van 0 en 10.`);
        break;
    }
    console.log(`${number} op 10 is ${feedback}.`);

}
main();
