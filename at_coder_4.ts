function main(input: string): void {
  const inputNumbers: number[] = input.split('\n').map(n => parseInt(n, 10))

  const A: number = inputNumbers[0]
  const B: number = inputNumbers[1]
  const C: number = inputNumbers[2]
  const X: number = inputNumbers[3]

  let count: number = 0

  for (let i = 0; i <= A; i ++) {
    for (let j = 0; j <= B; j++) {
      for (let k = 0; k<= C; k ++) {
        let result: number = 500 * i + 100 * j + 50 * k
        if (result === X) count ++ 
      }
    }
  }

  console.log(count)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))