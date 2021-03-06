function binarySearchPosition(numbers, target) {
  // your code here

  let a = 0
  let b = numbers.length - 1
  while ( a <= b ){
    let n = Math.floor((a + b)/2)
    if (target < numbers[n]){
      b = n - 1
    }
    else if (target > numbers[n]){
      a = n + 1
    }
    else {
      return n
    }
  }

}
console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) );// should print 0
console.log( binarySearchPosition([1, 2, 5, 6, 7], 7) ); // should print 3
