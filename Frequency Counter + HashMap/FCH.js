// // 1-7 soptaho ami Frequency Counter + HashMap pattern problem sikhbo
//  //console.log("FCH");

const counterlatterFrequency = (param) => {
  const result = {};
  const strArr = Array.from(param);

  for (let i = 0; i < strArr.length; i++) {
    if (!result[strArr[i]]) {
      result[strArr[i]] = 1;
    } else {
      result[strArr[i]] = result[strArr[i]] + 1;
    }
  }
  console.log(result);
};

counterlatterFrequency("javascriptssss");
