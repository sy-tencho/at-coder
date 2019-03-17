const string = 'aabbca'
const array = string.split('')
const array2 = []

let index = 0

for(let i = 0; i < string.length; i++) {
  
  let arg = array.shift()
  array2.push(arg)

  let count = 0
  let maxCount = 0

  for (let arg2 of array2.filter((n, i) => array2.indexOf(n) === i)) {
    if (array.indexOf(arg2) > -1) count ++ 
  }

  count > maxCount ? maxCount = count : maxCount

}

console.log(maxCount)