"use strict";

/* THIS IS THE BAD CODE BELOW
WE CAN USE BIND AND ARROW FUNCTION TO FIX
 */

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList() {
//         this.students.forEach(function (student) {
//             console.log(this.title + ": " + student); //error cannot read property title of undefined
//         }); //.bind)this));
//     }
// };
// group.showList();

console.log();
//*** USING BIND */
console.log("CODE USING BIND: ");


let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach(function (student) { // put arrow after forEach
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group1.showList();



console.log();
console.log();
console.log("THIS IS ARROW CODE: ");


let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach(student => console.log(this.title + ": " + student));
    }
};
group2.showList();