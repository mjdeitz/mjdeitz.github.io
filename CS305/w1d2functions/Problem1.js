/**
 * /**DEFINING TABLE
inputs: salaried/not salaried(boolean), salesAmount(number)
outputs: sales commission
process:
- determine if salaried or not
- calculate sales commission based on rules
- return sales commission
-
*/
"use strict";

function computeSalesCommission(salaried, salesAmount) {

    let commission = 0;
    // compute salaried commission
    if (salaried) {
        if (salesAmount < 300) {
            commission = 0;
        } else if ((salesAmount >= 300) && (salesAmount <= 500)) {
            commission = salesAmount * .01;
        } else if (salesAmount > 500) {
            commission = salesAmount * .02;
        }
    }
    // compute hourly commission
    if (!salaried) {
        if (salesAmount < 300) {
            commission = 0;
        } else if ((salesAmount >= 300) && (salesAmount <= 500)) {
            commission = salesAmount * .02;
        } else if (salesAmount > 500) {
            commission = salesAmount * .03;
        }
    }

    return commission;

}


console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));