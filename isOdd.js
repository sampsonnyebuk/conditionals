/*
Write a function isOdd that takes
in a number as an argument and returns
true if the number is odd and returns false
*/


function isOdd(num) {
    if (num%2 === 0) {
        return false;
    } else {
        return true
    }
  }

  console.log(isOdd(2)); // => false
  console.log(isOdd(5)); // => true
  console.log(isOdd(-17)); // => true
