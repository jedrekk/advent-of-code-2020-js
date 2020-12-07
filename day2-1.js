"use strict";

const fs = require("fs");

fs.readFile("day2.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = data.split("\n").map(v => { return v.split(": ") });

    
    let correctlist = inputlist.filter(v => {
        let range = v[0].split(' ')[0].split('-')
        let char = v[0].split(' ')[1];
        let st = v[1];
        return (st[range[0]-1] === char ^ st[range[1]-1] === char)
    });

    console.log(correctlist.length);
});

