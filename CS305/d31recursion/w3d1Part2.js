"use strict";

/**1. Write a recursive function that will print “name: value” to the console 
for every node in the following tree data structure. Then write an iterative 
function that also does this. The following is the output you should have for 
the recursive version. The iterative version should be similar, but it is not 
necessary for every line to be in the same order. 
*/

// body: null
// div: null
// label: Name
// input: this was typed by a user
// p: This is text in the a paragraph

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};

let nodesArray = [node1, node2, node4, node5, node3];

/**
 * 
 * @param {object} array node array
 * @return {undefined} logs out to console name: value 
 */
function iterateOne(array) {

    for (const node of array) {
        console.log(node.name + ": " + node.value);
    }
}

console.log();
iterateOne(nodesArray);
console.log();

/**
 * 
 * @param {Number} index number  
 * @param {object} array array of node objects
 * @returns {String} logs out to console name: value
 */
function recursiveOne(index, array) {
    if (index === 0) {
        return console.log(array[index].name + ": " + array[index].value);
    } else {
        console.log(array[index].name + ": " + array[index].value);

    }
    return recursiveOne(index - 1, array);
}

recursiveOne(nodesArray.length - 1, nodesArray);


//2. Modify both versions to return an array containing the “name:value” 
//strings for the entries rather than printing the values to the console. 
//DO THE SAME for recursive replace console with JSON.parse/JSON.stringify

/**
 * 
 * @param {object} array node array
 * @return {object} array containing name: value 
 */
function iterateOneString(array) {

    const nodeToStringArray = [];

    for (const node of array) {

        let nodeString = JSON.parse(JSON.stringify(node.name + ": " + node.value));
        nodeToStringArray.push(nodeString);
    }
    return nodeToStringArray;
}
console.log();
console.log(iterateOneString(nodesArray));