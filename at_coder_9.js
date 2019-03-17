'use strict'

function main(input) {
  const nums = input.split(' ').map(n => parseInt(n, 10))
  const N = nums[0]
  const Y = nums[1]

  const Z = Y / 1000

  if (Y % 1000 !== 0) {
    console.log('-1 -1 -1')
    return
  } else if (Y < 1000 * N) {
    console.log('-1 -1 -1')
    return 
  } else {
    for (let i = 0; i < Z; i ++) {
      for (let j = 0; j < Z; j ++) {
        for (let k = 0; k < Z; k ++) {
          let sum = 10000 * i + 5000 * j + 1000 * k
          let count = i + j + k
          if (sum === Y && count === N) {
            console.log(i, j, k)
          }
        }
      }
    }
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))