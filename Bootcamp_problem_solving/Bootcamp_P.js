// bootcamp problem solving practice

/////////// Day 1///////////////////

// Check Even or Odd  1===========================
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

// Celsius to Fahrenheit 3===================================
const celsiusToFahrenheit = (c) => {
  let F = (c * 9) / 5 + 32;
  return F;
};

console.log(celsiusToFahrenheit(100));
