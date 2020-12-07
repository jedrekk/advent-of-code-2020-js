"use strict";

const fs = require("fs");

fs.readFile("day6.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = data.split("\n\n").map(raw => new Set(raw.replace(/\n/g,'').split('')).size).reduce((ac, cv) => ac + cv);

    console.log(inputlist);

});
