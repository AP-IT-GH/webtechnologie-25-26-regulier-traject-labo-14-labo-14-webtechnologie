"use strict";

function main(){
    const BASE_NUMBER = 10;
    const ITERATIONS_AMOUNT = 20;
    let countryMap = "";
    for (let i = 1; i <= ITERATIONS_AMOUNT; i++) {
        countryMap += `${i}:\t${BASE_NUMBER} x ${i} = ${BASE_NUMBER * i}\n`; 
    }
    console.log(countryMap);
}
main();