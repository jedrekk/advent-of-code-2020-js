"use strict";

const fs = require("fs");

fs.readFile("day2.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = data.split("\n").map(v => { return v.split(": ") });

    
    let correctlist = inputlist.filter(v => {
        let range = v[0].split(' ')[0].replace('-', ',');
        let char = v[0].split(' ')[1];
        let rec = new RegExp(char, "g");
        if (!v[1].match(rec)) {
            return false;            
        }
        let st = v[1].match(rec).join("");
        let re = new RegExp(`^[${char}]{${range}}$`);
        return re.test(st);
    });

    console.log(correctlist.length);
});

