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

const checkEvenOdd = (param) => {
  if (param % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(checkEvenOdd(7));
