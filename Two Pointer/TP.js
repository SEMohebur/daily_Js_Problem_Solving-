// //Two Pointer pattern sikhbo
// //console.log("TP");

// //problem 1===========================================
// //string reverse
// const reverseString = (str) => {
//   let arr = str.split("");

//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
//   }
//   return arr.join("");
// };

// console.log(reverseString("Hello"));

// //problem 2 ====================================
// // pelindrome

// const isPalindrome = (str) => {
//   const arr = str.toLowerCase().split("");
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     if (arr[left] !== arr[right]) {
//       return false;
//     } else {
//       return true;
//     }

//     left++;
//     right--;
//   }
// };

// console.log(isPalindrome("A man a plan a canal Panama"));

// // problem 3 =========================================
// //Reverse Array (In-place)

// const reverseArrInPlace = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }
//   return arr;
// };

// console.log(reverseArrInPlace([1, 2, 3, 4, 5]));

// // problem 4 =========================================

// //Move Negative Numbers Left

// const moveNegativeNumLeft = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     while (left < right && arr[left] < 0) {
//       left++;
//     }
//     while (left < right && arr[right] >= 0) {
//       right--;
//     }
//     if (left < right) {
//       let temp = arr[left];
//       arr[left] = arr[right];
//       arr[right] = temp;

//       left++;
//       right--;
//     }
//   }

//   return arr;
// };

// console.log(moveNegativeNumLeft([4, -1, 2, -8, 5, -3]));

// problem 5===============================

const moveOddLeft = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && arr[left] % 2 !== 0) {
      left++;
    }

    while (left < right && arr[right] % 2 === 0) {
      right--;
    }

    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
    }
  }

  return arr;
};

console.log(moveOddLeft([2, 5, 8, 1, 6, 3]));
