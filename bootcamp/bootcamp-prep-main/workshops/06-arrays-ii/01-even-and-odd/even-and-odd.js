// YOUR CODE BELOW
const evenAndOdd = (arr) => {
  let newArray = [];
  let innerArrWithEvenNum = [];
  let innerArrWithOddNum = [];
  debugger;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      innerArrWithEvenNum.push(arr[i]);
    } else {
      innerArrWithOddNum.push(arr[i]);
    }
  }
  newArray.push(innerArrWithEvenNum);
  newArray.push(innerArrWithOddNum);
  return newArray;
};

// console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));
