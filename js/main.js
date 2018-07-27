const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let backward = integers.sort(function(a, b){return b-a});
console.log(backward);

// let array1 = integers.pop()
// console.log(integers)

let mult = integers.map(function(num) {
  return num * 1.5;
});
console.log(mult);