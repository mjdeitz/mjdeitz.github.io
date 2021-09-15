"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { sumTo, factorial, fibonacci };//, outputList, outputListLoop, reverseList, reverseListLoop };
//add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Number} num number
 * @returns {Number} sum to num
 */
function sumTo(num) {
    if (num === 0) {
        return num;
    }

    return num + sumTo(num - 1);
}


/**
 * 
 * @param {Number} num number 
 * @returns {Number} num factorial
 */
function factorial(num) {
    if (num === 1) {
        return num;
    }

    return num * factorial(num - 1);
}


/**
 * 
 * @param {Number} num start 
 * @returns {Number} fibonacci sequence
 */
function fibonacci(num) {
    if (num <= 1) {
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}