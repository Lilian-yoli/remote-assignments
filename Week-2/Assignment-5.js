function binarySearchPosition(numbers, target) {
  // your code here
  let n = Math.floor(numbers.length/2)
  let a = 0
  let b = numbers.length - 1
  while (n >= 0){
    if (target < numbers[n]){
      b = n - 1
      n = Math.floor((n - a)/2)
    }
    else if (target > numbers[n]){
      a = n + 1
      n += Math.floor((b - n)/2)
    }
    else {
      return n
    }
  }

}
console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) );// should print 0
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3
