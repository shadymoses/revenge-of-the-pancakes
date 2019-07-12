const formatResult = require('./format-result')
const makeAMove = require('./make-a-move')

/**
 * @typedef {Object} PancakeResult
 * @property {string[]} moves The list of moves performed
 * @property {number} count The number of moves made
 */

/**
 * Function to convert strings containing only + or - into a string that's all +.
 * Conversion is done by reversing entire array slices
 * and flipping polarity of each item in the reversed slice.
 * @param {string} str A string consisting of only + or - characters, eg -+--+
 * @returns {PancakeResult} An object containing a list describing moves performed and a count of moves made
 */
function flipPancakes(str) {
  // bail on invalid input
  if (typeof str !== 'string' || !str || /[^+-]/.test(str)) {
    throw new Error(
      `Invalid string ${str}. Inputs should only contain the characters + or -.`,
    )
  }
  return formatResult(makeAMove(str))
}

module.exports = flipPancakes
