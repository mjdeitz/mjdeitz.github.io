"use strict";

/*eslint-disable*/

function validate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "Admin" && password == "123") {
        window.open("./admin.html", '_self');
    } else {
        alert("Login Error: Please try again");
    }
}

