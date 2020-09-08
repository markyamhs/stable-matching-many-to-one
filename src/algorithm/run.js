//wrapper: raw data => config.js => CollegeAdmission.js
import config from "./config";
import CollegeAdmissionProblem from "./CollegeAdmission";
// const config = require("./config");
// const CollegeAdmissionProblem = require("./CollegeAdmission");

function run(stuData, colData) {
  const [studentList, collegeList] = config(stuData, colData);
  let problem = new CollegeAdmissionProblem(studentList, collegeList);
  problem.match();
  const stuResult = stuData.map((stu, index) => {
    const result = {
      ...stu,
      matchedWith: studentList[index].matchedWith,
      isMatched: studentList[index].matchedWith !== null,
      matchedWithName:
        studentList[index].matchedWith !== null
          ? collegeList[studentList[index].matchedWith].name
          : null,
      rankingOfMatch: studentList[index].rankingOfMatch,
      preferenceNames: stu.preference.map((pos) => collegeList[pos].name),
    };
    return result;
  });
  const colResult = colData.map((col, index) => {
    const result = {
      ...col,
      matchedWith: collegeList[index].matchedWith,
      quotaLeft:
        collegeList[index].quota - collegeList[index].matchedWith.length,
      matchedWithName:
        collegeList[index].matchedWith.length > 0
          ? collegeList[index].matchedWith.map((pos) => studentList[pos].name)
          : null,
      rankingOfMatch: collegeList[index].rankingOfMatch,
      preferenceNames: col.preference.map((pos) => studentList[pos].name),
    };
    return result;
  });
  let allPairs = stuResult.map((stu, index) => {
    const result =
      stu.rankingOfMatch !== -1
        ? {
            stuPreference: stu.rankingOfMatch,
            colPreference: collegeList[
              studentList[index].matchedWith
            ].priorityList.indexOf(index),
            pairing: `${studentList[index].name} <-> ${
              collegeList[studentList[index].matchedWith].name
            }`,
          }
        : null;
    return result;
  });
  allPairs = allPairs.filter((pair) => pair !== null);
  return [stuResult, colResult, problem.log, allPairs];
}

export default run;
// module.exports = run;
