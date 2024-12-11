//author Rebecca Cathey
let myName = "Rebecca Cathey";

let para1 = document.getElementById("p1");
para1.textContent = myName;

let n1 = 5;
let n2 = 10;

let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

let myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;

let age = 25; // Replace with your age (realistic value)
let ageCompare = age > numberMult;
document.getElementById("p6").textContent = ageCompare;

n1 = 8;
n2 = 12;

let updatedNumberSum = n1 + n2;
let updatedNumberMult = n1 * n2;
let updatedAgeCompare = age > updatedNumberMult;

document.getElementById("p2").textContent = updatedNumberSum;
document.getElementById("p3").textContent = updatedNumberMult;
document.getElementById("p6").textContent = updatedAgeCompare;
