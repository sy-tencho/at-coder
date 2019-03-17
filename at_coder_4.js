'use strict'

function main(input) {
  let nums = input.split('\n')[1].split(' ').map(n => parseInt(n, 10))
  
  let count = 0
  while(nums.every(num => num % 2 === 0)) {
    count ++ 
    nums = nums.map(n => n / 2)
  }
  
  console.log(count)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))

// 配列の要素を全て2で割って配列に入れ直す
// その要素が偶数か確かめる
// 全ての偶数だったら、countを足して上の手順を繰り返す
// 奇数があったらブレイク