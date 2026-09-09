const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

function solution(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return Math.floor(sum / 10);
}

console.log(solution(n));