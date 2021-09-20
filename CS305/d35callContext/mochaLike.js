"use strict";

/*
Extra credit (Optional) Write your own Mocha-like framework.
You will need to implement your own “describe” and “it” functions,
and an assert.strictEquals function. Do not worry about other
assert functions. Your framework should log to the console the
describe and it text messages and whether the tests fail or succeed.
Try using your framework with one or two of your assignment files
instead of the given Mocha test files.
*/


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
module.exports = { inObject, inObjectValue, ofArray };
//add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {object} obj test object 
 * @returns {string} object properties
 */
function inObject(obj) {

    let str = "";
    for (const property in obj) {
        str = str + " " + property;
    }
    return str;
}

/**
 * 
 * @param {object} obj test object 
 * @returns {string} object values
 */
function inObjectValue(obj) {
    let str = "";
    for (const value in obj) {
        str = str + " " + obj[value];
    }
    return str;
}

/**
 * 
 * @param {object} arr test array 
 * @returns {string} array items
 */
function ofArray(arr) {
    let str = "";
    for (const item of arr) {
        str = str + " " + item;
    }
    return str;
}

