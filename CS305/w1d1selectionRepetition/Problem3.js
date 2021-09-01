"use strict";

//program to compute compound interest monthly given annual interest rate and years of savings and initial
//deposit

/**DEFINING TABLE
inputs: annual interest rate, initial deposit, years
outputs: final balance
process:
- convert the inputs to numbers
- get monthly interest rate by dividing annual by 12
- months of interest will be years * 12
-
*/

/** suppose I'm getting 12 percent interest will tell you if compounded daily monthly year
 * if compound for whole year will be 12 percent but if compounded montly 12 percent is 1 percent
 * per month - now I'm collecting interest on the interest */

const prompt = require("prompt-sync")();

const initialAmount = prompt("Enter inital amount: ");
const annualInterestRate = prompt("Enter annual interest rate: ");
const yearsCompounded = prompt("Enter number of years to compound: ");

const monthlyInterestRate = annualInterestRate / 1200;  //interest rate is 12 * 100 to convert to percent

let compoundInterest = initialAmount * (1 + (monthlyInterestRate)) ** (12 * yearsCompounded);

console.log("Total amount of interest including initial investment: " + compoundInterest);

