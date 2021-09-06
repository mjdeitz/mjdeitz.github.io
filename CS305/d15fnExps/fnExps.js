"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
// module.exports = { double, times100, myMap, anonymous, arrow }; 
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
 * 
 * @param {Number} num number to be tripled 
 * @returns {Number} value after tripled
 */
function anonymous(num) {
    let tripleInputValue = function (num) { return num * 3; };
    return tripleInputValue(num);
}


/**
 * 
 * @param {Number} num number to be tripled 
 * @returns {Number} value after tripled
 */
function arrow(num) {
    let arrowTripleInputValue = (num) => { return num * 3; };
    return arrowTripleInputValue(num);
}




/**
 * @param {Array} testArray test array 
 * @param {function} testFunction helper function name
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(testArray, testFunction) {

    let newArray = [];

    for (let i = 0; i < testArray.length; i++) {
        if (testFunction === double) {
            newArray[i] = double(testArray[i]);
        } else if (testFunction === times100) {
            newArray[i] = times100(testArray[i]);
        } else if (testFunction === anonymous) {
            newArray[i] = anonymous(testArray[i]);
        } else if (testFunction === arrow) {
            newArray[i] = arrow(testArray[i]);
        }
    }
    return newArray;
}
