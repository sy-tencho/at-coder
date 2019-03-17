function main(input) {
  const input_numbers = input.split(' ')
  const a = parseInt(input_numbers[0], 10)
  const b = parseInt(input_numbers[1], 10)

  if ((a * b) % 2 === 0) {
    console.log('Even') 
  } else {
    console.log('Odd')
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
