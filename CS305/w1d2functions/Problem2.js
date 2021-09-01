/**DEFINING TABLE
inputs: annual interest rate, initial deposit, years
outputs: final balance
process:
- convert the inputs to numbers
- get monthly interest rate by dividing annual by 12
- months of interest will be years * 12
-
*/

"use strict";

function compoundInterest(initialAmount, annualInterestRate, yearsCompounded) {

    const monthlyInterestRate = annualInterestRate / 1200;  //interest rate is 12 * 100 to convert to percent

    let compoundInterest = initialAmount * (1 + (monthlyInterestRate)) ** (12 * yearsCompounded);

    return compoundInterest;
}

console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));