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

"use strict";
function calcDownpayment(homeCost) {
    let downPayment = 0;
    if (homeCost < 50000) {
        downPayment = .05 * homeCost;
    } else if (homeCost >= 50000 && homeCost < 100000) {
        downPayment = 2500 + .10 * (homeCost - 50000);
    } else if (homeCost >= 100000 && homeCost < 200000) {
        downPayment = 7500 + .15 * (homeCost - 100000);
    } else {
        downPayment = 5000 + .10 * (homeCost - 200000);
    }
    return downPayment;
}

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 22500: ", calcDownpayment(200000));
