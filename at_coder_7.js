'use strict'

function main(input) {
  const nums = input.split('\n')[1].split(' ').map(n => parseInt(n, 10))
  const sortNums = nums.sort(compareNumbers)

  let A = 0
  let B = 0
  
  for (let i = 0; i <= sortNums.length; i ++) {
    if (i % 2 === 0) {
      A += sortNums[i]
    } else {
      B += sortNums[i]
    }
  }

  console.log(A - B)

}

function compareNumbers(a, b) {
  return b - a
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
