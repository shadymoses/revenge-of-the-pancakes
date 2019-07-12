const flipPancakes = require('./flip-pancakes')
const chalk = require('chalk')
// list of strings from command line
let stacks = process.argv.slice(2)
let verbose = false

if (stacks[stacks.length - 1] === 'true') {
  verbose = true
  stacks.pop()
}

console.log(chalk.cyan.bold('Revenge of the Pancakes'))
console.log(chalk.cyan('---------------------------'))
console.log(chalk.white(`Test Cases: ${stacks.length}\n`))

if (verbose) {
  stacks.forEach((str, i) => {
    const { moves, count } = flipPancakes(str)
    console.log(
      chalk.yellow(`Case #${i + 1}: ${count} move${count > 1 ? 's' : ''}`),
    )
    console.log(chalk.green(`Starting value: ${str}`))
    console.table(
      moves.reduce(
        (obj, str, i) => ({
          ...obj,
          [`move ${i + 1}`]: { result: str },
        }),
        {},
      ),
    )
    console.log('\n')
  })
} else {
  console.table(
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
}
