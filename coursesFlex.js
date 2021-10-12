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
        window.open('./coursesFlex.html', '_self');
    })

    const project = document.getElementById('project');
    project.addEventListener('click', function () {
        window.open('./projectFlex.html', '_blank');
    })

}