// Project One: Reverse A String Input
// By Chester Booker
// 18/05/17

'use strict';

// Clears the console
console.log('\x1Bc');

console.log('Project "Reverse A String"');
console.log('Please enter a string and the program will print it\'s reverse.');
console.log('Type "quit" to exit!\n');

process.stdout.write('Enter text here:');

// process is a global object always avaliable to Node.js
// the default for process.stdin is paused
process.stdin.resume();
process.stdin.setEncoding('utf8');

// require loads Node.js Modules
var util = require('util');

process.stdin.on('data', function (text) {

    // if the user types "quit" exit the application
    if (text === 'quit\r\n') {
        process.exit();
    }
    else if (text === '\r\n') {
        // do nothing if they just press enter
    }
    else {
        // remove the "new line" characters from the input text
        var inputString = util.inspect(text).substring(1, util.inspect(text).length - 5);
        var outputString = reverseString(inputString);

        // Additional functionality for detecting palindromes
        if (inputString === outputString) {
            console.log('~PALINDROME DETECTED~');
            console.log(inputString, ' is a PALINDROME!\n');
        }
        else {
            console.log('\'', inputString, '\' (INPUT)');
            console.log('\'', outputString, '\' (REVERSED)\n');
        }
    }
    process.stdout.write('Enter text here:');
});

// splits a string into an array, reverses the array and then joins it back up
function reverseString(str) {
    var str = str.split("");
    var reversedArray = str.reverse();
    return reversedArray.join("");
}