// YOUR CODE BELOW
const deeperCopy = (arr) => {
  result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);

    let innerArr = [];
    let currentVal = arr[i];

    if (currentVal === Array.isArray) {
      for (j = 0; j < currentVal.length; j++) {
        innerArr.push(currentVal[j]);
      }
    }
  }
  return result;
};

console.log(deeperCopy([1, 2, [3, 4]]));
