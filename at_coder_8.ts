function main(input: string) {
  const nums: number[] = input.split(' ').map(n => parseInt(n, 10))
  const N: number = nums[0]
  const Y: number = nums[1]
  const Z: number = Y / 1000

  if (Y % 1000 !== 0) {
    console.log('-1 -1 -1')
    return
  }
  else if (Y < 1000 * N) {
    console.log('-1 -1 -1')
    return
  } else {
    for (let i: number = 0; i < Z; i ++) {
      for (let j: number = 0; j < Z; j ++) {
        for (let k: number = 0; j < Z; k ++) {
          const bill: number = i + j + k
          const sum: number = i + 10000 + j * 5000 + 1000 * k
          if (bill === N && sum === Y) {
            console.log(i, j, k)
            return
          }
        }
      }
    }
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))