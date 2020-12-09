"use strict";

const fs = require("fs");

const checkSums = (range, num) => {
    for (let i = 0; i < range.length; i++) {
        for (let j = i+1; j < range.length; j++) {
            if (range[i] + range[j] === num) {
                return true;
            }
        }
    
    }
    return false;
}

fs.readFile("./day9.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = data.split("\n").map(v => parseInt(v));
    let res = true;
    const len = 25;
    let index = len;
    while (res) {
        res = checkSums(inputlist.slice(index - len, len+index), inputlist[index])
        index++;
    }
    const invalidnumber = inputlist[index-1];

    console.log("Invalid Number:", invalidnumber);
    let i;

    let j;
    for (i = 0; i < inputlist.length; i++) {
        for (j = i+2; j < inputlist.length; j++) {
            if (invalidnumber === inputlist.slice(i, j).reduce((acc, cv) => acc + cv)) {
                let resultlist = inputlist.slice(i, j)
                console.log("Encryption Weakness: ", Math.max(...resultlist) + Math.min(...resultlist))
            }
        }
    }

});
