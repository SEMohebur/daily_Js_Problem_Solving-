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

const isPalindrome = (str) => {
  const arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    } else {
      return true;
    }

    left++;
    right--;
  }
};

console.log(isPalindrome("111"));
