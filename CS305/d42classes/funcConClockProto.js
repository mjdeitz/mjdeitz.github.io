"use strict";

/*eslint-disable*/

/**
 * w4d2 question 2b
 * refactor the constructor function version to put the shared methods into Clock.prototype
 * 
 * below code works but I have lost template.  
 *  
 * also I do not understand the purpose of why we are looking at these two variations
 * is one way making it so that each call to Clock has to redo each time
 * and the other way makes it so that it can have this method as part of it's 
 * function once it's called without having to call Clock.
 * 
 * all of this is unclear at this point.  
 */


function Clock({ template }) { //this is where object destructuring is used

    let timer; // local variable




    this.stop = function () {
        // clearInterval(timer);
        setTimeout(() => { clearInterval(timer); console.log('stop'); }, 4000);
    };

    this.start = function () { //start is the interface
        console.log(this);
        render();
        timer = setInterval(render, 1000);
    };

    //console.log(this);

}


Clock.prototype.render = function () { //inner function = closure = enclosed
    console.log(this);

    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template //this is where object destructuring is used
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

    console.log(output);
}

console.log(Object.getOwnPropertyNames(Clock.prototype)); // constructor, sayHi

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();
// clock.stop();