"use strict";

const fs = require("fs");

fs.readFile("day6.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = data.split("\n\n").map(raw => {
        let rawlength = raw.split("\n").length - 1;
        let st = raw.replace(/\n/g,'').split('').sort().join('')
        let re = RegExp(`(.)\\1{${rawlength}}`, 'g');
        return ((st || "").match(re) || []).length 
    })

    console.log(inputlist.reduce((ac, cv) => ac + cv));

});
