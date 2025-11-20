"use strict";

function main() {
  const START_HOUR = parseInt(prompt("Geef een startuur in:"), 10);
  const START_MINUTES = parseInt(prompt("Geef de start minuten in: "), 10);
  const EXTRA_MINUTES = 30;
  const EXTRA_HOURS = 72;

  let newMinutes = (START_MINUTES + EXTRA_MINUTES) % 60;
  let hoursPassed = Math.floor((START_MINUTES + EXTRA_MINUTES) / 60);

  let newHour = (START_HOUR + EXTRA_HOURS + hoursPassed) % 24;
  let daysPassed = Math.floor((START_HOUR + EXTRA_HOURS + hoursPassed) / 24);

  if (daysPassed === 0) {
    console.log(
      `${newHour.toString().padStart(2, "0")}:${newMinutes
        .toString()
        .padStart(2, "0")} valt nog op dezelfde dag.`
    );
  } else if (daysPassed >= 1) {
    console.log(
      `${newHour.toString().padStart(2, "0")}:${newMinutes
        .toString()
        .padStart(2, "0")} valt ${daysPassed} dag${
        daysPassed > 1 ? "en" : ""
      } later.`
    );
  }
}
main();
