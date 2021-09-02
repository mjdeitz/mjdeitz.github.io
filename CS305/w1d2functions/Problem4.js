/**
 * Program containing two function sumDigits and multDigits that take an integer as parameter 
 * and return the sum or product of the digits in the number.
 */

"use strict";
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

console.log("Sum Input 1 = 1234: " + sumDigits(1234));
console.log("Sum Input 2 = 102: " + sumDigits(102));
console.log("Sum Input 3 = 8: " + sumDigits(8));

console.log("Multiply Input 1 = 1234: " + multDigits(1234));
console.log("Multiply Input 2 = 102: " + multDigits(102));
console.log("Multiply Input 3 = 8: " + multDigits(8));