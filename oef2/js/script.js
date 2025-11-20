"use strict";

function main(){
    const YEAR = parseInt(prompt(), 10);
    if (YEAR % 4 === 0 && 
        (YEAR % 100 !== 0 || YEAR % 400 === 0) ) {
        console.log(`${YEAR} is een schrikkeljaar!`);
    }else{
        console.log(`${YEAR} is geen schrikkeljaar!`)
    }
}
main();