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

function towSum(arr, targetNum) {
  const resArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == targetNum) {
        resArr.push(arr.indexOf(arr[i]), arr.indexOf(arr[j]));
      }
    }
  }
  return resArr;
}
console.log(towSum([2, 7, 11, 15], 13));
