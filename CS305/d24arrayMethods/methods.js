"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator, copySorted, getAverageAge, sortByAge }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {object} arr array of numbers 
 * @param {Number} a lower bound
 * @param {Number} b upper bound
 * @returns {object} array 
 */
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}


/**
 * 
 * @param {object} arr array of numbers 
 * @param {Number} a lower bound
 * @param {Number} b upper bound
 * @returns {object} array 
 */
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}


/**
 * @return {undefined} constructor
 */
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };


}


/**
 * 
 * @param {object} arr string array 
 * @returns {object} array unique only
 */
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}


/**
 * 
 * @param {object} array of objects 
 * @returns {object} sorted object
 */
function groupById(array) {

    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {});

}

/**
 * 
 * @param {object} arr array 
 * @returns {object} new sorted array
 */
function copySorted(arr) {
    return arr.slice().sort();
}



/**
 * 
 * @param {object} arr array before sort
 * @returns {object} array
 */
function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);

}


/**
 * 
 * @param {object} users users 
 * @returns {Number} average age 
 */
function getAverageAge(users) {
    return Math.round(users.reduce((prev, user) => prev + user.age, 0) / users.length);
}