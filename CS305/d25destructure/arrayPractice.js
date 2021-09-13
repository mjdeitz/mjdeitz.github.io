"use strict"
// /* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {
    doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge,
    includesEvenNum, includesEvenAge, findNumSum, findNumAvg, findMaxNum, findMaxAge
};
//add all of your function names here that you need for the node mocha tests




/**
 * 
 * @param {object} arr number array 
 * @returns {object} doubles original values
 */
function doubleNums(arr) {
    return arr.map(num => num * 2);
}


/**
 * 
 * @param {object} arr people array 
 * @returns {object} doubles ages
 */
function doubleAges(arr) {

    let count = 0;
    const newArray = arr.map(a => Object.assign({}, a));
    let ageArray = newArray.map(newArray => newArray.age * 2);
    for (const person of newArray) {
        person.age = ageArray[count];
        count++;
    }
    return newArray;
}


/**
 * 
 * @param {object} arr number array 
 * @returns {object} new array with all even numbers
 */
function filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
}



/**
 * 
 * @param {object} arr people array 
 * @returns {object}  arrray ages > 10
 */
function filterOver10(arr) {
    return arr.filter(arr => arr.age > 10);
}


/**
 * 
 * @param {object} arr number array 
 * @returns {number} first even number in array
 */
function findEvenNum(arr) {
    return arr.find(num => num % 2 === 0);
}



/**
 * 
 * @param {object} arr people array 
 * @returns {object} first person age>10
 */
function findEvenAge(arr) {
    return arr.find(arr => arr.age % 2 === 0);
}



/**
 * 
 * @param {Number} number number
 * @returns {Boolean} true (if even and in numArray) false otherwise
 */
function includesEvenNum(number) {

    const numArray = [5, 0, 7, 77, -20, 300, 51, 2];

    if (number % 2 === 0) {
        return numArray.includes(number);
    }
    return false;
}


/**
 * 
 * @param {Number} number number 
 * @returns {Boolean} true (if age even && in peopleArray) false otherwise
 */
function includesEvenAge(number) {


    const peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];

    const ageArray = [];
    for (const people of peopleArray) {
        ageArray.push(people.age);
    }

    if (number % 2 === 0) {
        return ageArray.includes(number);
    }
    return false;
}



/**
 * 
 * @param {object} arr numArray 
 * @returns {Number} array sum
 */
function findNumSum(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}



/**
 * 
 * @param {object} arr numArray 
 * @returns {number} avg of array
 */
function findNumAvg(arr) {
    return arr.reduce((sum, current) => sum + current, 0) / arr.length;
}



/**
 * 
 * @param {object} arr numArray 
 * @returns {Number} max number
 */
function findMaxNum(arr) {
    return arr.reduce((num1, num2) => Math.max(num1, num2));
}



/**
 * 
 * @param {object} arr peopleArray 
 * @returns {Number} max age
 */
function findMaxAge(arr) {

    let ageArray = [];
    for (const people of arr) {
        ageArray.push(people.age);
    }

    return ageArray.reduce((num1, num2) => Math.max(num1, num2));
}
