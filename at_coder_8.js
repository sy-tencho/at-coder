'use strict'

function main(input) {
  const nums = input.split('\n').map(n => parseInt(n, 10))
  nums.shift()
  const sortNums = nums.sort(compareNumbers)

  const count = sortNums.reduce((acc, arg) => {
    if (acc[acc.length - 1] !== arg) {
      acc.push(arg)
    }
    return acc
  }, [])  

  console.log(count.length)
}

function compareNumbers(a, b) {
  return b - a
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))


'use strict'

function main(input) {
  const nums = input.split('\n').map(n => parseInt(n, 10))
  const mochis = nums.slice(1, nums.length)

  console.log(mochis.filter((n, i) => mochis.indexOf(n) === i).length)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))


