const array = [4, 7, 9, 3]

const I = array[3] - array[0]
const J = array[2] - array[0]
const K = array[1] - array[0]

function abs(val) {
  return val < 0 ? -val : val
}

if (abs(I) < array[3]) {
  console.log('YES')
} else if (abs(J) < array[3] && abs(K) < array[3]) {
  console.log('YES')
} else {
  console.log('NO')
}

