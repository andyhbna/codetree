const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const n = input[0];
const arr = input.slice(1);

for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
        arr[i] /= 2;
    }
}

console.log(arr.join(" "));