/**
 * Toggles between +/-
 * @param {string} str + or -
 * @returns {string} The opposite string
 */
function reversePolarity(str) {
  return str === '+' ? '-' : '+'
}

module.exports = reversePolarity
