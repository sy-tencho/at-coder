function main(input) {
  const result = input.split('').filter((number) => {
    return number === '1'
  })
  console.log(result.length)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))

