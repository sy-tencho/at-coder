'use strict'

function main(input) {
  const nums = input.split(' ').map(n => parseInt(n, 10))
  
  const N = nums[0]
  const A = nums[1]
  const B = nums[2]
  
  
  let sum = 0

  for (let i = 1; i <= N; i ++) {
    let n = String(i).split('').map(n => parseInt(n, 10)).reduce((acc, arg) => {
      return acc + arg
    }, 0)

    if (n >= A && n <= B) {
      sum += i
    }
  }
  
  console.log(sum)
  
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
