const string = 'AsaCdjnfasn'

function judgeString(string) {
  // judge A
  const array = string.split('')
  if (array[0] !== 'A') {
    false
  } else {
    array.shift()
  }

  const arrayLength = array.length
  const indexOfC = array.indexOf('C')

  // judge C
  if (indexOfC > 1 && indexOfC < arrayLength - 1) {
    array.splice(indexOfC, 1)
    // judge lower case
    return array.every((char) => {
      return char.match(/^[a-z]+$/)
    })
  } else {
    false
  }

}

console.log(judgeString(string))
