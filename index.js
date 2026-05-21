// //even odd
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

// //Leap year check

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, "Is leap year");
  } else {
    console.log(year, "Is not leap year");
  }
};

isLeapYear(1900);
