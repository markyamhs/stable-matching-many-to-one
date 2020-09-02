//https://github.com/mgschoen/stable-marriage

class CollegeAdmissionProblem {
  constructor(studentList, collegeList) {
    this.studentList = studentList;
    this.collegeList = collegeList;
  }
  //http://sephlietz.com/gale-shapley/
  match(studentPropose = true) {
    // if (!studentPropose) {
    //   return match_CollegePropose();
    // }
    var round = 1;
    while (this.existsFreeStudents() && round <= 9999) {
      console.log("new round");
      this.studentList.forEach((student) => {
        if (student.matchedWith === null && !student.proposedToAll) {
          let targetCollege = this.collegeList[student.proposeTo()];
          targetCollege.appliedBy.push(student.id);
        }
      });
      this.collegeList.forEach((college) => {
        let result = college.reviewWaitingList();
        if (result) {
          let [stuToAdd, stuToDrop] = result;
          stuToAdd.forEach((stuId) => {
            console.log(stuId, " added to college ", college.id);
            let student = this.studentList[stuId];
            student.matchedWith = college.id;
          });
          stuToDrop.forEach((stuId) => {
            console.log(stuId, " dropped by college ", college.id);
            let student = this.studentList[stuId];
            student.matchedWith = null;
          });
        }
      });
      round++;
    }
  }
  existsFreeStudents() {
    for (let student of this.studentList) {
      if (student.matchedWith === null && !student.proposedToAll) {
        return true;
      }
    }
    return false;
  }
  printResult() {
    this.studentList.forEach((student) => {
      console.log(
        "Stu ID: " +
          student.id +
          " was accepted by college ID: " +
          student.matchedWith
      );
    });
    this.collegeListforEach((college) => {
      console.log(college.toString());
    });
  }
}

module.exports = CollegeAdmissionProblem;
