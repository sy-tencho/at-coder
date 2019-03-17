'use strict'

function main(input) {
  const nums = input.split('\n').map(n => parseInt(n, 10))
  let count = 0

  const A = nums[0]
  const B = nums[1]
  const C = nums[2]
  const X = nums[3]

  for (let i = 0; i <= A; i ++) {
    for (let j = 0; j <= B; j ++) {
      for (let k = 0; k <= C; k ++) {
        let sum = 100 * i + 50 * j + 10 * k
        if (sum === X) count ++
      }
    }
  }

  console.log(count)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
