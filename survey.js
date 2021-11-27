"use strict";

/*eslint-disable*/

// function onloadEventHandler() {
//     const submitButton = document.getElementById('submitButton');
//     // submitButton.addEventListener('click', function () {

//     // })
// }

function validate() {

    const surveyForm = document.forms.surveyForm;
    const name = surveyForm.name.value;

    if (name.length < 4 || name.length > 10) {
        alert("Name should be between 4 and 10");
        return false;
    }

    const email = surveyForm.email.value;
    const age = surveyForm.age.value;

    if (age < 14 || age > 55) {
        alert("Age should be between 14 and 55");
        return false;
    }

    const role = surveyForm.role.value;
    console.log(name);
    console.log(age);
    console.log(email);
    console.log(role);
    // const radio = document.querySelector('input[name="recommend"]:checked').value;
    // console.log(radio);
    const feature = surveyForm.feature.value;
    console.log(feature);
    // const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    // for (const item of checked) {
    //     console.log(item.value);
    // }
    const comments = surveyForm.output.value;
    console.log(comments);
    return false;


}


// window.onload = onloadEventHandler;