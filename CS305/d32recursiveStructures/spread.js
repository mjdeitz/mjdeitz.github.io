"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests



/**
 * 
 * @param {object} arr array 
 * @returns {object} new array(copied)
 */
function copyArray(arr) {

    let arrCopy = [...arr];

    return arrCopy;
}

/**
 * 
 * @param {object} arr1 array 
 * @param {object} arr2 array 
 * @returns {object} arr1/arr2 merged
 */
function concat(arr1, arr2) {

    let concat = [...arr1, ...arr2];

    return concat;
}


/**
 * 
 * @param {object} arr array 
 * @returns {Number} min of array
 */
function findMin(arr) {

    return Math.min(...arr);
}

/**
 * 
 * @param {Object} obj1 object
 * @param {Object} obj2 object
 * @returns {Object} combined
 */
function combineObjs(obj1, obj2) {

    let combined = { ...obj1, ...obj2 };

    return combined;
}