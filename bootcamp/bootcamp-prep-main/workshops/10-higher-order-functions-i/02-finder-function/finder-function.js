// YOUR CODE BELOW
function finderFunction(arr, callbackFunction) {
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];

    if (callbackFunction(currentVal)) {
      return i;
    }
  }

  return -1;
}

let numbers = [1, 3, 5, 64, 7, 12];
let odds = [9, 13, 15, 17];

function isEven(num) {
  return !(num % 2);
}

console.log(finderFunction(numbers, isEven));
// console.log(finderFunction(odds, isEven))
