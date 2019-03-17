function main(input: string): void {
  const inputNumbers: number[] = input.split(' ').map(n => parseInt(n, 10))

  const N = inputNumbers[0]
  const A = inputNumbers[1]
  const B = inputNumbers[2]

  let result: number = 0

  for (let i: number = 0; i <= N; i++) {
    const sum: number = String(i).split('').map(n => parseInt(n, 10)).reduce((acc, arg) => {return acc + arg}, 0)
    
    if (sum >= A && sum <= B) {
      result += i
    }
  }

  console.log(result)

}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))