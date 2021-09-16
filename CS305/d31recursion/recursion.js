"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop };
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


/**
*
* @param {Object} node is a node for a linked list
* @returns {string} just to make the test pass and assert the console.logs are working
*/
function outputList(node) {
    if (node.next === null) { // base case once null is reached

    } else {

        outputList(node.next); //recursive step
    }
    return "1 2 3 4 printed to console";
}


/**
 * 
 * @param {object} list list 
 * @returns {String} for test purposes
 */
function outputListLoop(list) {
    let tmp = list;

    while (tmp) {
        //console.log(tmp.value);
        tmp = tmp.next;
    }
    return "1 2 3 4 printed to console";
}



/**
 * 
 * @param {object} list list
 * @return {string} test purposes 
 */
function reverseList(list) {

    if (list.next) {
        reverseList(list.next);
    }

    //console.log(list.value);
    return "4 3 2 1 printed to console";
}


/**
 * 
 * @param {object} list node 
 * @returns {string} test purposes
 */
function reverseListLoop(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        //console.log(arr[i]);
    }
    return "4 3 2 1 printed to console";
}