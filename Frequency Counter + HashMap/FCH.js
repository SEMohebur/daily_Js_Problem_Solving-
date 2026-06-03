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

// Find First Non-Repeating Character 8===========================================
const findFirstNonRepChar = (str) => {
  const strArr = Array.from(str);
  const obj = {};

  for (let i = 0; i < strArr.length; i++) {
    if (!obj[strArr[i]]) {
      obj[strArr[i]] = 1;
    } else {
      obj[strArr[i]] = obj[strArr[i]] + 1;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }

  return null;
};

console.log(findFirstNonRepChar("aabbcdeff"));
