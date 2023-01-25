function sum(fromN, toN) {
  if (fromN === toN) { // this is the base case
    return toN;
  };
  return toN + sum(fromN, toN - 1)
 }

console.log(sum(3, 7))

module.exports = sum;


/* 
base case: the function will not need to call itself if
fromN === toN -> just return the value of toN because there's nothing to sum
if fromN(3), toN(4) -> 4 + 3 or fromN + toN
if fromN(3), toN(5) -> 5 + 4 + 3 (5 + (3 + 5 - 1))
if fromN(3), toN(6) -> 6 + 5 + 4 + 3 (6 + (3 + 4 + 6 - 1))
if fromN(3), toN(7) -> 7 + 6 + 5 + 4 + 3
*/
