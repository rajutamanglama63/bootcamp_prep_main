// YOUR CODE BELOW
const arrayFlattener = (twoDimensionalArr) => {
  let oneDimensionalArr = [];

  for (let i = 0; i < twoDimensionalArr.length; i++) {
    if (Array.isArray(twoDimensionalArr[i])) {
      for (let j = 0; j < twoDimensionalArr[i].length; j++) {
        oneDimensionalArr.push(twoDimensionalArr[i][j]);
      }
    } else {
      oneDimensionalArr.push(twoDimensionalArr[i]);
    }
  }

  return oneDimensionalArr;
};

console.log(arrayFlattener([1, [2, 3], 4]));
