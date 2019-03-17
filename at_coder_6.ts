function main(input: string): void {
  const nums: number[] = input.split('\n')[1].split(' ').map(n => parseInt(n, 10))

  const sort = (a: number, b: number) => {
    return b - a
  } 

  const sum = (array: number[]) => {
    return array.reduce((acc, arg) => {return acc + arg}, 0)
  }

  const sortNums: number[] = nums.sort(sort)
  const allice: number[] = []
  const bob: number[] = []

  for (let i: number = 0; i < sortNums.length; i ++) {
    i % 2 === 0 ? allice.push(sortNums[i]) : bob.push(sortNums[i])
  }

  const diff: number = sum(allice) - sum(bob)

  console.log(diff)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))