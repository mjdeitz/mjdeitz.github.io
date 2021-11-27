"use strict";
/*eslint-disable*/

window.onload = function () {

    const home = document.getElementById('home');
    home.addEventListener('click', function () {
        window.open("./index.html", '_blank');
    })

    const about = document.getElementById('about');
    about.addEventListener('click', function () {
        window.open("./aboutMeResponsive.html", '_self');
    })

    const courses = document.getElementById('courses');
    courses.addEventListener('click', function () {
        window.open("./coursesResponsive.html", '_blank');
    })

    const project = document.getElementById('project');
    project.addEventListener('click', function () {
        window.open("./projectResponsive.html", '_blank');
    })

    const skills = document.getElementById('skills');
    skills.addEventListener('click', function () {
        window.open("./skillsResponsive.html", '_blank');
    })

    const contact = document.getElementById('contact');
    contact.addEventListener('click', function () {
        window.open("./contactResponsive.html", '_blank');
    })

    const admin = document.getElementById('admin');
    admin.addEventListener('click', function () {
        window.open("./adminLogin.html", '_blank');
    })

}
