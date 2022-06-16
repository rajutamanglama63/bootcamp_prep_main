// YOUR CODE BELOW
const reverseArray = (arr) => {
  let newArr = [];

  while (arr.length) {
    newArr.push(arr.pop());
  }

  while (newArr.length) {
    arr.unshift(newArr.pop());
  }

  return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
