"use strict";
/*eslint-disable*/

/*OTHER FILES ASSOCIATED TO THIS: W3D1PART2.JS IN D31
AND PROBLEM2.JS IN D31
*/


//does this work? the argument is supposed to be the root node of the HTML tree

/*
try make left = children[0];
right children[1];
 */

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


//recursive with argument as root to HTML tree.
//both versions work(file name: w3d1Part2.js with function titled recursiveOne accepts two arguments(index, array))

/**
 * 
 * @param {Object} treeNode node
 * @returns {Object} undefined 
 */
function treeWalk(treeNode) {

    console.log(treeNode.name + " : " + treeNode.value);
    /* base -- check for children array empty */
    if (treeNode.children === null) {
        //done
    } else {
        for (const node of treeNode.children) {
            treeWalk(node);
        }
    }
}

treeWalk(node1);