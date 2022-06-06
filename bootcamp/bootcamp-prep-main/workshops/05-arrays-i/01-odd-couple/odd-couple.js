// YOUR CODE BELOW
function oddCouple(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      newArray.push(array[i]);
    }

    if (newArray.length === 2) {
      break;
    }

    // newArray.push(number);
  }
  if (newArray.length === 0) {
    return newArray;
  }
  return newArray;
}

console.log(oddCouple([2, 3, 4]));
