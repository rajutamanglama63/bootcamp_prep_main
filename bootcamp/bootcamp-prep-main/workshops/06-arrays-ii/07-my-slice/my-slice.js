// YOUR CODE BELOW
function mySlice(originalArr, startIdx, endIdx) {
  let copyOfOriginalArr = [];

  if (startIdx === undefined) {
    startIdx = 0;
  } else if (startIdx < 0) {
    startIdx = originalArr.length + 1;
  }

  if (endIdx === undefined) {
    endIdx = originalArr.length;
  } else if (endIdx < 0) {
    endIdx = originalArr.length + 1;
  }

  for (let i = startIdx; i < endIdx; i++) {
    let element = originalArr[i];

    copyOfOriginalArr.push(element);
  }

  return copyOfOriginalArr;
}

console.log(mySlice([1, 2, 3], 1, 2));
