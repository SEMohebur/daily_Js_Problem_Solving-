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

// // Reverse a String  6=====================================

// const reverseString = (str) => {
//   const strArr = str.split("").reverse().join("");
//   return strArr;
// };

// console.log(reverseString("'world"));

// //  Count Vowels in a String  7===============================

// const countVowels = (str) => {
//   let counter = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i <= str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       counter++;
//     }
//   }
//   return counter;
// };

// console.log(countVowels("javascript"));

// //  Check Palindrome 8==============================================

// const isPelindrome = (str) => {
//   const arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr.unshift(str[i]);
//   }

//   const strJoin = arr.join("");
//   if (str === strJoin) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPelindrome("010"));

// // Capitalize First Letter of Each Word 9==================================
// const capitalizeFirstLetter = (param) => {
//   const strArr = param.split(" ");

//   const arr = [];

//   for (let i = 0; i <= strArr.length - 1; i++) {
//     arr.push(strArr[i].slice(0, 1).toUpperCase() + strArr[i].slice(1));
//   }

//   return arr.join(" ");
// };

// console.log(capitalizeFirstLetter("hello worldddd ahdjsd ushdusd"));

// // Count Occurrences of a Character 10==================================

// const countOccurrencesofCharacter = (param) => {
//   let count = 0;
//   let word = "";
//   const obj = {};

//   const arr = Array.from(param);

//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]] = obj[arr[i]] + 1;
//     }
//   }

//   for (let num in obj) {
//     if (count < obj[num]) {
//       count = obj[num];
//       word = num;
//     }
//   }
//   return { word, count };
// };

// console.log(countOccurrencesofCharacter("banana"));

////////////////////////Day 3 ////////////////////////////////////////

// // Find the Sum of an Array 11=============================================

// // //Easy way
// const sumOfArray = (arr) => {
//   return (res = arr.reduce((sum, item) => (sum += item)));
// };

// console.log(sumOfArray([1, 2, 3, 4, 5]));

// // //try to deffrent way
// const sumOfArray = (arr) => {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   return result;
// };

// console.log(sumOfArray([1, 2, 3, 4, 5]));

// // Find Maximum Value in Array 12===================================================
// const findMaxValue = (arr) => {
//   let maxNum = 0;

//   arr.forEach((element) => {
//     if (maxNum < element) {
//       maxNum = element;
//     }
//   });
//   return maxNum;
// };

// console.log(findMaxValue([3, 1, 7, 2, 9]));

// // Remove Duplicates from Array 13===================================================
// //Easy way

// const removeDublicateNum = (arr) => {
//   const res = new Set(arr);
//   return Array.from(res);
// };

// console.log(removeDublicateNum([1, 2, 2, 3, 3, 4]));

// // deffrent way
// const removeDublicateNum = (arr) => {
//   const resArr = [];

//   for (let item of arr) {
//     if (!resArr.includes(item)) {
//       resArr.push(item);
//     }
//   }
//   return resArr;
// };
// console.log(removeDublicateNum([1, 2, 2, 3, 3, 4]));

// // Flatten a Nested Array  14==============================================

// const NestedToFlatArray = (arr) => {
//   const res = arr.flat(arr.length);
//   return res;
// };

// console.log(NestedToFlatArray([1, [2, [5, [93, 33], 4], 3], [4, 5]]));

// // Chunk an Array  15=======================================================
// const chunkArr = (arr, condition) => {
//   const res = [];
//   for (let i = 0; i < arr.length; i += condition) {
//     res.push(arr.slice(i, i + condition));
//   }
//   return res;
// };

// console.log(chunkArr([1, 2, 3, 4, 5], 2));

////////////////////////////////////// Day 4/////////////////////////////////////

// // Count Object Properties 16=============================================

// const obj = { a: 1, b: 2, c: 3 };

// const countObjectProparty = (peram) => {
//   let count = 0;
//   for (let item in peram) {
//     if (item) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countObjectProparty(obj));

// // Merge Two Objects  17 ===================================================

// const obj1 = { a: 1, u: 3 };
// const obj2 = { b: 2, h: 2, i: 0 };

// const margeMultipleObj = (...param) => {
//   const margeObj = {};
//   for (let obj of param) {
//     for (objKey in obj) {
//       margeObj[objKey] = obj[objKey];
//     }
//   }
//   return margeObj;
// };

// console.log(margeMultipleObj(obj1, obj2));

// // find  FizzBuzz  18 ========================================================

// const fizzBuzz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0) {
//       console.log(`${i} Fizz`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} Buzz`);
//     } else {
//       console.log(`${i}`);
//     }
//   }
// };

// fizzBuzz(15);

// // //  Invert an Object   19 ============================================================================
// // Description: Write a function invertObject(obj) that swaps the keys and values of an object. Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}

// const obj = { a: 1, b: 2 };

// function objSwapping(obj) {
//   const resObj = {};

//   for (key in obj) {
//     resObj[obj[key]] = key;
//   }
//   return resObj;
// }

// console.log(objSwapping(obj));

// // // Find Duplicate Values in Array of Objects  20================================================================
// // // Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once

// function FindDuplicateValuesinArrayOfObjects(arr) {
//   const result = [];
//   let counter = 0;
//   const resObj = {};
//   for (let item of arr) {
//     for (key in item) {
//       //   console.log(item[key]);
//       if (!resObj[item[key]]) {
//         resObj[item[key]] = 1;
//       } else {
//         resObj[item[key]] = resObj[item[key]] + 1;
//       }
//     }
//   }
//   //   console.log(resObj);

//   for (key in resObj) {
//     if (counter < resObj[key]) {
//       counter = resObj[key];
//       result.push(key);
//     }
//   }

//   return result;
// }

// console.log(
//   FindDuplicateValuesinArrayOfObjects([
//     { name: "Ali" },
//     { name: "Sara" },
//     { name: "Ali" },
//   ]),
// );

/////////////////.  Day 5. /////////////////////////////////Day 5///////////////////////////////////

// //  Factorial (Recursive)  21 ================================================================== ok
// // Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
// // Example:
// // Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
// // Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).

// //ei problem ta jeheto noton system mane recursion seheto ai er help niye full concept ta boje nilam

// const factorial = (n) => {
//   if (n === 0) {
//     return 1;
//   } else {
//     return factorial(n - 1) * n;
//   }
// };

// console.log(factorial(5));

//  // Fibonacci Sequence  22 ==================================================== not ok
//   //Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
//  // Example:
//   //Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
//   //Hint: Try both iterative and recursive approaches.

const fibonacciSequence = (n) => {
  let first = 0;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    const next = first + second;
    first = second;
    second = next;
  }
  return second;
};

console.log(fibonacciSequence(6));

// //Create a Counter with Closure   23 ==================================================== ok
// //Description: Write a function makeCounter() that returns an object with increment, decrement, and getCount methods using closure.
// //Example:
// //const c = makeCounter();c.increment(); c.increment();c.getCount(); // 2
// //Hint: Use a variable inside the outer function that inner functions can access.

// function makeCounter() {
//   let counter = 0;

//   function increment() {
//     return counter++;
//   }

//   function decrement() {
//     return counter--;
//   }

//   function getCount() {
//     return counter;
//   }

//   return { increment, decrement, getCount };
// }

// const c = makeCounter();
// console.log(c.increment());
