const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

function findMin(a, b, c) {
    return Math.min(a, b, c);
}

console.log(findMin(a, b, c));