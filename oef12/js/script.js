"use strict";

function main() {
  const LIMIT = parseInt(prompt("Geef de limiet op:"), 10);
  let sum = 0;

  for (let i = 0; i <= LIMIT; i+=2) {
    sum += i;
    console.log(`${i} ${i === LIMIT ? "=" : "+"} `);
  }
  console.log(sum);
}
main();
