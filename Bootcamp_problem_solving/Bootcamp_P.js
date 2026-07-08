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

//  // Fibonacci Sequence  22 ====================================================  ok
//   //Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
//  // Example:
//   //Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
//   //Hint: Try both iterative and recursive approaches.

// const fibonacciSequence = (n) => {
//   let first = 0;
//   let second = 1;

//   for (let i = 2; i <= n; i++) {
//     const next = first + second;
//     first = second;
//     second = next;
//   }
//   return second;
// };

// console.log(fibonacciSequence(6));

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

// // Curry a Function 24======================================================
// //Description: Write a function curry(fn) that converts a function of two arguments into a curried version.
// //Example:
// //const add = curry((a,b) => a+b);add(2)(3); // 5
// //Hint: Return a function from inside a function.

// const curry = (fn) => {
//   return function (a) {
//     return function (b) {
//       return fn(a, b);
//     };
//   };
// };
// const add = curry((a, b) => a + b);
// console.log(add(2)(3));

//  // Memoize a Function  25==============================================
// // Description: Write a function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result.
// // Example:
// ///const memoAdd = memoize(n => n + 10);memoAdd(5); // 15 (computed)memoAdd(5); // 15 (from cache)
// //Hint: Use an object as a cache inside the outer function.

// const memoize = (fn) => {
//   const cache = {};

//   return function (input) {
//     if (input in cache) {
//       return cache[input];
//     }

//     const result = fn(input);
//     cache[input] = result;
//     return result;
//   };
// };

// const memoAdd = memoize((n) => n + 10);

// console.log(memoAdd(5));
// console.log(memoAdd(5));

///////////////////// Day 6//////////////////////////////////

// //  Destructure and Rename   26====================================================
//  //Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name.
//  //Example:
//  //const user = {firstName:'Sara', lastName:'Khan', age:25};
//  //Hint: Use: const { firstName: name, lastName, age } = user;

// const user = { firstName: "Sara", lastName: "Khan", age: 25 };

// const { firstName: name, lastName, age } = user;
// console.log(name, lastName, age);

// //  Merge Arrays with Spread 27=======================================================
// //Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
// // Example:
//  //Input: [1,2], [3,4], [5]Output: [1,2,3,4,5]
//  //Hint: Use rest parameters and spread inside reduce or flat.

// const multipleArrayTo1Array = (...param) => {
//   const flatArr = param.flat(param.length - 1);
//   return flatArr;
// };

// console.log(multipleArrayTo1Array([1, 2], [3, 4], [5]));

// //  Promise Chain  28 =====================================================================
// //Description: Write a function delay(ms) that returns a Promise that resolves after ms milliseconds. Then chain two delays: first 1 second, then 2 seconds, logging a message after each.
// //Example:
// //delay(1000).then(() => { console.log('1 sec'); return delay(2000); }).then(() => console.log('3 sec total'));
// //Hint: Use new Promise with setTimeout inside.

// // way 1

// const promiseChain = async () => {
//   const res1 = await setTimeout(() => {
//     console.log("1 sec");
//   }, 1000);

//   const res2 = await setTimeout(() => {
//     console.log("2 sec");
//   }, 2000);
// };

// promiseChain();

// // way 2

// new Promise((resolve) => {
//   resolve("Hello");
// })
//   .then((data) => {
//     setTimeout(() => {
//       console.log("1 sec");
//     }, 1000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("2 sec");
//     }, 2000);
//   });

// // way 3

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(1000).then(() => {
//   console.log("1 sec");
//   return delay(2000).then(() => {
//     console.log("2 sec");
//   });
// });

// //  Async/Await Fetch Simulation  29===========================================================
// //Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
// // Example:
// // await getUserData(1);// returns {id:1, name:'Test User'}
// // Hint: Use async/await with a Promise that wraps setTimeout.

// const mockData = [
//   { id: 1, name: "Test User" },
//   { id: 2, name: "maisa" },
//   { id: 3, name: "labib" },
// ];

// const getUserData = async (id) => {
//   const user = await new Promise((resolve) => {
//     setTimeout(() => {
//       const data = mockData.find((item) => item.id === id);
//       resolve(data);
//     }, 500);
//   });
//   return user;
// };

// getUserData(2).then((data) => console.log(data));

//  // Optional Chaining & Nullish Coalescing 30 ===========================================
// // Description: Given a nested object that may have missing properties, safely access a deeply nested value using optional chaining (?.) and provide a default using nullish coalescing (??).
// // Example:
//  //const user = {profile: null};const city = user?.profile?.address?.city ?? 'Unknown';// Output: 'Unknown'
// // Hint: Chain ?. for each level; use ?? for the fallback.

// const user = {
//   id: 1,
//   name: "Mohibur",
//   profile: {
//     contact: {
//       email: "mohibur@gmail.com",
//       // phone: "023898989",
//     },
//   },
// };

// console.log(user?.profile?.contact?.phone ?? "Phone number not found");

////////////////////////////////////////Day 7///////////////////////////////////////

// // Debounce Function 31=================================================
//  //Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
// //Example:
// //const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// //Hint: Use clearTimeout and setTimeout.

// const debounceFunc = (fn, delay) => {
//   setTimeout(() => {
//     fn();
//   }, delay);
// };

// const fn = () => {
//   return console.log("fnsd");
// };

// const debouncedSearch = debounceFunc(fn, 300);

// // Implement Array.prototype.map from Scratch 35=======================================
// // Description: Write a function myMap(arr, callback) that replicates the behavior of Array.prototype.map without using the built-in map().
//  //Example:
// // myMap([1,2,3], x => x * 2);// Output: [2, 4, 6]
// // Hint: Loop through the array, apply the callback to each element, push results to a new array.

// const myMap = (arr, fn) => {
//   const resArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     resArr.push(fn(arr[i]));
//   }
//   return resArr;
// };

// const arr = [1, 2, 3];

// console.log(myMap(arr, (x) => x * 2));

////////////////////////////////////////Day 8///////////////////////////////////////

// // Safe JSON Parse 36=====================================================
// /// Description: Write a function safeJsonParse(str) that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
// //Example:
// //safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
// //Hint: Use try/catch inside the function.

// const safeJsonParse = (param) => {
//   try {
//     const res = JSON.parse(param);
//     return res;
//   } catch (error) {
//     return null;
//   }
// };

// console.log(safeJsonParse('{"a":1}'));

// //  Retry a Promise 37===================================================
// // Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
// // Example:
// // await retry(unstableFetch, 3);// Tries up to 3 times before failing
//  //Hint: Use a loop with try/catch; only throw after all retries are exhausted.

// const unstableFetch = async () => {
//   const result = true;
//   let res = await result;
//   return res;
// };

// const retry = async (unstableFetch, time) => {
//   let lastErr;
//   for (let i = 0; i < time; i++) {
//     try {
//       const res = await unstableFetch();
//       return res;
//     } catch (error) {
//       lastErr = error;
//     }
//   }
//   throw lastErr;
// };

// retry(unstableFetch, 3)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

///////////////////////////////////////////// Day 9 /////////////////////////////////////

// // Two Sum   41================================================
// // Description: Given an array of numbers and a target, write a function twoSum(arr, target) that returns the indices of the two numbers that add up to the target.
// // Example:
// //  Input: [2, 7, 11, 15], target = 9Output: [0, 1]  (because 2 + 7 = 9)
// // Hint: Use a hash map to store visited values and their indices.

// const towSum = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         return [arr.indexOf(arr[i]), arr.indexOf(arr[j])];
//       }
//     }
//   }
//   return "not found";
// };

// console.log(towSum([2, 7, 11, 15], 17));

// //Check Anagram  42====================================================
// //Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
// //Example:
// //Input: 'listen', 'silent'  → Output: trueInput: 'hello', 'world'   → Output: false
// //Hint: Sort both strings and compare, or use a character frequency map.

// //Way 2==

// const checkAnagrum = (str1, str2) => {
//   const sortStr1 = str1.split("").sort().join("");
//   const sortStr2 = str2.split("").sort().join("");

//   if (sortStr1 === sortStr2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkAnagrum("listen", "silent"));

// //way 2==          baki ache //
// const checkAnagrum = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const obj = {};

//   const str1Arr = Array.from(str1);
//   for (let i = 0; i < str1Arr.length; i++) {
//     if (!obj[str1Arr[i]]) {
//       obj[str1Arr[i]] = 1;
//     } else {
//       obj[str1Arr[i]] = obj[str1Arr[i]] + 1;
//     }
//   }
//   for (key in obj) {
//   }
// };

// checkAnagrum("listen", "silent");

// // Find Missing Number 43===================================================
// // Description: Given an array of n-1 integers from 1 to n with one number missing, write a function findMissing(arr, n) to find the missing number.
// //Example:
// //Input: [1,2,4,5], n=5  → Output: 3
// //Hint: Use the formula: expected sum = n*(n+1)/2, then subtract actual sum.

// const findMissingNum = (arr, n) => {
//   let sum = (n * (n + 1)) / 2;

//   const arrSum = arr.reduce((arrSum, i) => {
//     return (arrSum += i);
//   });

//   const missingNum = sum - arrSum;
//   console.log(missingNum);
// };

// findMissingNum([1, 2, 4, 5], 5);

// // Valid Parentheses  44 ===================================================================
// //Description: Write a function isValidParentheses(str) that returns true if the string has valid, balanced parentheses, brackets, and braces.
// //Example:
// //Input: '()[]{}'  → Output: trueInput: '([)]'    → Output: false
// //Hint: Use a stack (array). Push opening brackets, pop and compare for closing ones.

// // Count Words in a Sentence  46======================================================
// // Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
// // Example:
//  //Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
// //Hint: Split by spaces, then reduce into a frequency object.

// const worCount = (str) => {
//   const obj = {};
//   const strArr = str.split(" ");
//   for (let i = 0; i < strArr.length; i++) {
//     if (!obj[strArr[i]]) {
//       obj[strArr[i]] = 1;
//     } else {
//       obj[strArr[i]] = obj[strArr[i]] + 1;
//     }
//   }
//   return obj;
// };

// console.log(worCount("the cat sat on the mat"));

//Longest Word in a Sentence 47=========================================================
// Description: Write a function longestWord(sentence) that returns the longest word in a sentence. If there's a tie, return the first one.
// Example:
// Input: 'The quick brown fox'Output: 'quick'
// Hint: Split the sentence and use reduce() to track the longest.

// const longestWord = (sentence) => {
//   return sentence
//     .split(" ")
//     .reduce((longest, current) =>
//       current.length > longest.length ? current : longest,
//     );
// };

// console.log(longestWord("The quick brown fox"));

// // way 2

// const findLongestStr = (str) => {
//   let longestString = "";

//   const strArr = str.split(" ");
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i].length > longestString.length) {
//       longestString = strArr[i];
//     }
//   }
//   console.log(longestString);
// };

// findLongestStr("The quick brown fox");

// //Rotate an Array  48==========================================
// // Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
// //Example:
// //Input: [1,2,3,4,5], k=2Output: [4,5,1,2,3]
// //Hint: Use slice and concat, or reverse the whole array then parts.

// const rotateArr = (arr, k) => {
//   const n = arr.length;
//   const firstDigits = arr.slice(0, n - k);
//   const lastDigits = arr.splice(n - k);
//   const resArr = lastDigits.concat(firstDigits);
//   return resArr;
// };

// console.log(rotateArr([1, 2, 3, 4, 5], 2));

//  Roman to Integer 49=========================================
// Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
// Example:
// Input: 'III'   → Output: 3Input: 'IX'    → Output: 9Input: 'LVIII' → Output: 58
// Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it.

// function romanToInt(s) {
//   const roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//     const current = roman[s[i]];
//     const next = roman[s[i + 1]];

//     if (current < next) {
//       result -= current;
//     } else {
//       result += current;
//     }
//   }

//   return result;
// }

// console.log(romanToInt("III"));
// console.log(romanToInt("IX"));

// // problem 50
// //Given a string, return the first character that appears only once in the string. If no such character exists, return null.

// function firstNonRepeatingChar(str) {
//   const freq = {};

//   for (let char of str) {
//     if (!freq[char]) {
//       freq[char] = 1;
//     } else {
//       freq[char]++;
//     }
//   }

//   for (let char of str) {
//     if (freq[char] === 1) {
//       return char;
//     }
//   }

//   return null;
// }

// console.log(firstNonRepeatingChar("leetcode"));

// //problem 51 ==================================================
// //Solve longest consecutive sequence problem
// function longestConsecutive(nums) {
//   const numSet = new Set(nums);
//   let longest = 0;

//   for (const num of numSet) {
//     if (!numSet.has(num - 1)) {
//       let currentNum = num;
//       let currentLength = 1;

//       while (numSet.has(currentNum + 1)) {
//         currentNum++;
//         currentLength++;
//       }

//       longest = Math.max(longest, currentLength);
//     }
//   }

//   return longest;
// }

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

// //problem 52 ===============================================
// //remove falsy values problem

// const removeFalsyValues = (arr) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

// console.log(removeFalsyValues([0, 1, false, 2, "", 3, null, "Hello"]));

// // //problem 53 ====================================================
// // //Add group words by length solution

// const groupWordsByLength = (arr) => {
//   const result = {};
//   for (let i = 0; i < arr.length; i++) {
//     const length = arr[i].length;
//     const word = arr[i];
//     if (!result[length]) {
//       result[length] = [word];
//     } else {
//       result[length].push(word);
//     }
//   }
//   console.log(result);
// };

// console.log(groupWordsByLength(["cat", "dog", "elephant", "sun", "moon"]));

// problem 54 =========================================================
// array of object grouping
// input
//  [
//   { name: "Ali", role: "Admin" },
//   { name: "Sara", role: "User" },
//   { name: "John", role: "Admin" },
//   { name: "Maya", role: "User" }
// ]
// output

// {
//   Admin: [
//     { name: "Ali", role: "Admin" },
//     { name: "John", role: "Admin" }
//   ],
//   User: [
//     { name: "Sara", role: "User" },
//     { name: "Maya", role: "User" }
//   ]
// }

// function groupByRole(arr) {
//   const result = {};

//   for (const user of arr) {
//     const role = user.role;

//     if (!result[role]) {
//       result[role] = [];
//     }

//     result[role].push(user);
//   }

//   return result;
// }

// console.log(
//   groupByRole([
//     { name: "Ali", role: "Admin" },
//     { name: "Sara", role: "User" },
//     { name: "John", role: "Admin" },
//     { name: "Maya", role: "User" },
//   ]),
// );

// //problem 55 =======================================================
// //grouping product category

// const groupingCategory = (param) => {
//   const result = {};

//   for (const item of param) {
//     if (!result[item.category]) {
//       result[item.category] = [];
//     }

//     result[item.category].push(item);
//   }

//   return result;
// };

// console.log(
//   groupingCategory([
//     { name: "Laptop", category: "Electronics" },
//     { name: "Phone", category: "Electronics" },
//     { name: "Apple", category: "Food" },
//     { name: "Milk", category: "Food" },
//     { name: "Shirt", category: "Clothing" },
//   ]),
// );

// problem 56 =======================================================
// Move All Zeros to the End

// const moveZeroToEnd = (param) => {
//   const zeros = [];
//   const numbers = [];
//   for (let i = 0; i < param.length; i++) {
//     if (param[i] === 0) {
//       zeros.push(param[i]);
//     } else {
//       numbers.push(param[i]);
//     }
//   }
//   return numbers.concat(zeros);
// };
// console.log(moveZeroToEnd([0, 1, 0, 3, 12]));

// problem 57 ==============================================
// Count Data Types

const countDataTypes = (param) => {
  const resObj = {};
  for (let i = 0; i < param.length; i++) {
    console.log();

    if (!resObj[typeof param[i]]) {
      resObj[typeof param[i]] = 1;
    } else {
      resObj[typeof param[i]] = resObj[typeof param[i]] + 1;
    }
  }
  return resObj;
};

console.log(countDataTypes([1, "hello", true, 5, "world", false, 10]));
