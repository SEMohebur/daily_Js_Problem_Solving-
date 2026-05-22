// //even odd /////////////////////////////////////////////////////
// const temp = 20;
// for (let i = 0; i <= temp; i++) {
//   if (i == 0) {
//     continue;
//   } else if (i % 2 == 0) {
//     console.log(i, "Even number");
//   } else {
//     console.log(i, "Odd Number");
//   }
// }

// //Leap year check /////////////////////////////////////////////////////

// const isLeapYear = (year) => {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(year, "Is leap year");
//   } else {
//     console.log(year, "Is not leap year");
//   }
// };

// isLeapYear(1900);

// Find largest between two numbers
// const findLargestNumber = (params) => {
//   let temp = params[0];
//   for (let i = 0; i < params.length; i++) {
//     if (temp < params[i]) {
//       temp = params[i];
//     }
//   }
//   return temp;
// };

// console.log(findLargestNumber([4, 2, 5, 2, 4, 8, 1, 9, 23, 64, 1]));

// const checkNumber = (number) => {
//   if (number > 0) {
//     return "Positive Number";
//   } else if (number < 0) {
//     return "Negative Number";
//   } else {
//     return "Zero";
//   }
// };

// console.log(checkNumber(10));

//find a longest string
const findLongestStr = (arr) => {
  let temp = "";

  for (let val of arr) {
    // trim diye age porer white spache delete kortechi
    let curentVal = val.trim();
    if (curentVal.length > temp.length) {
      temp = curentVal;
    }
  }
  return temp;
};

console.log(
  findLongestStr([
    "          sdsdsds      ",
    "mahir",
    "   mmmmm ",
    "caw",
    " mudassir",
  ]),
);
