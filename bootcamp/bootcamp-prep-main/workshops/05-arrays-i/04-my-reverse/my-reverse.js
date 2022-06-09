// YOUR CODE BELOW
function myReverse(arr) {
  let newArr = [];

  // for (let i = 0; i < arr.length; i++){
  //     newArr.unshift(arr[i]);
  // }

  for (let i = arr.length - 1; i >= 0; i--) {
    let currentArray = arr[i];

    newArr.push(currentArray);
  }

  return newArr;
}
