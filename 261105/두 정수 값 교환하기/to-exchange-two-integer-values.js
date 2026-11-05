const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(/\s+/);

let n = Number(input[0]);
let m = Number(input[1]);

function swap(a, b) {
    return [b, a];
}

[n, m] = swap(n, m);

console.log(n, m);