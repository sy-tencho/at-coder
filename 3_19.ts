function main(input: string): void {
  const nums: number[] = input.split(' ').map(n => parseInt(n, 10))

  const A: number = nums[0]
  const B: number = nums[1]
  const X: number = nums[2]

  if (A + B >= X && A <= X) {
    console.log('YES')
  } else {
    console.log('NO')
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))