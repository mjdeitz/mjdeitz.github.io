"use strict";

/*eslint-disable*/

/*
Also add a line of code that will stop the clock after 4 ticks
What is the inner function of the constructor function?
What is the local variable of the constructor function?
What is the clock “interface” returned by the constructor function?
What are the closures?
Where is object destructuringused?
What are the private variables and functions?
What are the public methods?
How does this example illustrate that a JavaScript class is really a function and not an object?
*/

function Clock({ template }) { //this is where object destructuring is used

    let timer; // local variable

    function render() { //inner function = closure = enclosed
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

    this.stop = function () {
        // clearInterval(timer);
        setTimeout(() => { clearInterval(timer); console.log('stop'); }, 4000);
    };

    this.start = function () { //start is the interface
        console.log(this);
        render();
        timer = setInterval(render, 1000);
    };

    console.log(this);

}



let clock = new Clock({ template: 'h:m:s' });
clock.start();
clock.stop();



