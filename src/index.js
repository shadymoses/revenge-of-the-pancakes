#!/usr/bin/env node
const flipPancakes = require('./flip-pancakes')
const chalk = require('chalk')
const VERBOSE_FLAG = '--verbose'
// list of strings from command line
let stacks = process.argv.slice(2).filter(str => str !== VERBOSE_FLAG)
// check for verbose mode
let verbose = process.argv.indexOf(VERBOSE_FLAG) > -1

// log out common program info
console.log(chalk.cyan.bold('\nRevenge of the Pancakes'))
console.log(chalk.cyan('---------------------------'))
console.log(chalk.white(`Test Cases: ${stacks.length}\n`))

// verbose output (if requested)
if (verbose) {
  stacks.forEach((str, i) => {
    const { moves, count } = flipPancakes(str)
    // header
    console.log(
      chalk.yellow(`Case #${i + 1}: ${count} move${count === 1 ? '' : 's'}`),
    )
    // make sure to log starting string
    console.log(chalk.green(`Starting value: ${str}`))
    // a table stepping through the sequence of moves
    console.table(
      // convert to an object of objects to get nice labels in the console.table output
      moves.reduce(
        (obj, str, i) => ({
          ...obj,
          [`move ${i + 1}`]: { result: str },
        }),
        {},
      ),
    )
    // new line for nice spacing between tables
    console.log('\n')
  })
} else {
  // standard output
  console.table(
    // convert to an object of objects to get nice labels in the console.table output
    stacks.reduce((obj, str, i) => {
      const { moves, count } = flipPancakes(str)
      return {
        ...obj,
        [`Case #${i + 1}`]: {
          Input: str,
          Moves: count,
        },
      }
    }, {}),
  )
  // new line for nice spacing between runs
  console.log('\n')
}
