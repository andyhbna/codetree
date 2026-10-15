const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

function isPrime(n) {
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(A, B) {
    let sum = 0;

    for (let i = A; i <= B; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

console.log(solution(A, B));