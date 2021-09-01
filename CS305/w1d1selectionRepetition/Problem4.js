/**
 * program that will print various number patterns to the console
 */


"use strict";

//pattern 1
let string = "";

for (let i = 1; i <= 5; i = i + 1) {
    for (let j = 1; j <= 5; j = j + 1) {
        string = string + j;
    }
    string = string + "\n";
}
console.log(string);


//pattern 2
let string2 = "";
for (let i = 1; i <= 5; i = i + 1) {
    for (let j = 1; j <= i; j = j + 1) {
        string2 = string2 + i;
    }
    string2 = string2 + "\n";
}
console.log(string2);

//pattern 3

let string3 = "";
for (let i = 5; i >= 1; i = i - 1) {
    for (let j = 1; j <= i; j = j + 1) {
        string3 = string3 + i;
    }
    string3 = string3 + "\n";
}
console.log(string3);