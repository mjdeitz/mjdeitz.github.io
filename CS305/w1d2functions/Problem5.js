/**
 * Program containing a function(convertFahrenheit), that takes an input parameter 
 * with a temperature in Fahrenheit and returns the temperature in Celsius.
 */

"use strict";

function convertFahrenheit(degrees) {
    let celsius = (degrees - 32) * (5 / 9);
    return celsius;
}

console.log("expect 0: ", convertFahrenheit(32));
console.log("expect -17.7778: ", convertFahrenheit(0));
console.log("expect 100: ", convertFahrenheit(212));
console.log("expect 37.7778: ", convertFahrenheit(100));