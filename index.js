// even odd

const temp = 20;

for (let i = 0; i <= temp; i++) {
  if (i == 0) {
    continue;
  } else if (i % 2 == 0) {
    console.log(i, "Even number");
  } else {
    console.log(i, "Odd Number");
  }
}
