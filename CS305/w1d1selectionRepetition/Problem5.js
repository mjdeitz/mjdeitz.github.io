/**
 * /**DEFINING TABLE
inputs: cost
outputs: down payment amount
process:
- convert inputs to numbers
- use formula to calculate down payment
- for each category of house cost
-
*/

/**
 * program that calculates down payment for a home loan.
 * accepts cost as a prompt and outputs to console down payment amount
 */
"use strict";

const prompt = require("prompt-sync")();

const homeCost = prompt("Enter cost of home: ");

let downPayment = 0;

if (homeCost < 50000) {
    downPayment = .05 * homeCost;
} else if (homeCost >= 50000 && homeCost < 100000) {
    downPayment = 1000 + .10 * (homeCost - 50000);
} else if (homeCost >= 100000 && homeCost < 200000) {
    downPayment = 2000 + .15 * (homeCost - 100000);
} else {
    downPayment = 5000 + .10 * (homeCost - 200000);
}

console.log("Down payment for this home costing " + homeCost + " is " + downPayment);
