// YOUR CODE BELOW
function mySlice(originalString, startIdx = 0, endIdx = originalString.length) {
  let stri = "";
  for (let i = startIdx; i < endIdx; i++) {
    stri += originalString[i];
  }
  return stri;
}
