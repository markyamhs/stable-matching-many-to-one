// const utils = require("./utils.js");
// const idFactory = new utils.IDFactory();
import { IDFactory } from "./utils.js";
const idFactory = new IDFactory();

class Student {
  constructor(name, preferenceList) {
    this.id = idFactory.createID();
    this.matchedWith = null;
    this.nextProposal = 0;
    this.proposedToAll = false;
    this.appliedBy = [];
    this.name = name;
    this.priorityList = preferenceList;
    this.rankingOfMatch = -1;
  }

  setName(name) {
    this.name = name;
  }

  setPriorityList(list) {
    if (!(typeof list == "object")) {
      throw new Error(
        "Person.priorityList must be of type array but is: " + typeof list
      );
    }
    this.priorityList = list;
  }
  proposeTo() {
    this.nextProposal++;
    if (this.nextProposal === this.priorityList.length) {
      this.proposedToAll = true;
    }
    return this.priorityList[this.nextProposal - 1];
  }
  reviewWaitingList() {
    if (this.appliedBy.length === 0) {
      return null;
    }
    let allApplicants = this.appliedBy;
    if (this.matchedWith !== null) {
      allApplicants.push(this.matchedWith);
    }
    var self = this;
    function compareCollege(colA, colB) {
      let rankingA = self.priorityList.indexOf(colA);
      let rankingB = self.priorityList.indexOf(colB);
      if (rankingA < rankingB) {
        return -1;
      }
      if (rankingA > rankingB) {
        return 1;
      }
    }
    allApplicants.sort(compareCollege);
    this.appliedBy = [];
    let colToAdd = null;
    let colToDrop = null;
    if (allApplicants[0] !== this.matchedWith) {
      colToAdd = allApplicants[0];
      colToDrop = this.matchedWith;
      this.matchedWith = colToAdd;
    }
    return [colToAdd, colToDrop];
  }

  toString() {
    return (
      "Student {id: " + this.id + ", matchedWith: " + this.matchedWith + "}"
    );
  }

  printPriorityList() {
    if (this.priorityList) {
      var string = this.id + " " + this.toString() + ": ";
      this.priorityList.forEach((v, i) => {
        string += i === 0 ? v : ", " + v;
      });
      return string;
    } else {
      return this.id + ": - no priorities -";
    }
  }

  setRankingOfMatch() {
    this.rankingOfMatch = this.priorityList.indexOf(this.matchedWith);
  }

  resetID() {
    idFactory.reset();
  }
}

// module.exports = Student;
export default Student;
