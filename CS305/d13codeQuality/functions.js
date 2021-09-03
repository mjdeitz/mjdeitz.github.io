//function.js
"use strict";
module.exports = { isVowel, computeSalesCommission, compoundInterest, calcDownpayment, sumDigits, multDigits };



/**
 * 
 * @param {string} letter string of length 1 
 * @returns {boolean} true if it is a vowel, false otherwise
 */
function isVowel(letter) {
    switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
        default:
            return false;
    }
}




/**
 * 
 * @param {Boolean} salaried true if salaried, false if not salaried
 * @param {Number} salesAmount amount of sales
 * @returns {Number} commmission amount 
 */
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


/**
 * 
 * @param {Number} initialAmount initial deposit 
 * @param {Number} annualInterestRate interest rate annual
 * @param {Number} yearsCompounded number of years 
 * @returns {Number} amount of interest earned + initial deposit
 */
function compoundInterest(initialAmount, annualInterestRate, yearsCompounded) {

    const monthlyInterestRate = annualInterestRate / 1200;  //interest rate is 12 * 100 to convert to percent

    let compoundInterest = initialAmount * (1 + (monthlyInterestRate)) ** (12 * yearsCompounded);

    return parseFloat(compoundInterest.toFixed(2));
}


/**
 * 
 * @param {Number} homeCost cost of home 
 * @returns {Number} downpayment amount
 */
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



/**
 * 
 * @param {Number} input takes integer as input
 * @returns {Number} returns the sum of the numbers 
 */
function sumDigits(input) {

    let sum = 0;
    while (input > 0) {

        sum = sum + (Math.floor(input) % 10);
        input = input / 10;

    }

    return sum;
}





/**
 * 
 * @param {Number} input takes integer as input
 * @returns {Number} returns the product of the numbers 
 */
function multDigits(input) {
    let mult = 1;

    while (input > 1) {
        mult = mult * (Math.floor(input) % 10);
        input = input / 10;
    }

    return mult;
}