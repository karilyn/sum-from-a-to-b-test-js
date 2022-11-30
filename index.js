function sum(fromN, toN) {
  if (fromN === toN) { // this is the base case
    return toN;
  };
 }

  // Sum all the values from fromN up to toN

module.exports = sum;


/* base case: the function will not need to call itself if
fromN === toN -> just return the value of toN because there's nothing to sum
if fromN(3), toN(4) -> 3 + 4 or fromN + toN
if fromN(3), toN(4) -> 3 + 4 + 5
if fromN(3), toN(6) -> 3 + 4 + 5 + 6
if fromN(3), toN(7) -> 3 + 4 + 5 + 6 + 7
*/
