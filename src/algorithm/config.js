//convert raw data from front-end to college/students objects for CollegeAdmission.js
// const Student = require("./Student.js");
// const College = require("./College.js");
import Student from "./Student.js";
import College from "./College.js";

export default function config(stuData, colData) {
  const studentList = [];
  const collegeList = [];
  stuData.forEach((stu) => {
    const student = new Student(stu.name, stu.preference);
    studentList.push(student);
  });

  colData.forEach((col) => {
    const college = new College(col.name, col.quota, col.preference);
    collegeList.push(college);
  });
  return [studentList, collegeList];
}

// module.exports = config;
