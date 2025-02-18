'use strict';

/***
 * @return {function}
 */
let sum = 0;

function makeInfinityAdder(a) {
  if (a === undefined) {
    sum = 0;

    return sum;
  }

  return function (b) {
    if (b !== undefined) {
      sum = a + b;

      return makeInfinityAdder(sum);
    } else {
      return sum;
    }
  };
}

module.exports = makeInfinityAdder;
