/**
 * Program containing a function(calcDistance) that takes x and y co-ordinates of two points 
 * as inputs and returns the distance between these two points based on the distance forumla.
 */

"use strict";

function calcDistance(x1, y1, x2, y2) {
    let distance = 0;
    let xdiff = x2 - x1;
    let ydiff = y2 - y1;
    distance = Math.sqrt(xdiff * xdiff + ydiff * ydiff);

    return distance;
}

console.log("expect 5 : ", calcDistance(0, 0, 5, 5));