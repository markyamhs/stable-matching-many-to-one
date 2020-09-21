//https://github.com/mgschoen/stable-marriage

export default class CollegeAdmissionProblem {
  constructor(studentList, collegeList) {
    this.studentList = studentList;
    this.collegeList = collegeList;
    this.log = [];
  }
  //http://sephlietz.com/gale-shapley/
  match(studentPropose = true) {
    if (!studentPropose) {
      return this.match_CollegePropose();
    }
    var round = 1;
    while (this.existsFreeStudents() && round <= 9999) {
      let roundLog = [];
      roundLog.push(`Round ${round}`);
      this.studentList.forEach((student) => {
        if (student.matchedWith === null && !student.proposedToAll) {
          let targetCollege = this.collegeList[student.proposeTo()];
          targetCollege.appliedBy.push(student.id);
          roundLog.push(
            `${student.name} applied to his/her next favorite group which is ${targetCollege.name}`
          );
        } else {
          // roundLog.push(
          //   `${student.name} was already tentatively accepted by ${
          //     this.collegeList[student.matchWith].name
          //   }`
          // );
        }
      });
      roundLog.push("---------------------------------------");
      this.collegeList.forEach((college) => {
        roundLog.push(`${college.name}:`);
        if (college.appliedBy.length === 0) {
          roundLog.push(
            `${college.name} was not applied by any persons in this round`
          );
        } else {
          roundLog.push(
            `${college.name} had ${
              college.quota - college.matchedWith.length
            } quota left`
          );
          roundLog.push(
            `${college.name} was applied by ${this.printNames(
              college.appliedBy,
              true
            )} in this round`
          );
          let result = college.reviewWaitingList();
          let [stuToAdd, stuToDrop] = result;
          if (stuToAdd.length > 0) {
            roundLog.push(
              `${college.name} combined the previous acceptees with the new applicants this round and made the following decisions in accordance to its preference list and its remaining quota:`
            );
            roundLog.push(
              `${college.name} tentatively accepted ${this.printNames(
                stuToAdd,
                true
              )}`
            );
            if (stuToDrop.length > 0) {
              roundLog.push(
                `${college.name} dropped ${this.printNames(stuToDrop, true)}`
              );
            }
            stuToAdd.forEach((stuId) => {
              let student = this.studentList[stuId];
              student.matchedWith = college.id;
            });
            stuToDrop.forEach((stuId) => {
              let student = this.studentList[stuId];
              student.matchedWith = null;
            });
          } else {
            roundLog.push(
              `${college.name} rejected all of its applicants in this round`
            );
          }
        }
        roundLog.push("---------------------------------------");
      });
      round++;
      roundLog.push("---------------------------------------");
      this.log.push(roundLog);
    }

    this.studentList.forEach((student) => {
      student.setRankingOfMatch();
    });
    this.collegeList.forEach((college) => {
      college.setRankingOfMatch();
    });

    //this is to simply reset the IDFactory to zero for next potential matching
    this.studentList[0].resetID();
    this.collegeList[0].resetID();
  }
  match_CollegePropose() {
    var round = 1;
    while (this.existsFreeColleges() && round <= 9999) {
      let roundLog = [];
      roundLog.push(`Round ${round}`);
      this.collegeList.forEach((college) => {
        const remainingQuota = college.quota - college.matchedWith.length;
        if (remainingQuota > 0 && !college.proposedToAll) {
          roundLog.push(`${college.name} has ${remainingQuota} quota left`);
          let targetStudents = college
            .proposeTo()
            .map((pos) => this.studentList[pos]);
          targetStudents.forEach((stu) => {
            stu.appliedBy.push(college.id);
            roundLog.push(`${college.name} sent invitation to: ${stu.name}`);
          });
        }
      });
      roundLog.push("---------------------------------------");
      this.studentList.forEach((student) => {
        roundLog.push(`${student.name}:`);
        if (student.appliedBy.length === 0) {
          roundLog.push(
            `${student.name} was not invited by any group in this round`
          );
        } else {
          roundLog.push(
            `${student.name} was applied by ${this.printNames(
              student.appliedBy,
              false
            )} in this round`
          );
          const result = student.reviewWaitingList();
          const [colToAdd, colToDrop] = result;
          if (colToAdd !== null) {
            this.collegeList[colToAdd].matchedWith.push(student.id);
            if (colToDrop === null) {
              roundLog.push(
                `${student.name} chose ${this.collegeList[colToAdd].name}`
              );
            } else {
              const filtered = this.collegeList[colToDrop].matchedWith.filter(
                (stuID) => {
                  return stuID !== student.id;
                }
              );
              this.collegeList[colToDrop].matchedWith = filtered;
              roundLog.push(
                `${student.name} chose ${this.collegeList[colToAdd].name} and dropped the original offer from ${this.collegeList[colToDrop].name}`
              );
            }
          } else {
            roundLog.push(
              `${student.name} preferred the original offer from ${
                this.collegeList[student.matchedWith].name
              }`
            );
          }
        }
        roundLog.push("---------------------------------------");
      });
      round++;
      roundLog.push("---------------------------------------");
      this.log.push(roundLog);
    }

    this.studentList.forEach((student) => {
      student.setRankingOfMatch();
    });
    this.collegeList.forEach((college) => {
      college.setRankingOfMatch();
    });

    //this is to simply reset the IDFactory to zero for next potential matching
    this.studentList[0].resetID();
    this.collegeList[0].resetID();
  }
  existsFreeStudents() {
    for (let student of this.studentList) {
      if (student.matchedWith === null && !student.proposedToAll) {
        return true;
      }
    }
    return false;
  }
  existsFreeColleges() {
    for (let college of this.collegeList) {
      const remainingQuota = college.quota - college.matchedWith.length;
      if (remainingQuota > 0 && !college.proposedToAll) {
        return true;
      }
    }
    return false;
  }
  printNames(listOfID, isStudentList) {
    const theList = isStudentList ? this.studentList : this.collegeList;
    const nameList = listOfID.map((id) => theList[id].name);
    let nameString = nameList.reduce((acc, ele) => acc + " " + ele, "(");
    nameString = nameString + ")";
    return nameString;
  }
}

// module.exports = CollegeAdmissionProblem;
