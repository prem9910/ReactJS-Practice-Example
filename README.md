# Map Filter Reduce Function Practice
# Array Transformation Functions

## Introduction

This repository demonstrates the usage of essential array transformation functions in JavaScript: `map`, `filter`, and `reduce`. These functions are powerful tools for manipulating arrays and transforming data.

## `map` Function

The `map` function is used to transform each element of an array based on a provided callback function. It creates a new array with the results.

### Example:

```javascript
const originalArray = [1, 2, 3, 4, 5];

const squaredArray = originalArray.map((number) => number * number);

console.log(squaredArray); // Output: [1, 4, 9, 16, 25]

```
## `filter` Function

The `filter` function is used to create a new array with elements that pass a certain condition specified by a callback function.

### Example:

```javascript

const numbers = [10, 20, 30, 40, 50];

const filteredNumbers = numbers.filter((number) => number > 30);

console.log(filteredNumbers); // Output: [40, 50]
```

## `reduce` Function

The `reduce` function is used to accumulate values of an array into a single value. It takes a callback function and an initial accumulator value.

### Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
```
### Usage

Clone this repository and explore the examples.js file for more in-depth usage and examples of these array transformation functions.

Feel free to contribute and add more examples or improvements!

### License

This project is licensed under the MIT License. Feel free to use and modify the code according to the terms specified in the license.


This README provides a brief introduction to `map`, `filter`, and `reduce` functions, along with examples to illustrate their usage. It also invites contributors to explore more examples in the `examples.js` file and outlines the project's license.
