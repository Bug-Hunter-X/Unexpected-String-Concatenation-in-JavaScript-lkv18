function foo(a, b) {
  return Number(a) + Number(b);
}

console.log(foo(1, '2')); // Output: 3 (numeric addition)
console.log(foo(1, 2)); // Output: 3 (numeric addition)
console.log(foo('1', '2')); // Output: 3 (numeric addition) 
console.log(foo('a',2)); //Output: NaN