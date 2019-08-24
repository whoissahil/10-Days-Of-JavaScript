var readline = require('readline-sync');

const secondInteger = readline.question("What is secondInteger? - ");
const secondDecimal = readline.question("What is secondDecimal? - ");
const secondString = readline.question("What is secondString? - ");

performOperation(secondInteger, secondDecimal, secondString);

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    var myInt = Number(firstInteger) + Number(secondInteger);
    console.log(myInt);

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    var myDec = Number(firstDecimal) + Number(secondDecimal);
    console.log(myDec);

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    var myString = firstString + secondString
    console.log(myString);
}