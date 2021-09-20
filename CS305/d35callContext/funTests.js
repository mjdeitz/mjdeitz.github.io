"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {object} arr array
 * @param {object} func function
 * @returns {object} new array 
 */
function myMap(arr, func) {
    let newArray = [];

    for (const element of arr) {
        let value = func(element);
        newArray.push(value);
    }

    return newArray;
}

/**
 * 
 * @param {object} arr array
 * @param {object} func function
 * @returns {object} new array
 */
function myFilter(arr, func) {

    let newArray = [];
    for (const element of arr) {
        if (func(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}

/**
 * 
 * @param {Object} arr array 
 * @param {object} func function
 * @param {Number} initialValue number
 * @returns {Object} array or number 
 */
function myReduce(arr, func, initialValue) {

    let newArray = [];
    let acc = initialValue;
    let value = 0;

    if (initialValue === undefined) {
        for (const element of arr) {
            value = func(element);
            if (value) {
                newArray.push(element);
            }
        }
        return newArray;
    }

    if (initialValue >= 0) {
        for (const element of arr) {
            acc = func(element, acc);

        }
        return acc;
    }
}