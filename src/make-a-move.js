const flipSlice = require('./flip-slice')

/**
 * Takes an incoming pancake string and array of moves.
 * Recursively updates the string and moves array until
 * the string has been resolved as all +s.
 * @param {string} str
 * @param {string[]} moves
 * @returns {string[]} The complete array of moves required to resolve the string.
 */
function makeAMove(str, moves = []) {
  // all + = all done
  if (/^\++$/.test(str)) return moves
  // track next index to use to flip
  let depth
  if (/^-+$/.test(str)) {
    // all - (flip that whole mother)
    depth = str.length
  } else if (/^\++(?=-)/.test(str)) {
    // a string of + followed by a -, flip all the +
    depth = str.indexOf('-')
  } else if (/^-+\+/.test(str)) {
    // a string of - followed by a +, flip all the -
    depth = str.indexOf('+')
  }
  let nextStr = flipSlice(str, depth)
  return makeAMove(nextStr, [...moves, nextStr])
}

module.exports = makeAMove
