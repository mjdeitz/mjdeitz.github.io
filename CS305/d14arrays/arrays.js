"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
// module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams };
//add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Number} num1 first number
 * @param {Number} num2 second number
 * @param {Number} num3 third number
 * @returns {Number} returns largest of three 
 */
function maxOfThree(num1, num2, num3) {
    let largest = (num1 >= num2) ? num1 : num2;
    largest = (largest >= num3) ? largest : num3;
    return largest;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let tot = 0;
    for (const number of arr) {
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let tot = 1;
    for (const number of arr) {
        tot *= number;
    }
    return tot;

}



/**
 * 
 * @param {Array} arr of words 
 * @returns {number} longest word length
 */
function findLongestWord(arr) {
    let longestWordLength = 0;
    let word;
    for (let i = 0; i < arr.length; i++) {
        word = arr[i];
        if (word.length > longestWordLength) {
            longestWordLength = word.length;
        }
    }
    return longestWordLength;
}



/**
 * 
 * @param {Array} arr of values
 * @returns {Array} returns new array (reversed)
 */
function reverseArray(arr) {
    let reverseArray = [];
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArray[count] = arr[i];
        count = count + 1;
    }
    return reverseArray;
}






/**
 * 
 * @param {Array} arr of values 
 * @returns {Array} reverses array in place
 */
function reverseArrayInPlace(arr) {
    let arrLength = arr.length;
    for (let i = 0; i < arrLength / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arrLength - 1 - i];
        arr[arrLength - 1 - i] = temp;
    }
    return arr;
}


/**
 * 
 * @param {Array} studentAnswers array of students answers
 * @param {Array} correctAnswers array of correct answers 
 * @returns {Array} array number correct answers
 */
function scoreExams(studentAnswers, correctAnswers) {
    let count = 0;
    let scores = [];

    while (count < studentAnswers.length) {

        let temp = studentAnswers[count];
        let numberCorrectAnswers = 0;
        for (let i = 0; i < correctAnswers.length; i++) {
            if (correctAnswers[i] === temp[i]) {
                numberCorrectAnswers++;
            }
        }
        scores[count] = numberCorrectAnswers;
        count++;
    }
    return scores;
}



/**
 * 
 * @param {Number} xRow number of array rows 
 * @param {Number} yCol number of array columns 
 * @returns {Array} array with values 
 */
function generateArray(xRow, yCol) {
    let matrix = [];
    let value = 1;
    for (let i = 0; i < xRow; i++) {
        matrix[i] = [];
        for (let j = 0; j < yCol; j++) {
            matrix[i][j] = value;
            value++;
        }
    }
    return matrix;
}