"use strict";

const fs = require("fs");

const scanlist = (needle, haystack) => {
    return haystack.filter(v => v.b.includes(needle)).map(v => v.k);
}

fs.readFile("day7b.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = data.split("\n");

    let res = inputlist.map(v => {
        let key = v.split(' contain ')[0].replace(/ bag[s]?[\.]?/, '');
        let bags = v.split(' contain ')[1].split(', ').map(v => v.replace(/[0-9]\s/, '').replace(/ bag[s]?[\.]?/, ''));

        return { k: key, b: bags }
    })
    
    let out = scanlist('shiny gold', res);
    let b = [];
    while (out.length > 0) {
        let f = out.shift();
        b = [...b, f];
        out = [...out, ...scanlist(f, res)]
    }

    console.log(new Set(b).size);
    

});
