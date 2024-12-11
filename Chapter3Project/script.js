// Author: Rebecca Cathey

let fullName = "Your Full Name";
let annualSalary = 7000; 
let veteranStatus = false;  

let friendsNames = ["Friend 1", "Friend 2", "Friend 3"];
let friendsSalaries = [65000, 72000, 80000];

let anotherFriend = {
    firstName: "Another",
    lastName: "Friend",
    desiredSalary: 70000
};

console.log("Full Name: ", fullName);
console.log("Annual Salary: ", annualSalary);
console.log("Veteran Status: ", veteranStatus ? "Veteran" : "Not a Veteran");

console.log("Friends' Names: ", friendsNames);
console.log("Friends' Salaries: ", friendsSalaries);

console.log("Another Friend's Info: ", anotherFriend);

document.getElementById("full-name").textContent = fullName;
document.getElementById("salary").textContent = `$${annualSalary.toLocaleString()}`;
document.getElementById("veteran-status").textContent = veteranStatus ? "Veteran" : "Not a Veteran";

document.getElementById("friend1-name").textContent = friendsNames[0];
document.getElementById("friend1-salary").textContent = `$${friendsSalaries[0].toLocaleString()}`;

document.getElementById("friend2-name").textContent = friendsNames[1];
document.getElementById("friend2-salary").textContent = `$${friendsSalaries[1].toLocaleString()}`;

document.getElementById("friend3-name").textContent = friendsNames[2];
document.getElementById("friend3-salary").textContent = `$${friendsSalaries[2].toLocaleString()}`;

document.getElementById("another-friend-first").textContent = anotherFriend.firstName;
document.getElementById("another-friend-last").textContent = anotherFriend.lastName;
document.getElementById("another-friend-salary").textContent = `$${anotherFriend.desiredSalary.toLocaleString()}`;
