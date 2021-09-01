/**
 * continuous loop that prompts for age until age greater than 18 is entered
 */



// using while loop

"use strict";

let prompt = require('prompt-sync')();
let userInput = prompt("Please enter your age: ");
let userAge = Number(userInput);

// while (userAge < 18) {
//     userInput = prompt("Please enter your age: ");
//     userAge = Number(userInput);
// }

do {
    userInput = prompt("Please enter your age: ");
    userAge = Number(userInput);
} while (userAge < 18);