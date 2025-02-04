# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript error caused by the language's loose typing system.  When using the '+' operator with a mix of numbers and strings, JavaScript performs string concatenation instead of numeric addition, leading to unexpected results.

## Bug Description
The `foo` function is intended to add two numbers. However, due to the implicit type coercion, passing a number and a string results in string concatenation instead of arithmetic addition.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.

## Solution
The solution involves explicitly converting the input values to numbers before performing the addition, using `parseInt()` or `Number()`.  This ensures that the '+' operator performs numeric addition as intended.