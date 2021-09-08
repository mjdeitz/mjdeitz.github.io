"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
// module.exports = { double, times100, myMap };
//add all of your function names here that you need for the node mocha tests



/**
 * @param {number} num number to be doubled
 *@returns {number} double the input
 */
function double(num) {
    num = num * 2;
    return num;
}



/**
 * @param {number} num Multipy by 100
 * @returns {number} 100 times the input
 */
function times100(num) {
    num = num * 100;
    return num;
}


/**
 * @param {Array} testArray test array 
 * @param {function} testFunction helper function name
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(testArray, testFunction) {

    let newArray = [];
    for (const element of testArray) {
        newArray.push(testFunction(element));
    }
    return newArray;

}
