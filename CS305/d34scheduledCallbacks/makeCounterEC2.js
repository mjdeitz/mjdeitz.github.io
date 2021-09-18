"use strict";

/*
 (EC) Section: Function object, NFE 
• Set and decrease for counter 
*/



/**
 * 
 * @returns {Number} count
 */
function makeCounter() {

    let count = 0;

    return {
        setCount: function (value) {
            count = value;
        },

        getCount: function () {
            return count;
        },

        countIncrease: function () {
            return count = count + 1;
        },

        countDecrease: function () {
            return count = count - 1;
        }
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter.getCount());
counter.setCount(5);
console.log(counter.getCount());
counter.countIncrease();
counter.countIncrease();
counter.countIncrease();
console.log(counter.getCount());

counter2.setCount(10);
console.log(counter2.getCount());
counter2.countDecrease();
counter2.countDecrease();
counter2.countDecrease();

console.log(counter2.getCount());
