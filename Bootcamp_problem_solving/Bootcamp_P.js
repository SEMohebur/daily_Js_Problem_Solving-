// bootcamp problem solving practice

/////////// Day 1///////////////////////////////////////////////

// // Check Even or Odd  1===========================
// const checkEvenOdd = (param) => {
//   for (let i = 1; i <= param; i++) {
//     if (i % 2 === 0) {
//       console.log(`${i} even number`);
//     } else {
//       console.log(`${i} odd number`);
//     }
//   }
// };

// checkEvenOdd(10);

// const checkEvenOdd = (param) => {
//   if (param % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkEvenOdd(7));

//  Find the Largest of Three Numbers 2===========================================
// const findLongestNumber = (arr) => {
//   let longestNumber = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (longestNumber < arr[i]) {
//       longestNumber = arr[i];
//     }
//   }
//   return longestNumber;
// };

// console.log(findLongestNumber([3, 7, 5]));

// const findLongestNumber = (arr) => {
//   let longestNum = Math.max(...arr);
//   return longestNum;
// };

// console.log(findLongestNumber([3, 7, 5]));

// // Celsius to Fahrenheit 3===================================
// const celsiusToFahrenheit = (c) => {
//   let F = (c * 9) / 5 + 32;
//   return F;
// };

// console.log(celsiusToFahrenheit(100));

// // Check Positive, Negative or Zero 4==================================

// const checkPositiveOrNegetiveNum = (n) => {
//   if (n === 0) {
//     return "Zero";
//   } else if (n < 0) {
//     return "Negative";
//   } else {
//     return "Positive";
//   }
// };

// console.log(checkPositiveOrNegetiveNum(0));

// //  Swap Two Variables 5======================================

// let a = 5;
// let b = 10;

// const swapTwoVariable = (...param) => {
//   return ([a, b] = [b, a]);
// };

// console.log(swapTwoVariable(a, b));

/////////// Day 2//////////////////////////////////////////////////////

// Reverse a String  6=====================================

// const reverseString = (str) => {
//   const strArr = str.split("").reverse().join("");
//   return strArr;
// };

// console.log(reverseString("'world"));

// //  Count Vowels in a String  7===============================

// const countVowels = (str) => {
//   let counter = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       counter++;
//     }
//   }
//   return counter;
// };

// console.log(countVowels("javascript"));

//  Check Palindrome 8==============================================

const isPelindrome = (str) => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.unshift(str[i]);
  }

  const strJoin = arr.join("");
  if (str === strJoin) {
    return true;
  } else {
    return false;
  }
};

console.log(isPelindrome("121"));
