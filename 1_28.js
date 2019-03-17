// A {poison: 1, taste: 0}
// B {poison: 1, taste: 1}
// C {poison: -1, taste: 1}



function countMaxCookies(array) {
  let state = 0
  let count = 0
  
  array.forEach((obj) => {
    state += obj.poison
    count += obj.taste
    return { state, count }
  })
  if (state >= -1) {
    return count
  } else {
    return count + state + 1
  }
}

const array = [
  {poison: 1, taste: 0},
  {poison: 1, taste: 1},
  {poison: -1, taste: 1},
]

console.log(countMaxCookies(array))