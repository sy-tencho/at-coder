function main(input: string): void {
  const nums: number[] = input.split('\n')[1].split(' ').map(n => parseInt(n, 10))

  const uniqNums: number[] = nums.filter((arg: number, index: number, self: number[]) => {
    return self.indexOf(arg) === index
  })
  
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))