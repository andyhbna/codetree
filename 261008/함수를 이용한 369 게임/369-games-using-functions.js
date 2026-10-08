const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(/\s+/);
const A = Number(input[0]);
const B = Number(input[1]);

function checkNumber(n) {
    if (n % 3 === 0) return true;

    const str = String(n);

    return str.includes("3") || str.includes("6") || str.includes("9");
}

function solution(A, B) {
    let count = 0;

    for (let i = A; i <= B; i++) {
        if (checkNumber(i)) {
            count++;
        }
    }

    return count;
}

console.log(solution(A, B));