//wrapper: raw data => config.js => CollegeAdmission.js
const config = require("./config");
const CollegeAdmissionProblem = require("./CollegeAdmission");

function run(stuData, colData) {
  const [studentList, collegeList] = config(stuData, colData);
  let problem = new CollegeAdmissionProblem(studentList, collegeList);
  problem.match();
  const stuResult = stuData.map((stu, index) => {
    const result = {
      ...stu,
      matchedWith: studentList[index].matchedWith,
      rankingOfMatch: studentList[index].rankingOfMatch,
    };
    return result;
  });
  const colResult = colData.map((col, index) => {
    const result = {
      ...col,
      matchedWith: collegeList[index].matchedWith,
      rankingOfMatch: collegeList[index].rankingOfMatch,
    };
    return result;
  });
  return [stuResult, colResult, problem.log];
}

module.exports = run;
