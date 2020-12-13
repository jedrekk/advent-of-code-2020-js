"use strict";

const fs = require("fs");

fs.readFile("./day10.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = [0, ...data.split("\n").map(v => parseInt(v)).sort((a, b) => a - b)];
    inputlist = [...inputlist, inputlist[inputlist.length-1] + 3];

    let onecount = 0;
    let threecount = 0;
    for (let i = 1; i < inputlist.length; i++) {
        let diff = inputlist[i] - inputlist[i-1];
        console.log(i, diff, inputlist[i], inputlist[i-1])
        if (diff === 1) {
            onecount = onecount + 1;
        } else if (diff === 3) {
            threecount = threecount + 1;
        }
    }

    console.log("1:", onecount, "3:", threecount, "answer:", onecount * threecount);



});
