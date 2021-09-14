"use strict";
/* global assert topSalary  getDateAgo   getLocalDay getWeekday    formatDate getLastDayOfMonth */
///* eslint-disable quotes   */

/* comment out the node specific code when going to the browser*/
// const assert = require("assert");
// const myExports = require("./destructure.js");
// const topSalary = myExports.topSalary;  //do this for all of the functions used in the Mocha tests
// const getDateAgo = myExports.getDateAgo;
// const getLocalDay = myExports.getLocalDay;
// const getWeekDay = myExports.getWeekDay;
// const formatDate = myExports.formatDate;
// const getLastDayOfMonth = myExports.getLastDayOfMonth;



/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
describe("topSalary", function () {
    it("returns top-paid person", function () {
        let salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };

        assert.equal(topSalary(salaries), "Pete");
    });

    it("returns null for the empty object", function () {
        console.log("topsalary: ", topSalary({}));
        assert.strictEqual(topSalary({}), null);
    });
});

describe("getDateAgo", function () {
    it("returns day of month days ago from the date", function () {
        let date = new Date(2015, 0, 2);

        assert.equal(getDateAgo(date, 1), 1);
        assert.equal(getDateAgo(date, 2), 31);
        assert.equal(getDateAgo(date, 365), 2);
    });

});


describe("getLocalDay", function () {
    it("returns European day of the week for date", function () {
        let date = new Date(2012, 0, 3);

        assert.equal(getLocalDay(date), 2);
    });

});



describe("getWeekDay", function () {
    it("returns proper day name", function () {
        let date = new Date(2014, 0, 3); // 3 Jan 2014

        assert.equal(getWeekDay(date), "FR");
    });

});


describe("formatDate", function () {
    it("returns date formatted based on value passed", function () {

        assert.equal(formatDate(new Date(new Date - 1)), "right now");
        assert.equal(formatDate(new Date(new Date - 30 * 1000)), "30 sec. ago");
        assert.equal(formatDate(new Date(new Date - 5 * 60 * 1000)), "5 min. ago");
    });

});


describe("getLastDayOfMonth", function () {
    it("returns last day of month", function () {

        assert.equal(getLastDayOfMonth(2012, 0), 31);
        assert.equal(getLastDayOfMonth(2012, 1), 29);
        assert.equal(getLastDayOfMonth(2013, 1), 28);
    });

});