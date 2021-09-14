"use strict";
///* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary, getDateAgo, getLocalDay, getWeekDay, formatDate, getLastDayOfMonth };
//add all of your function names here that you need for the node mocha tests



/**
 * 
 * @param {object} salaries pay amounts
 * @returns {String} name of top paid person
 */
function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}


/**
 * 
 * @param {object} date current date
 * @param {Number} days number days to/from date
 * @returns {object} date after adjustment
 */
function getDateAgo(date, days) {

    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();

}


/**
 * 
 * @param {object} date date 
 * @returns {Number} day of week "European"
 */
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // weekday 0 (sunday) is 7 in european
        day = 7;
    }

    return day;
}



/**
 * 
 * @param {object} date date 
 * @returns {String} proper weekday name in short format
 */
function getWeekDay(date) {
    let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

    return days[date.getDay()];
}



/**
 * 
 * @param {object} date date
 * @returns {object} formatted date
 */
function formatDate(date) {
    let diff = new Date() - date; // the difference in milliseconds

    if (diff < 1000) { // less than 1 second
        return "right now";
    }

    let sec = Math.floor(diff / 1000); // convert diff to seconds

    if (sec < 60) {
        return sec + " sec. ago";
    }

    let min = Math.floor(diff / 60000); // convert diff to minutes
    if (min < 60) {
        return min + " min. ago";
    }

    // format the date
    // add leading zeroes to single-digit day/month/hours/minutes
    let d = date;
    d = [
        "0" + d.getDate(),
        "0" + (d.getMonth() + 1),
        "" + d.getFullYear(),
        "0" + d.getHours(),
        "0" + d.getMinutes()
    ].map(component => component.slice(-2)); // take last 2 digits of every component

    // join the components into date
    return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}

/**
 * 
 * @param {Number} year year 
 * @param {Number} month month
 * @returns {Number} last day of month
 */
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}