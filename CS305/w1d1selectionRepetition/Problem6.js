/**
 * Program that computes sum of all the digits of an integer
 * 
 */

"use strict";
// /*eslint-disable*/

let prompt = require("prompt-sync")();
let userInput = prompt("Please enter an integer: ");

let sum = 0;

while (userInput > 0) {
    sum = sum + (Math.floor(userInput) % 10);
    userInput = userInput / 10;
}

console.log(sum);

