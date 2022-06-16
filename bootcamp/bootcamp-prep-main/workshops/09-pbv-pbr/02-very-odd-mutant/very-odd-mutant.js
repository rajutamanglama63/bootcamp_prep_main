// YOUR CODE BELOW
function veryOddMutant(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = "normie";

      count++;
    }
  }

  return count;
}

console.log(veryOddMutant([1, 2, 3, 4, 5, 6, 7, 8]));
