// //even odd ====================================================
// const temp = 20;
// for (let i = 0; i <= temp; i++) {
//   if (i == 0) {
//     continue;
//   } else if (i % 2 == 0) {
//     // console.log(i, "Even number");
//   } else {
//     // console.log(i, "Odd Number");
//   }
// }

// //Leap year check ====================================================
// const isLeapYear = (year) => {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     // console.log(year, "Is leap year");
//   } else {
//     // console.log(year, "Is not leap year");
//   }
// };

// isLeapYear(1900);

// //Find largest numbers ====================================================
// const findLargestNumber = (params) => {
//   let temp = params[0];
//   for (let i = 0; i < params.length; i++) {
//     if (temp < params[i]) {
//       temp = params[i];
//     }
//   }
//   return temp;
// };

// // console.log(findLargestNumber([4, 2, 5, 2, 4, 8, 1, 9, 23, 64, 1]));

// =========================================================================
// const checkNumber = (number) => {
//   if (number > 0) {
//     return "Positive Number";
//   } else if (number < 0) {
//     return "Negative Number";
//   } else {
//     return "Zero";
//   }
// };

// // console.log(checkNumber(10));

// //find a longest string  ====================================================
// const findLongestStr = (arr) => {
//   let temp = "";

//   for (let val of arr) {
//     // trim diye age porer white spache delete kortechi
//     let curentVal = val.trim();
//     if (curentVal.length > temp.length) {
//       temp = curentVal;
//     }
//   }
//   return temp;
// };

// // console.log(
// //   findLongestStr([
// //     "          sdsdsds      ",
// //     "mahir",
// //     "   mmmmm ",
// //     "caw",
// //     " mudassir",
// //   ]),
// // );

// //Check voting eligibility (18+)====================================================
// const votingCondition = (age) => {
//   if (age < 18) {
//     return "You are not eligible to vote.";
//   } else {
//     return "You are eligible to vote.";
//   }
// };

// // console.log(votingCondition(24));

// //Check if character is vowel or consonant ====================================================

// const vowelCheck = (str) => {
//   const vowels = ["a", "e", "i", "o", "u"];

//   let vowel = 0;
//   let consonant = 0;

//   const strArr = str.toLowerCase().split("");

//   for (let item of strArr) {
//     if (vowels.includes(item)) {
//       vowel++;
//     } else if (item >= "a" && item <= "z") {
//       consonant++;
//     }
//   }
//   return { vowel, consonant };
// };

// // console.log(vowelCheck("Omit  lll77777 232232aooooollllll hassan RIpon"));

// reverse string====================================================
// const reverseStr = (params) => {
//   const strArr = [];
//   const str = params.split("");
//   str.forEach((element) => {
//     strArr.unshift(element);
//   });
//   const finalStr = strArr.join("");

//   return finalStr;
// };

// // console.log(reverseStr("mohebur"));

// array star border added  ====================================================
// const stringStarBorder = (strArr) => {
//   let wall = "*".repeat(strArr[0].length + 2);
//   strArr.unshift(wall);
//   strArr.push(wall);

//   for (let i = 1; i < strArr.length - 1; i++) {
//     strArr[i] = "*".concat(strArr[i], "*");
//   }
//   return strArr;
// };
// //console.log(stringStarBorder(["moh", "cho", "law", "mew"]));

// // prime numbers sum ====================================================

// const sumOfPrimeNumbers = (num) => {
//   let totalPrime = 0;
//   for (let i = 2; i < num; i++) {
//     for (let j = 2; j < num; j++) {
//       if (i === j) {
//         totalPrime += i;
//       }
//       if (i % j === 0) {
//         break;
//       }
//     }
//   }
//   return totalPrime;
// };

// sumOfPrimeNumbers(7600)

// // // find dublicate number =========================================================
// const nums = [1, 2, 3, 4, 2, 5, 6, 1, 7, 3, 7];

// const findDublicateNumber = (params) => {
//   const arr = [];
//   for (let i = 0; i < params.length; i++) {
//     for (let j = i + 1; j < params.length; j++) {
//       if (params[i] === params[j] && !arr.includes(params[i])) {
//         arr.push(params[i]);
//       }
//     }
//   }
//   return arr;
// };

// // //find uniq value ===================================================================
// const nums = [1, 2, 5, 1, 1, 1, 1, 3, 4, 2, 5, 6, 1, 7, 3, 9, 9];
// const arr = [];
// const findSingleValue = (params) => {
//   for (let i = 0; i < params.length; i++) {
//     for (let j = i + 1; j < params.length; j++) {
//       if (params[i] !== params[j] && !arr.includes(params[j])) {
//         arr.push(params[j]);
//       }
//     }
//   }
//   return arr;
// };
// findSingleValue(nums)

// //find fizz buzz number ====================================================
// const fizBuzz = (temp) => {
//   for (let i = 1; i <= temp; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i, "FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log(i, "Fizz");
//     } else if (i % 5 === 0) {
//       console.log(i, "Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizBuzz(20);

// //find second largest nummber =============================================
// const nums = [10, 10, 40, 20, 50, 10, 30];

// const findsecondLargestNumber = (params) => {
//   const arr = [...params];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] < arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr[1];
// };

// console.log(findsecondLargestNumber(nums));

// //Average of Array =============================================

// const nums = [5, 3, 2, 3];

// const averageOfArray = (arr) => {
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total
// };

// averageOfArray(nums);

// // string palindrome =================================================
// const stringPalindrom = (param) => {
//   const store = [];
//   const strArr = param.replace(/\s/g, "").toLowerCase().split("");

//   for (let i = 0; i < strArr.length; i++) {
//     store.unshift(strArr[i]);
//   }
//   const result = store.join("");

//   if (strArr.join("") === result) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(stringPalindrom("lo L"));

// // Move All Zeroes [1,3,12,0,0]=====================================

// function moveAllZerro(param) {
//   const numArr = [];
//   const ZeroArr = [];

//   for (let i = 0; i < param.length; i++) {
//     if (param[i] == 0) {
//       ZeroArr.push(param[i]);
//     } else {
//       numArr.push(param[i]);
//     }
//   }
//   return numArr.concat(ZeroArr);
// }

// console.log(moveAllZerro([0, 1, 0, 8, 0, 6, 0, 3, 12]));

// // array of object findout highest salary employee ================================

// const staffs = [
//   { name: "Rahim", salary: 895000 },
//   { name: "Karim", salary: 4999990000 },
//   { name: "Hasan", salary: 3000000000 },
// ];

// const findHighestSelery = (param) => {
//   let staffSalery = 0;
//   let staffIndex = 0;

//   for (let i = 0; i < param.length; i++) {
//     if (staffSalery < param[i].salary) {
//       staffSalery = param[i].salary;
//       staffIndex = i;
//     }
//   }
//   return param[staffIndex];
// };

// console.log(findHighestSelery(staffs));

// // replace index value========================================================
// const replaceValue = (arr, replace) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr[i] = replace;
//     }
//   }
//   return arr;
// };

// console.log(replaceValue([2, 3, 1, 9, 0, 7, 0], 10));

const studentInfo = [
  { subJectName: "Bangla", marks: 98 },
  { subJectName: "English", marks: 88 },
  { subJectName: "Ict", marks: 86 },
  { subJectName: "Math", marks: 76 },
  { subJectName: "Practical", marks: 20 },
  { subJectName: "Geography ", marks: 67 },
];

const resultCheck = (studentInfo) => {
  let totalResult = 0;
  const faildSub = [];

  studentInfo.forEach((element) => {
    totalResult += element.marks;

    if (element.marks < 33) {
      faildSub.push(element);
    }
  });

  if (faildSub.length === 0) {
    return `Congratulation tumi All Subject pass korecho, tomar Total Marks: ${totalResult}`;
  } else {
    return `Sorry tumi ${faildSub.length} subject faild korecho, tomar total marks ${totalResult}`;
  }
};

console.log(resultCheck(studentInfo));
