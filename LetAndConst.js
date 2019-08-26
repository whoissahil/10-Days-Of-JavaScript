var readline = require('readline-sync');
const r = readline.question("What is Number ? - ");
const PI = Math.PI;

// Print the area of the circle:
console.log(PI * r * r);
// Print the perimeter of the circle:
console.log(PI * 2 * r);