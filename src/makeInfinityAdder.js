'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(a) {
  if (a === undefined) {
    return makeInfinityAdder(0);
  }

  return function (b) {
    if (b !== undefined) {
      return makeInfinityAdder(a + b);
    } else {
      return a;
    }
  };
}

module.exports = makeInfinityAdder;
