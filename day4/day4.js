"use strict";

const fs = require("fs");

fs.readFile("day4.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = data.split("\n\n").map(v => v.replace(/\n/g, " ").split(" ").map(w => w.split(':')[0]).sort().join(''));

    console.log(inputlist.filter(v => v === 'byrecleyrhclhgtiyrpid' || v === 'byrcidecleyrhclhgtiyrpid').length)
});
