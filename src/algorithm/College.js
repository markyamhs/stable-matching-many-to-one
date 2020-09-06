// const utils = require("./utils.js");
// const idFactory = new utils.IDFactory();
import { IDFactory } from "./utils.js";
const idFactory = new IDFactory();

class College {
  constructor(name, quota, preferenceList) {
    this.id = idFactory.createID();
    this.matchedWith = [];
    this.appliedBy = [];
    this.quota = quota;
    this.nextProposal = 0;
    this.name = name;
    this.priorityList = preferenceList;
    this.rankingOfMatch = [];
  }
  setName(name) {
    this.name = name;
  }
  reviewWaitingList() {
    if (this.appliedBy.length === 0) {
      return null;
    }
    const previousList = this.matchedWith;
    let allApplicants = this.matchedWith.concat(this.appliedBy);

    var self = this;
    function compareStudent(stuA, stuB) {
      let rankingA = self.priorityList.indexOf(stuA);
      let rankingB = self.priorityList.indexOf(stuB);
      if (rankingA < rankingB) {
        return -1;
      }
      if (rankingA > rankingB) {
        return 1;
      }
    }
    allApplicants.sort(compareStudent);

    if (allApplicants.length > this.quota) {
      this.matchedWith = allApplicants.slice(0, this.quota);
    } else {
      this.matchedWith = allApplicants;
    }
    this.appliedBy = [];
    let stuToAdd = this.matchedWith.filter(
      (ele) => !previousList.includes(ele)
    );
    let stuToDrop = previousList.filter(
      (ele) => !this.matchedWith.includes(ele)
    );
    return [stuToAdd, stuToDrop];
  }

  setPriorityList(list) {
    if (!(typeof list == "object")) {
      throw new Error(
        "College.priorityList must be of type array but is: " + typeof list
      );
    }
    this.priorityList = list;
  }

  toString() {
    return (
      "College {id: " +
      this.id +
      ", matchedWith: " +
      this.matchedWith.toString() +
      "}"
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
    this.matchedWith.forEach((match) => {
      this.rankingOfMatch.push(this.priorityList.indexOf(match));
    });
  }
  resetID() {
    idFactory.reset();
  }
}

export default College;
// module.exports = College;
