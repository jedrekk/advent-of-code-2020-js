"use strict";

const fs = require("fs");

const scanlist = (needle, haystack, multiplier = 1) => {
    let m = haystack.find(v => v.k === needle)
    if (m) {
        return m.b.map(v => { return { count: v.count * multiplier, bag: v.bag }});
    }
    return []
}

fs.readFile("day7b.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = data.split("\n");

    let res = inputlist.map(v => {
        let key = v.split(' contain ')[0].replace(/ bag[s]?[\.]?/, '');
        let bags = v.split(' contain ')[1].split(', ').map(v => {
            let m = v.match(/[0-9]/)
            return { count: m ? m[0] : 0, bag: v.replace(/[0-9]\s/, '').replace(/ bag[s]?[\.]?/, '') }
        });

        return { k: key, b: bags }
    })

    let out = scanlist('shiny gold', res);
    let b = [];
    while (out.length > 0) {
        let f = out.shift();
        b = [...b, f];
        out = [...out, ...scanlist(f.bag, res, f.count)]
    }
    console.log(b.map(v => v.count).reduce((ac, cv) => ac + cv))

    // console.log(new Set(b).size);
    

});
