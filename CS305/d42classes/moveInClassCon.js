"use strict";

/*eslint-disable*/

/**
 * this program moves all methods to inside the constructor to see if it "works"
 * w4d2 homework question 2a.
 * 
 * YES it works.  I need to add the following lines of code
 *      this.render = render;
        this.start = start;
        this.stop = stop;
 */
class Clock {

    constructor({ template }) {//object destructuring
        this.template = template;
        this.render = render;
        this.start = start;
        this.stop = stop;

        function render() {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        function stop() {
            clearInterval(this.timer);
        }

        function start() {
            this.render();
            this.timer = setInterval(() => this.render(), 1000);
        }

    }

}



let clock = new Clock({ template: 'h:m:s' });
clock.start();