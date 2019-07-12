/**
 * @typedef {Object} PancakeResult
 * @property {string[]} moves The list of moves performed
 * @property {number} count The number of moves made
 */

/**
 * Converts an array of moves to an object with the moves and a count
 * @param {string[]} moves The results of each move performed
 * @returns {PancakeResult}
 */
function formatResult(moves) {
  return { moves, count: moves.length }
}

module.exports = formatResult
