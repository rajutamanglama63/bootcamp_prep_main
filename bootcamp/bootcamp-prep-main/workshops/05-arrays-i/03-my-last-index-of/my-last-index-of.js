// YOUR CODE BELOW
function myLastIndexOf(arr, searchVal, startIdx) {
  for (let i = 1; i < arr.length; i++) {
    if (arr.indexOf(searchVal)) {
      return arr.indexOf(searchVal);
    } else {
      return -1;
    }
  }
}
