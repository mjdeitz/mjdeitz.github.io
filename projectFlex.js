"use strict";
/*eslint-disable*/

window.onload = function () {

    const home = document.getElementById('home');
    home.addEventListener('click', function () {
        window.open("./index.html", '_blank');
    })

    const about = document.getElementById('about');
    about.addEventListener('click', function () {
        window.open("./aboutMeFlex.html", '_blank');
    })

    const courses = document.getElementById('courses');
    courses.addEventListener('click', function () {
        window.open('./coursesFlex.html', '_blank');
    })

    const project = document.getElementById('project');
    project.addEventListener('click', function () {
        window.open('./projectFlex.html', '_self');
    })

    const circle = document.getElementById('circle');
    circle.addEventListener('click', function () {
        window.open('./gridtmnt.html', '_blank');

    })


    const clock = setInterval(myTimer, 1000);

    function myTimer() {
        let d = new Date();
        let t = d.toLocaleTimeString();
        document.getElementById("clock").innerHTML = t;
    }

    // const imageHead = document.getElementById("create");
    // let i = 0;
    // const images = ["create", "build", "design", "develop", "imagine", "inspire"];

    // setInterval(function () {
    //     imageHead.innerHTML = images[i];
    //     i = i + 1;
    //     if (i == images.length) {
    //         i = 0;
    //     }
    // }, 4000);

}