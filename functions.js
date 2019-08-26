var readline = require('readline-sync');

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const n = readline.question("What is Number ? - ");
console.log(factorial(n));
