function main(input: string) {
  const result: string[] = input.split('').filter((arg: string) => {
    return arg === '1'
  })
  console.log(result.length)
} 

main(require('fs').readFileSync('/dev/stdin', 'utf8'))