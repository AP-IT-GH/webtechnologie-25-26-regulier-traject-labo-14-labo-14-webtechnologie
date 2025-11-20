"use strict";

function main() {
  const SECRET_NUMBER = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  const guessedNumbers = [];
  let index = -1;
  do {
    index++;
    guessedNumbers[index] = parseInt(prompt("Gok het getal:"), 10);

    if (isNaN(guessedNumbers[index])) {
        index--;
        alert("ongeldige invoer!");
        continue;
    }

    if (guessedNumbers[index] < SECRET_NUMBER) {
      alert(
        `Het getal dat je zoekt is hoger dan ${guessedNumbers[index]}`
      );
    } else if (guessedNumbers[index] > SECRET_NUMBER) {
      alert(
        `Het getal dat je zoekt is lager dan ${guessedNumbers[index]}`
      );
    }
  } while (guessedNumbers[index] !== SECRET_NUMBER);
  console.log("Correct u hebt het getal geraden!");
}
main();
