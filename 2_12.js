
const cakePrice = 4
const donutPrice = 7

N = 44

for (let i = 0; i <= N / cakePrice; i++) {
  for (let j = 0; j <= N / donutPrice; j++) {
    if (cakePrice * i + donutPrice * j === N) {
      console.log('true')
      return
    }
  }
}

