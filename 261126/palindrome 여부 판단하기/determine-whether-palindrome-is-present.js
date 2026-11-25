const fs = require("fs");
const A = fs.readFileSync(0).toString().trim();

function isPalindrome(A) {
    return A === A.split("").reverse().join("");
}

console.log(isPalindrome(A) ? "Yes" : "No");