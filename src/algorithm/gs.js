var GS = {};
GS.TypeA = {
  name: undefined,
  ranking: [],
  matchedTo: undefined,
  highestTypeB: 0,
  toString: function () {
    return this.name;
  },
};

GS.TypeB = {
  name: undefined,
  ranking: [],
  matchedTo: undefined,
  toString: function () {
    return this.name;
  },
};

GS.globals = {};

GS.lineNumber = 1;

/**
 * Output a string of text wrapped in a <p>.
 */
GS.print = function (str, parent) {
  var textElem = document.createElement("p");
  textElem.appendChild(document.createTextNode(GS.lineNumber++ + ": " + str));
  parent.appendChild(textElem);
};

/**
 * Output the pairing results.
 */
GS.printPairs = function (typeAs, typeBs, parent) {
  for (var a = 0; a < typeAs.length; a++) {
    GS.print(
      typeAs[a].name + " is paired with " + typeBs[typeAs[a].matchedTo].name,
      parent
    );
  }
};

/**
 * Returns the number of unpaired typeAs.
 */
GS.totalUnmatched = function (typeAs) {
  var result = 0;
  for (var a = 0; a < typeAs.length; a++) {
    if (typeAs[a].matchedTo == undefined) {
      result += 1;
    }
  }
  return result;
};

/**
 * Gale-Shapley algorithm for stable matching.
 */
GS.match = function (typeAs, typeBs, verbose) {
  var round = 1;
  var verboseResults = document.getElementById("verbose_results");
  while (GS.totalUnmatched(typeAs) > 0 && round <= 50) {
    var result = "";
    if (verbose) GS.print("Round " + round, verboseResults);
    for (var a = 0; a < typeAs.length; a++) {
      (function () {
        var A = typeAs[a];
        if (typeAs[a].matchedTo === undefined) {
          // choose the highest typeB that a has not proposed to
          var b = typeAs[a].ranking[typeAs[a].highestTypeB];
          var B = typeBs[b];
          if (verbose) GS.print(A + " prefers " + B, verboseResults);
          // if b does not have a match, then pair a and b
          if (typeBs[b].matchedTo == undefined) {
            if (verbose)
              GS.print(B + " is previously unmatched", verboseResults);
            typeAs[a].matchedTo = b;
            typeBs[b].matchedTo = a;
            if (verbose)
              GS.print(A + " becomes paired with " + B, verboseResults);
          }
          // if b is already paired with a, then do nothing
          else if (typeBs[b].matchedTo == a) {
            // do nothing
            if (verbose)
              GS.print(B + " is already matched to " + A, verboseResults);
          }
          // otherwise, b already is paired, but it is not to a
          else {
            var a_ = typeBs[b].matchedTo;
            var A_ = typeAs[a_];
            if (verbose)
              GS.print(B + " is already paired to " + A_, verboseResults);
            if (verbose)
              GS.print(
                B + " ranks " + A_ + " as " + typeBs[b].ranking.indexOf(a_),
                verboseResults
              );
            if (verbose)
              GS.print(
                B + " ranks " + A + " as " + typeBs[b].ranking.indexOf(a),
                verboseResults
              );
            // if b's current pair (a_) ranks b higher than a, then a should look for another pair
            if (typeBs[b].ranking.indexOf(a_) < typeBs[b].ranking.indexOf(a)) {
              // do not ask this typeB again
              typeAs[a].highestTypeB++;
              if (verbose)
                GS.print(
                  A +
                    " moves on to " +
                    typeBs[typeAs[a].ranking[typeAs[a].highestTypeB]],
                  verboseResults
                );
            }
            // otherwise, pair a with b, and a_ should be paired with somebody else
            else {
              typeAs[a].matchedTo = b;
              typeBs[b].matchedTo = a;
              typeAs[a_].matchedTo = undefined;
              if (verbose)
                GS.print(A + " becomes paired with " + B, verboseResults);
              if (verbose) GS.print(A_ + " becomes single", verboseResults);
              typeAs[a_].highestTypeB++;
              if (verbose)
                GS.print(
                  A_ +
                    " moves on to " +
                    typeBs[typeAs[a_].ranking[typeAs[a_].highestTypeB]],
                  verboseResults
                );
            }
          }
        }
      })();
    }
    round++;
  }
};
module.exports = GS;
