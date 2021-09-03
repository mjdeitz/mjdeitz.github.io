"use strict";
const assert = require("assert");

/* import from functions.js module */
const functionsModule = require("./functions.js");
const isVowel = functionsModule.isVowel;
const computeSalesCommission = functionsModule.computeSalesCommission;
const compoundInterest = functionsModule.compoundInterest;
const calcDownpayment = functionsModule.calcDownpayment;
const sumDigits = functionsModule.sumDigits;
const multDigits = functionsModule.multDigits;



describe("isVowel", function () {
    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});


describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});




describe("test of compoundInterest", function () {
    it("tests 100 initial deposit, 10 percent annual interest rate, 1 year", function () {
        assert.strictEqual(compoundInterest(100, 10, 1), 110.47);
    });
    it("tests 10000 initial deposit, 5 percent annual interest rate, 10 years", function () {
        assert.strictEqual(compoundInterest(10000, 5, 10), 16470.09);
    });
});




describe("test of calcDownpayment", function () {
    it("tests 40000 home cost", function () {
        assert.strictEqual(calcDownpayment(40000), 2000);
    });
    it("tests 50000 home cost", function () {
        assert.strictEqual(calcDownpayment(50000), 2500);
    });
    it("tests 100000 home cost", function () {
        assert.strictEqual(calcDownpayment(100000), 7500);
    });
    it("tests 200000 home cost", function () {
        assert.strictEqual(calcDownpayment(200000), 22500);
    });
});




describe("test of sumDigits", function () {
    it("tests sum of 1234", function () {
        assert.strictEqual(sumDigits(1234), 10);
    });
    it("tests sum of 102", function () {
        assert.strictEqual(sumDigits(102), 3);
    });
    it("tests sum of 8", function () {
        assert.strictEqual(sumDigits(8), 8);
    });
});





describe("test of multDigits", function () {
    it("tests product of 1234", function () {
        assert.strictEqual(multDigits(1234), 24);
    });
    it("tests product of 102", function () {
        assert.strictEqual(multDigits(102), 0);
    });
    it("tests product of 8", function () {
        assert.strictEqual(multDigits(8), 8);
    });
});

