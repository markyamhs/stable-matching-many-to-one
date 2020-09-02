const Student = require("./algorithm/Student");
const College = require("./algorithm/College");
const CollegeAdmissionProblem = require("./algorithm/CollegeAdmission");

let stuA = new Student();
let stuB = new Student();
let stuC = new Student();
let stuD = new Student();
let stuE = new Student();
let stuF = new Student();
let stuG = new Student();
let stuH = new Student();
let colA = new College(2);
let colB = new College(2);
let colC = new College(3);
stuA.setPriorityList([1, 0, 2]);
stuB.setPriorityList([0, 1, 2]);
stuC.setPriorityList([1, 0, 2]);
stuD.setPriorityList([1, 0, 2]);
stuE.setPriorityList([1, 0, 2]);
stuF.setPriorityList([0, 1, 2]);
stuG.setPriorityList([1, 0, 2]);
stuH.setPriorityList([1, 0, 2]);
colA.setPriorityList([5, 0, 1, 2, 3, 4, 6, 7]);
colB.setPriorityList([1, 0, 2, 3, 4, 5, 6, 7]);
colC.setPriorityList([1, 0, 2, 3, 4, 5, 6, 7]);
let problem = new CollegeAdmissionProblem(
  [stuA, stuB, stuC, stuD, stuE, stuF, stuG, stuH],
  [colA, colB, colC]
);
problem.match();

const main = () => {
  console.log([stuA, stuB, stuC, stuD, stuE, stuF, stuG, stuH]);
  console.log([colA, colB, colC]);
};

module.exports = main;
