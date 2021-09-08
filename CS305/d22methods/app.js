"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { Accumulator, Calculator }; 
//add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Number} initialValue starting value 
 * @param {Number} increment step up value
 * @return {Accumulator} this is a Constructor function
 */
function Accumulator(initialValue, increment) {

    this.initialValue = initialValue;
    this.increment = increment;
    this.currentValue = initialValue;

    this.accumulate = function () {
        this.currentValue += increment;
    };

    this.report = function () {
        return this.initialValue;
    };
}


/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {

    this.setValues = function (operand1, operand2) {
        this.a = operand1;
        this.b = operand2;
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}