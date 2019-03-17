
function main(input) {
  let input_word = input
  const keyWords = ['eraser', 'erase', 'dreamer', 'dream']

  for (let keyWord of keyWords) {
    const reg = new RegExp(`${keyWord}`, 'g')
    input_word = input_word.replace(reg, '')
  }

  input_word.length ? console.log('NO') : console.log('YES')
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
