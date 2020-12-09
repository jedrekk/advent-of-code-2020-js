"use strict";

const fs = require("fs");

const parsecmd = (line, acc, inputlist) => {
    let [cmd, val] = inputlist[line].split(" ");
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
let inputlist = data.split("\n");

let [cmd, acc] = parsecmd(0, 0, inputlist);
let cmdlist = [0];
while (!cmdlist.includes(cmd)) {
    cmdlist = [...cmdlist, cmd];
    [cmd, acc] = parsecmd(cmd, acc, inputlist);
}
console.log(acc);

});
