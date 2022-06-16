// YOUR CODE BELOW
function veryOdd(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(veryOdd(allTheNums));
