
function main(input: string) {
  const nums: number[] = input.split(' ').map(n => parseInt(n, 10))
  const a: number = nums[0]
  const b: number = nums[1]

  let sum: number = 0
  for (let i = 1; i < (b - a) - 1; i++) {
    sum += i
    return sum
  }
  console.log(sum - a)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
