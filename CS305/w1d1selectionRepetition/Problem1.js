/**
 * Program to compute salaried and hourly rate sales commission
*/


let salesSalary = 500;
let salesHourly = 500;
let commission = 0;

// compute salaried commission

if ((salesSalary > 300) && (salesSalary < 500)) {
    commission = salesSalary * .01;
    salesSalary = salesSalary + commission;
} else if (salesSalary >= 500) {
    commission = salesSalary * .02;
    salesSalary = salesSalary + commission;
}

console.log(salesSalary);

// compute hourly commission

if ((salesHourly > 300) && (salesHourly < 500)) {
    commission = salesHourly * .02;
    salesHourly = salesHourly + commission;
} else if (salesHourly >= 500) {
    commission = salesHourly * .03;
    salesHourly = salesHourly + commission;
}

console.log(salesHourly);

