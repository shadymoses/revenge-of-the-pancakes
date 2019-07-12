const reversePolarity = require('./reverse-polarity')

/**
 * Reverses order and polarity of a slice of a pancake string.
 * @param {string} str Pancake string
 * @param {number} depth Number of characters to flip & reverse
 */
function flipSlice(str, depth) {
  const flippedSlice = str
    .substr(0, depth)
    .split('')
    .reverse()
    .map(reversePolarity)
    .join('')

  return `${flippedSlice}${depth < str.length ? str.substr(depth) : ''}`
}

module.exports = flipSlice
