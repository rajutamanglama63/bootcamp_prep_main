// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx = 0) {
  for (let i = startIdx; i <= source.length - searchValue.length; i++) {
    let sliceString = source.slice(i, i + searchValue.length);
    if (sliceString === searchValue) {
      return i;
    }
  }
  return -1;
}
