// YOUR CODE BELOW
function mySplice(arr, startIndex, numOfElementToDel, val) {
  let requiredArr = [];
  let deletedNum = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === startIndex) {
  //     arr[numOfElementToDel] = val;
  //   }

  // }

  for (let i = 0; i < startIndex; i++) {
    requiredArr.push(arr[i]);
  }

  if (val) {
    requiredArr.push(val);
  }

  for (let j = startIndex; j < startIndex + numOfElementToDel; j++) {
    deletedNum.push(arr[j]);
  }

  for (let k = startIndex + numOfElementToDel; k < arr.length; k++) {
    requiredArr.push(arr[k]);
  }

  while (arr.length) {
    arr.pop();
  }

  for (let l = 0; l < requiredArr.length; l++) {
    arr.push(requiredArr[l]);
  }

  return deletedNum;
}

console.log(mySplice([1, 2, 3], 1, 1, "rock"));
