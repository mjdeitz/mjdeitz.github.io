"use strict";

/**
 * 
 * @param {String} name string
 * @param {String} value string
 * @return {undefined}
 */
function TreeNode(name, value) { // this is constructor function 

    this.name = name;
    this.value = value;
    this.children = [];
}
// create nodes with values 
const node1 = new TreeNode("body", null);
const node2 = new TreeNode("div", null);
const node3 = new TreeNode("p", "This is text in the a paragraph");
const node4 = new TreeNode("label", "name");
const node5 = new TreeNode("input", "this was typed by a user");

// associate root with is descendents
node1.children.push(node2, node3);
node2.children.push(node4, node5);


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