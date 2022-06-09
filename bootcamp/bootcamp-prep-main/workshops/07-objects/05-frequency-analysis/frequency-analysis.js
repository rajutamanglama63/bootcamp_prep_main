// YOUR CODE BELOW
function frequencyAnalysis(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let currentVal = str[i];
    if (currentVal in result) {
      result[currentVal]++;
    } else {
      result[currentVal] = 1;
    }
  }

  return result;
}
