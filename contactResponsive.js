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
        window.open("./contactResponsive.html", '_self');
    })

    const admin = document.getElementById('admin');
    admin.addEventListener('click', function () {
        window.open("./adminLogin.html", '_blank');
    })

}

let infoArray = [];

function add() {
    let obj = {};

    const name = document.getElementById('name').value;
    obj.name = name;

    const email = document.getElementById('email').value;
    obj.email = email;

    const subject = document.getElementById('subject').value;
    obj.subject = subject;

    const message = document.getElementById('message').value;
    obj.message = message;

    infoArray.push(obj);
    console.log(infoArray);

    return false;
}

// onsubmit="return validate()" name="surveyForm"