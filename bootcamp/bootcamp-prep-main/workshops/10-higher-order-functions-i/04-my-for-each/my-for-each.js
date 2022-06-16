// YOUR CODE BELOW
function myForEach(arr, callBackFunction) {
  for (i = 0; i < arr.length; i++) {
    callBackFunction(arr[i], i);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

myForEach([1, 2, 3], addToSum);
