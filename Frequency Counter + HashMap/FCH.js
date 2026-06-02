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
//   console.log(result);
// };

// counterlatterFrequency("javascriptssss");

// // number frequency counter 2===================================

const numberFrequency = (param) => {
  const result = {};
  for (let i = 0; i < param.length; i++) {
    if (!result[param[i]]) {
      result[param[i]] = 1;
    } else {
      result[param[i]] = result[param[i]] + 1;
    }
  }
  console.log(result);
};

numberFrequency([1, 2, 3, 6, 2, 5, 8, 9, 4, 2, 8]);
