function main(input: string): void {
  const nums: number[] = input.split('\n').map(n => parseInt(n, 10)).slice(1)
  const uniqNums: number[] = nums.filter((arg: number, index: number, self: number[]) => {
    return self.indexOf(arg) === index
  })

  console.log(uniqNums.length)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))