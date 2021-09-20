"use strict";


/* You need the assert and function name declarations to test in node.
Comment these out when you send it to the browser with the index.html mocha setup page.  */

const assert = require("assert");  //always need this with node
const myExports = require("./mochaLike.js");  //with node need the name of your file with your functions here
const inObject = myExports.inObject;  //do this for all of the functions used in the Mocha tests
const inObjectValue = myExports.inObjectValue;
const ofArray = myExports.ofArray;

describe("for in(object) for of(array) tests", function () {

    const numbers = {
        one: 1,
        two: 22,

    };

    const array = ["apple", "pear",];

    it("tests inObject", function () {
        assert.strictEqual(inObject(numbers), (" one two"));

    });

    it("tests inObjectValue", function () {
        assert.strictEqual(inObjectValue(numbers), (" 1 22"));
    });

    it("tests ofArray", function () {
        assert.strictEqual(ofArray(array), " apple pear");
    });


});