// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


// Solution 1

summation = (num) => num * (num + 1) / 2;


// Solution 2

var summation = function (num) {
    let sum = 0;
    let i = num;
    while (i > 0) {
      sum += i;
      i--;
    }
    return sum;
  }