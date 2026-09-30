const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function checkNumber(n) {
    const tens = Math.floor(n / 10);
    const ones = n % 10;

    if (n % 2 === 0 && (tens + ones) % 5 === 0) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(checkNumber(n));