function main(input: string): void {
  let count: number = 0
  let numbers: number[] = input.split('\n')[1].split(' ').map(n => parseInt(n, 10))

  while (numbers.every(num => num % 2 === 0)) {
    count ++
    numbers = numbers.map(num => {
      return num / 2
    })
  }

  console.log(count)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))