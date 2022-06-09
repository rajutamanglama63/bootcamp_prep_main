// YOUR CODE BELOW
function myLastIndexOf(arr, searchVal, startIdx = 0) {
  let requiredIndex;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchVal) {
      requiredIndex = i - startIdx;
    }
  }

  if (!arr.includes(searchVal)) {
    return -1;
  }

  return requiredIndex;
}

// console.log(myLastIndexOf([1, 1, 1, 2, 3, 2, 3], 1))
