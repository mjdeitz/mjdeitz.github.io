"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {
  return function (num) {
    return arr.includes(num);
  };
}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
  return function (num) {
    return num >= low && num <= high;
  };
}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName) {
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}


/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () { // shooter function
      console.log(j); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

