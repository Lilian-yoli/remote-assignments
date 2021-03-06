function avg(data){

  let ans = 0
  for(let i = 0; i < data.size; i++){
    ans += data.products[i].price
  }
  return ans/data.size
}

console.log( avg({ size:3, products:[ { name:"Product 1", price:100 }, { name:"Product 2", price:700 }, { name:"Product 3", price:250 }   ] }) ) // should print the average price of all products
