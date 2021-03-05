function count(input) {

  function countArr(arr, num){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === num){
        result += 1
      }
    }
    return result
  }

  let obj = {}
  obj[input[0]] = 1;
  for (let i = 1; i < input.length; i++){
    for (let prop in obj){
      if(input[i] !== prop){
        obj[input[i]] = countArr(input, input[i])
        break
      }
    }
  }
  return obj
}


let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];

console.log(count(input1));  // should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  function counter (arr, n){
    let counterResult = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].key == n){
        counterResult += arr[i].value;
      }
    }
    return counterResult
  }

  let obj = {}
  for (let i = 0; i < input.length; i++){
    obj[input[i].key] = counter(input, input[i].key)
  }
  return obj
}

let input2 = [     {key: 'a', value: 3},     {key: 'b', value: 1},     {key: 'c', value: 2},     {key: 'a', value: 3},     {key: 'c', value: 5} ]
console.log(groupByKey(input2));  // should print {a:6, b:1, c:7}
