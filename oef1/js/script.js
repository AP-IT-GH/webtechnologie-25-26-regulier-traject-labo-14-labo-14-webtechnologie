"use strict";

function main() {
  let firstName = prompt("Geef je voornaam: ");
  let lastName = prompt("Geef je achternaam: ");
  let age = parseInt(prompt("Geef je leeftijd in: "));

  if (!firstName.trim() || !lastName.trim() || isNaN(age)) {
    console.log("Vul zowel voornaam achternaam en leeftijd in!");
  } else if (age < 12 || age > 60) {
    console.log("U behoort niet tot de gezocht leeftijdsklasse!");
  } else {
    console.log(
      `Welkom ${firstName} ${lastName}, u ziet er goed uit voor iemand die ${age} jaar oud is.`
    );
  }
}
main();
