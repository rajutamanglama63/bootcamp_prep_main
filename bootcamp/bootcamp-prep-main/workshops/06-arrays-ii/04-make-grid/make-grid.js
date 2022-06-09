// YOUR CODE BELOW
function makeGrid(numColumns, numRows) {
  let twoDimensionalArr = [];

  for (i = 0; i < numRows; i++) {
    let row = [];

    for (j = 0; j < numColumns; j++) {
      row.push(j + 1);
    }
    twoDimensionalArr.push(row);
  }

  return twoDimensionalArr;
}

console.log(makeGrid(2, 3));
