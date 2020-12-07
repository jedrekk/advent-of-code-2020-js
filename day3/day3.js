"use strict";

const fs = require("fs");

fs.readFile("day3.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = data.split("\n");
    let width = inputlist[0].length;
    let counter = 0;
    let out = inputlist.map((v, i) => {
        if (v[(i * 3) % width] === '#') {
            counter = counter + 1;
        }
    });

    console.log(counter);

});
