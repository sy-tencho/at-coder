const str = 'xox'

const total = str.split('').reduce((acc, arg) => {
  if(arg === 'o') {
    return acc += 100
  }
  return acc
}, 700)

console.log(total)