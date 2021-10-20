"use strict";

/*eslint-disable*/
window.onload = function () {
    const home = document.getElementById('home');
    home.addEventListener('click', function () {
        window.open("./mainResponsive.html", '_blank');
    })

    const about = document.getElementById('about');
    about.addEventListener('click', function () {
        window.open("./aboutMeResponsive.html", '_blank');
    })

    const courses = document.getElementById('courses');
    courses.addEventListener('click', function () {
        window.open("./coursesResponsive.html", '_self');
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

    document.querySelector("button").addEventListener("click", sortByDate);
}

function convertDate(d) {
    const p = d.split("/");
    return +(p[2] + p[0] + p[1]);
}
// #date this was in with tbody it's id of table but has changed to tableCourse
function sortByDate() {
    const tbody = document.querySelector("tbody");
    // get trs as array for ease of use
    const rows = [].slice.call(tbody.querySelectorAll("tr"));

    rows.sort(function (a, b) {
        return convertDate(a.cells[0].innerHTML) - convertDate(b.cells[0].innerHTML);
    });

    rows.forEach(function (v) {
        tbody.appendChild(v); // note that .appendChild() *moves* elements
    });
}

