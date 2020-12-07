"use strict";

const fs = require("fs");

const testData = (key, val) => {
    switch (key) {
        case 'byr':
            return ((parseInt(val) >= 1920) && (parseInt(val) <= 2002))
        case 'iyr':
            return ((parseInt(val) >= 2010) && (parseInt(val) <= 2020))
        case 'eyr':
            return ((parseInt(val) >= 2020) && (parseInt(val) <= 2030))
        case 'hgt':
            if (val.slice(-2) === 'cm') {
                let cal = val.slice(0,-2);
                return ((cal >= 150) && (cal <= 193))
            } else if (val.slice(-2) === 'in') {
                let cal = val.slice(0,-2);
                return ((cal >= 59) && (cal <= 76))
            }
            return false;
        case 'hcl':
            return /^\#[0-9a-f]{6}$/.test(val)
        case 'ecl':
            return ['amb','blu','brn','gry','grn','hzl','oth'].includes(val);
        case 'pid':
            return /^[0-9]{9}$/.test(val);
        default:
            return true
    }
}

fs.readFile("day4.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let inputlist = data.split("\n\n").map(v => v.replace(/\n/g, " ").split(" "))
    let success = inputlist.filter(v => {
            let keylist = v.map(k => k.split(':')[0]).sort().join('');
            return (keylist === 'byrecleyrhclhgtiyrpid' || keylist === 'byrcidecleyrhclhgtiyrpid');
        }).filter((pass, i) => {
            let p = pass.map(passdata => {
                let pd = passdata.split(':');
                let td = testData(pd[0], pd[1]);
                return td;
            }).every(v => v)
        return p;
    })

    console.log(success.length)

});
