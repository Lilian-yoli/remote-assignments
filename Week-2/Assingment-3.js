function count(input) {
  // your code here
  arr = []
  obj = {}
  input.forEach(function(item){

    let existing = arr.filter(function(v){
      return v == item
    });
    if (existing.length){
      obj[item] += 1;
    }
    else {
      obj[item] = 1
      arr.push(item)
    }
  })
  return obj
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];


console.log(count(input1));  // should print {a:3, b:1, c:2, x:1}


// groupByKey function

function groupByKey(input) {

  arr = []
  obj = {}

  input.forEach(function(item) {
    let existing = arr.filter(function(v, i) {
      return v.key == item.key;
    });
    if (existing.length) {
      let additem = obj[item.key] + item.value
      obj[item.key] = additem;
    } else {
        obj[item.key] = item.value;
        arr.push(item)
    }
  });
  return obj
}

let input2 = [     {key: 'a', value: 3},     {key: 'b', value: 1},     {key: 'c', value: 2},     {key: 'a', value: 3},     {key: 'c', value: 5} ]
console.log(groupByKey(input2));  // should print {a:6, b:1, c:7}
