"use strict";

const fs = require("fs");

const parsecmd = (line, acc, inputlist, flip) => {
    let [cmd, val] = inputlist[line].split(" ");
    if (line === flip) {
        cmd = cmd === 'nop' ? 'jmp' : 'nop';
    }
    switch (cmd) {
        case "nop":
            return [line + 1, acc];
        case "acc":
            return [line + 1, acc + parseInt(val)];
        case "jmp":
            return [line + parseInt(val), acc];
    }
};

fs.readFile("./day8.data.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
let inputlist = data.split("\n")

let [cmd, acc] = parsecmd(0, 0, inputlist);
let fliplines = [];
let cmdlist = [0];
while (!cmdlist.includes(cmd)) {
    cmdlist = [...cmdlist, cmd];
    [cmd, acc] = parsecmd(cmd, acc, inputlist);
    if ((inputlist[cmd].split(' ')[0] === 'jmp') || (inputlist[cmd].split(' ')[0] === 'nop')) {
        fliplines = [...fliplines, cmd];
    }
}

fliplines = fliplines.reverse()

for (let flip = 0; flip < fliplines.length; flip++) {
    let [cmd, acc] = parsecmd(0, 0, inputlist);
    let cmdlist = [0];
    while (!cmdlist.includes(cmd)) {
        cmdlist = [...cmdlist, cmd];
        if (cmd >= inputlist.length) {
            console.log(`solution: ${acc}`);
            console.log(`needed to flip line: ${fliplines[flip]} -- ${inputlist[fliplines[flip]]}`);
            process.exit(1)
        }
        [cmd, acc] = parsecmd(cmd, acc, inputlist, fliplines[flip]);
    }
    console.log("tried", fliplines[flip]);
}



// [cmd, acc] = parsecmd(0, 0, inputlist);
// cmdlist = [0];
// while (cmd < inputlist.length) {
//     cmdlist = [...cmdlist, cmd];
//     [cmd, acc] = parsecmd(cmd, acc, inputlist);
//     console.log(cmdlist.filter(v => v === cmd).map(v => '-').join(''), cmd, inputlist[cmd]);
// }
// console.log(acc);
});
