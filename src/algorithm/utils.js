// const College = require("./College");

export class IDFactory {
  constructor() {
    this.count = 0;
  }

  createID() {
    let id = this.count;
    this.count += 1;
    return id;
  }
  reset() {
    this.count = 0;
  }
}

// module.exports = {
//   IDFactory: IDFactory,
// };
