"use strict";

function main(){
    const COLUMNS = 10;
    const ROWS = 10;
    let grid = "";

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            grid += "x";
        } 
        grid += "\n"
    }
    console.log(grid);
}
main();