const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

const n = input[0];
const m = input[1];

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(n, m));