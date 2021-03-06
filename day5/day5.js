"use strict";

const fs = require("fs");

fs.readFile("day5.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = data.split("\n").map(raw => { 
        let row = parseInt(raw.slice(0,7).replace(/B/g, 1).replace(/F/g, 0), 2);
        let seat = parseInt(raw.slice(-3).replace(/R/g, 1).replace(/L/g, 0), 2);
        return (row * 8) + seat;
    });

    console.log(Math.max(...inputlist));

});
