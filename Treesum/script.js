"use strict"

function summ(a) {
  let s = 0;
  for (let index = 0; index < a.length; index++) {
    ((typeof(a[index]))==="number") ? (s += a[index]) : (s += summ(a[index]))    
  }
  return s;
};

console.log(summ([ 5, 7, 
  [ 4, [2], 8, [1,3], 2 ], 
  [ 9, [] ], 
  1, 8
]))