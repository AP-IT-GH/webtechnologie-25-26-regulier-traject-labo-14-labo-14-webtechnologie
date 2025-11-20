"use strict";

function main(){
    const INITIAL_VALUE = parseInt(prompt("Geef de startwaarde op:"), 10);
    let counter = INITIAL_VALUE;
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
}
main();