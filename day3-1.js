"use strict";

const fs = require("fs");

fs.readFile("day3.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = data.split("\n");
    let width = inputlist[0].length;
    let steps = [1, 3, 5, 7];
    
    let res = steps.map((step) => {
        let counter = 0;
        inputlist.map((v, i) => {
            if (v[(i * step) % width] === '#') {
                counter = counter + 1;
            }
        });
        return counter;
    });

    let counter = 0;
    inputlist.map((v, i) => {
        if (v[(i * 0.5) % width] === '#' && (i % 2 === 0)) {
            counter = counter + 1;
        }
    });
    
    res = [...res, counter];

    console.log(res)
    console.log(res.reduce((acc, cv) => acc * cv));

});
