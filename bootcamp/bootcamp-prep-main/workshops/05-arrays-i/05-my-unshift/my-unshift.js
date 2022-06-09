// YOUR CODE BELOW
// function myUnshift(array, val) {
//   array.unshift(val);

//   return array;
// }

// console.log(myUnshift([2, 3, 4], 1));

function myUnshift(arr, val) {
  debugger;
  let newArr = [val];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

// console.log(myUnshift([1, 2, 3, 4], 0));
