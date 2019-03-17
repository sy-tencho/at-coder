function main(input: string) {
  const inputNumbers: string[] = input.split(' ')
  const A: number = parseInt(inputNumbers[0], 10)
  const B: number = parseInt(inputNumbers[1], 10)

  A * B % 2 === 0 ? console.log('Even') : console.log('Odd')
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))