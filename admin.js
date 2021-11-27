"use strict";
/*eslint-disable*/


// let date;
// function getDate() {
//     date = document.getElementById('date').value;
//     console.log(date);
//     return courses(date);
// }

let q = document.getElementById('id2');
let b = document.getElementsByTagName('body');
console.log(q);
// let g;

// function remove() {
//     g = 'Mike';
//     return g;
// }



function courses() {

    // const course = document.getElementById('home');
    // course.innerHTML = remove();

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

    // Loop through dates 
    // function sortTableByQuantity() {

    //     let table, rows, switching, i, x, y, shouldSwitch;
    //     table = document.getElementById("table");
    //     switching = true;
    //     /*Make a loop that will continue until
    //     no switching has been done:*/
    //     while (switching) {
    //         //start by saying: no switching is done:
    //         switching = false;
    //         rows = table.rows;
    //         /*Loop through all table rows (except the
    //         first, which contains table headers):*/
    //         for (i = 1; i < (rows.length - 1); i++) {
    //             //start by saying there should be no switching:
    //             shouldSwitch = false;
    //             /*Get the two elements you want to compare,
    //             one from current row and one from the next:*/
    //             x = rows[i].getElementsByTagName("TD")[2];
    //             y = rows[i + 1].getElementsByTagName("TD")[2];

    //             //check if the two rows should switch place:
    //             if (Number(x.innerHTML) > (Number(y.innerHTML))) {
    //                 //if so, mark as a switch and break the loop:
    //                 shouldSwitch = true;
    //                 break;
    //             }
    // let table = document.getElementById('tableCourse');
    // let rows = table.rows;


    // for (let i = 1; i < rows.length; i++) {
    //     if (rows[i].getElementsByTagName("TD")[0].innerHTML == date) {
    //         table.deleteRow(i);
    //     }
    // }
}

// #date this was in below statement with tbody it was id for table now changed to tableCourse

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



// window.onload = function () {

//     const admin = document.getElementById('id2');
//     console.log(admin);

// }
