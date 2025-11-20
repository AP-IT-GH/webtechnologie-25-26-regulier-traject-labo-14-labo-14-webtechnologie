"use strict";

function main(){
    const ANSWER = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const userGuess = parseInt(prompt("Raad het getal: "), 10);

    if (ANSWER === userGuess) {
        console.log("Gefeliciteerd, je hebt het juiste getal geraden!");
    }else{
        console.log(`Helaas, het juiste getal was ${ANSWER}.`);
    }
}
main();