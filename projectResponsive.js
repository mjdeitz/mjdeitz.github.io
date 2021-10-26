"use strict";
/*eslint-disable*/

window.onload = function () {

    const home = document.getElementById('home');
    home.addEventListener('click', function () {
        window.open("./index.html", '_blank');
    })

    const about = document.getElementById('about');
    about.addEventListener('click', function () {
        window.open("./aboutMeResponsive.html", '_blank');
    })

    const courses = document.getElementById('courses');
    courses.addEventListener('click', function () {
        window.open("./coursesResponsive.html", '_blank');
    })

    const project = document.getElementById('project');
    project.addEventListener('click', function () {
        window.open("./projectResponsive.html", '_self');
    })

    const skills = document.getElementById('skills');
    skills.addEventListener('click', function () {
        window.open("./skillsResponsive.html", '_blank');
    })

    const contact = document.getElementById('contact');
    contact.addEventListener('click', function () {
        window.open("./contactResponsive.html", '_blank');
    })

    const slideshow = document.getElementById('slide');
    slideshow.addEventListener('click', function () {
        window.open("./slideshowResponsive.html", '_blank');
    })
    
    const admin = document.getElementById('admin');
    admin.addEventListener('click', function () {
        window.open("./adminLogin.html", '_blank');
    })

    const clock = setInterval(myTimer, 1000);

    function myTimer() {
        let d = new Date();
        let t = d.toLocaleTimeString();
        document.getElementById("clock").innerHTML = t;
    }

    document.getElementById('sortDate').addEventListener("click", sortByDate);
    document.getElementById('sortDiff').addEventListener("click", sortByDifficulty);

}

function convertDate(d) {
    const p = d.split("/");
    return +(p[2] + p[0] + p[1]);
}

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

function sortByDifficulty() {
    //convert difficulty words into numbers
    convertToNumber();

    //sort by difficulty 1 easiest to 3 hardest

    const tbody = document.querySelector("tbody");
    const rows = [].slice.call(tbody.querySelectorAll("tr"));

    rows.sort(function (a, b) {
        return (a.cells[2].innerHTML) - (b.cells[2].innerHTML);
    });

    rows.forEach(function (v) {
        tbody.appendChild(v); //note that .appendChild() *moves* elements
    });

    //convert difficulty numbers back into words
    convertBackToWords();

}

function convertToNumber() {
    const table = document.getElementById('table');
    const rows = table.rows;

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].getElementsByTagName('TD')[2].innerHTML === "Hard") {
            rows[i].getElementsByTagName('TD')[2].innerHTML = 3;
        } else if (rows[i].getElementsByTagName('TD')[2].innerHTML === "Average") {
            rows[i].getElementsByTagName('TD')[2].innerHTML = 2;
        } else {
            rows[i].getElementsByTagName('TD')[2].innerHTML = 1;
        }

    }
}

function convertBackToWords() {
    const table = document.getElementById('table');
    const rows = table.rows;

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].getElementsByTagName('TD')[2].innerHTML == 3) {
            rows[i].getElementsByTagName('TD')[2].innerHTML = "Hard";
        } else if (rows[i].getElementsByTagName('TD')[2].innerHTML == 2) {
            rows[i].getElementsByTagName('TD')[2].innerHTML = "Average";
        } else {
            rows[i].getElementsByTagName('TD')[2].innerHTML = "Easy";
        }

    }
}
