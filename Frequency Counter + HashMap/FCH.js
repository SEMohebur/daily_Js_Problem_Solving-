// // 1-7 din ami Frequency Counter + HashMap pattern problem sikhbo
//  //console.log("FCH");

// // Frequency Counter 1======================================
// const counterlatterFrequency = (param) => {
//   const result = {};
//   const strArr = Array.from(param);

//   for (let i = 0; i < strArr.length; i++) {
//     if (!result[strArr[i]]) {
//       result[strArr[i]] = 1;
//     } else {
//       result[strArr[i]] = result[strArr[i]] + 1;
//     }
//   }
//   return result
// };

// counterlatterFrequency("javascriptssss");

// // number frequency counter 2===================================

// const numberFrequency = (param) => {
//   const result = {};
//   for (let i = 0; i < param.length; i++) {
//     if (!result[param[i]]) {
//       result[param[i]] = 1;
//     } else {
//       result[param[i]] = result[param[i]] + 1;
//     }
//   }
//   return result;
// };

// console.log(numberFrequency([1, 2, 3, 6, 2, 5, 8, 9, 4, 2, 8]));

// Find Duplicate Numbers 3====================================

// const FindDuplicateNumbers = (param) => {
//   const result = [];
//   for (let i = 0; i < param.length; i++) {
//     for (let j = i + 1; j < param.length; j++) {
//       if (param[i] == param[j]) {
//         result.push(param[j]);
//       }
//     }
//   }
//   return result;
// };

// console.log(FindDuplicateNumbers([2, 5, 4, 2, 4, 9, 7, 6, 3, 5, 6, 8, 7, 0]));

// //Two Sum / use normalFunction for practice perpes 4======================================================

// function towSum(arr, targetNum) {
//   const resArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == targetNum) {
//         resArr.push(arr.indexOf(arr[i]), arr.indexOf(arr[j]));
//       }
//     }
//   }
//   return resArr;
// }
// console.log(towSum([2, 7, 11, 15], 13));

// Majority Element 4=======================================
// ekti array te kon number ta besirbhag ache seta ber korte hobe

// // nijer moto kore but next eta refector korbo
// function findMejorirtNum(arr) {
//   let result = 0;
//   let numberLengt = 0;
//   const numbersStore = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         numbersStore.push(arr[i]);
//         if (numberLengt < numbersStore.length) {
//           numberLengt = numbersStore.length;
//           result = arr[i];
//         }
//       }
//     }
//   }
//   console.log(result);
// }

// // findMejorirtNum([2, 2, 1, 1, 1, 2, 2]); 5=====================================

// function findMejorityNum(arr) {
//   const freqObj = {};

//   for (let item of arr) {
//     if (!freqObj[item]) {
//       freqObj[item] = 1;
//     } else {
//       freqObj[item] = freqObj[item] + 1;
//     }
//   }

//   for (let key in freqObj) {
//     if (freqObj[key] > arr.length / 2) {
//       return Number(key);
//     }
//   }
// }

// console.log(findMejorityNum([2, 2, 1]));

// //find uniq numbers 6===========================================

// const findUniqElement = (arr) => {
//   const obj = {};
//   const uniqNumbers = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]] = obj[arr[i]] + 1;
//     }
//   }
//   for (let key in obj) {
//     if (obj[key] == 1) {
//       uniqNumbers.push(key);
//     }
//   }
//   if (uniqNumbers.length === 0) {
//     return "Not Found Uniq Number";
//   } else {
//     return uniqNumbers;
//   }
// };
// console.log(findUniqElement([1, 1, 4, 2, 2]));

// //Find First Repeating Element 7==========================================

// function findFirstRepetingEle(arr) {
//   const obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = 1;
//     } else {
//       return arr[i];
//     }
//   }

//   return null;
// }

// console.log(findFirstRepetingEle([10, 20, 30, 40, 20, 40, 10]));

// // Find First Non-Repeating Character 8===========================================
// const findFirstNonRepChar = (str) => {
//   const strArr = Array.from(str);
//   const obj = {};

//   for (let i = 0; i < strArr.length; i++) {
//     if (!obj[strArr[i]]) {
//       obj[strArr[i]] = 1;
//     } else {
//       obj[strArr[i]] = obj[strArr[i]] + 1;
//     }
//   }

//   for (let key in obj) {
//     if (obj[key] === 1) {
//       return key;
//     }
//   }

//   return null;
// };

// console.log(findFirstNonRepChar("aabbcdeff"));

// // FInd  Most Frequent Character. 9======================================
// const findMostFreqChar = (param) => {
//   const obj = {};

//   let charCounter = 0;
//   let result = "";
//   const strArr = Array.from(param);
//   for (let i = 0; i < strArr.length; i++) {
//     if (obj[strArr[i]]) {
//       obj[strArr[i]] = obj[strArr[i]] + 1;
//     } else {
//       obj[strArr[i]] = 1;
//     }
//   }

//   for (let key in obj) {
//     if (charCounter < obj[key]) {
//       charCounter = obj[key];
//       result = key;
//     }
//   }
//   if (result) {
//     return result;
//   } else {
//     return null;
//   }
// };

// console.log(findMostFreqChar("lojkgod"));

// // Find Missing Number Using HashMap 10======================================

// function findMissingNumber(arr) {
//   const map = {};

//   for (let num of arr) {
//     map[num] = true;
//   }

//   for (let i = 1; i <= arr.length + 1; i++) {
//     if (!map[i]) {
//       return i;
//     }
//   }
// }

// console.log(findMissingNumber([1, 2, 3, 4, 5, 6]));

// // Intersection Of Two Arrays 11==========================================

// arr1 = [1, 0, 2, 20, 3, 9];
// arr2 = [0, 20, 5, 3];

// const intersectionTwoArr = (arr1, arr2) => {
//   const set = new Set(arr2);
//   const res = [];

//   for (let num of arr1) {
//     if (set.has(num)) {
//       res.push(num);
//     }
//   }

//   return res;
// };

// console.log(intersectionTwoArr(arr1, arr2));

// // Difference Between Two Arrays 12======================================

// arr1 = [1, 2, 3, 4];
// arr2 = [2, 4, 6, 8];

// const defferenceTwoArr = (arr1, arr2) => {
//   const setArr1 = new Set(arr1);
//   const setArr2 = new Set(arr2);

//   const arr1Only = [];
//   const arr2Only = [];

//   for (let num of setArr1) {
//     if (!setArr2.has(num)) {
//       arr1Only.push(num);
//     }
//   }

//   for (let num of setArr2) {
//     if (!setArr1.has(num)) {
//       arr2Only.push(num);
//     }
//   }
//   return [arr1Only, arr2Only];
// };

// console.log(defferenceTwoArr(arr1, arr2));

// // Find All Duplicates In Array 13============================================
// function findDuplicates(nums) {
//   const freq = {};
//   const result = [];

//   for (let num of nums) {
//     freq[num] = (freq[num] || 0) + 1;
//   }

//   for (let key in freq) {
//     if (freq[key] > 1) {
//       result.push(Number(key));
//     }
//   }

//   return result;
// }

// console.log(findDuplicates([1, 5, 4, 6, 4, 8, 2, 4, 1, 6]));

// // Find Duplicate Characters 14========================================
// function findDuplicateCharacters(str) {
//   const freq = {};
//   const result = [];

//   for (let ch of str) {
//     freq[ch] = (freq[ch] || 0) + 1;
//   }

//   for (let ch in freq) {
//     if (freq[ch] > 1) {
//       result.push(ch);
//     }
//   }

//   return result;
// }

// console.log(findDuplicateCharacters("programming"));

// // Count Vowels Frequency 15=====================================
// function countVowelFrequency(str) {
//   const vowels = new Set(["a", "e", "i", "o", "u"]);
//   const freq = {};

//   for (let ch of str.toLowerCase()) {
//     if (vowels.has(ch)) {
//       freq[ch] = (freq[ch] || 0) + 1;
//     }
//   }

//   return freq;
// }

// console.log(countVowelFrequency("amar name mohebur"));

// // First Non-Repeating Character 16=================================
// function firstNonRepeatingChar(str) {
//   const freq = {};

//   for (let ch of str) {
//     freq[ch] = (freq[ch] || 0) + 1;
//   }

//   for (let ch of str) {
//     if (freq[ch] === 1) {
//       return ch;
//     }
//   }

//   return -1;
// }

// console.log(firstNonRepeatingChar("jhanduBulm"));

// Count Occurrences Of Target 17=================================

const countTargetNumber = (arr, targetNum) => {
  const countArr = [];
  arr.forEach((element) => {
    if (element === targetNum) {
      countArr.push(element);
    }
  });
  return countArr.length;
};

console.log(
  countTargetNumber([1, 5, 3, 6, 7, 4, 3, 4, 3, 5, 3, 5, 6, 2, 1, 8], 3),
);
