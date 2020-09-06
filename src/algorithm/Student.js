const utils = require("./utils.js");
const idFactory = new utils.IDFactory();

class Student {
  constructor(name, preferenceList) {
    this.id = idFactory.createID();
    this.matchedWith = null;
    this.nextProposal = 0;
    this.proposedToAll = false;
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

module.exports = Student;
