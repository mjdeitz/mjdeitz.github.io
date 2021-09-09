"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, checkSpam, getMaxSubSum, truncate, extractCurrencyValue, camelize }; 
//add all of your function names here that you need for the node mocha tests



/**
 * 
 * @param {String} str to be upper 
 * @returns {String} upperCase
 */
function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

/**
 * 
 * @param {String} str words 
 * @returns {boolean} true if includes spam, false otherwise
 */
function checkSpam(str) {
    if (str.toLowerCase().includes("viagra") ||
        str.toLowerCase().includes("xxx")) {
        return true;
    }
    return false;
}

/**
 * 
 * @param {String} str before truncate 
 * @param {Number} maxlength length of string
 * @returns {string} after truncate
 */
function truncate(str, maxlength) {
    if (str.length < maxlength) {
        return str;
    }
    let truncate = str.slice(0, maxlength - 1) + '…';
    return truncate;
}


/**
 * 
 * @param {String} value string 
 * @returns {Number} number
 */
function extractCurrencyValue(value) {
    return +value.slice(1);
}



/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
    let max = 0;
    let intermediate = 0;
    for (let int of arr) {
        intermediate = Math.max(0, intermediate + int);
        max = Math.max(max, intermediate);
    }
    return max;
}


/**
 * 
 * @param {String} str before camilize 
 * @returns {String} after camelize
 */
function camelize(str) {

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-") {
            helper(i);
        }
    }

    /**
     * 
     * @param {Number} index index of char
     * @return {*} no return 
     */
    function helper(index) {
        str = str.slice(0, index) + str.slice(++index);
        let upper = --index;
        let char = str.charAt(upper);
        char = char.toUpperCase();
        str = (str.slice(0, upper) + char + str.slice(++index));
    }
    return str;
}