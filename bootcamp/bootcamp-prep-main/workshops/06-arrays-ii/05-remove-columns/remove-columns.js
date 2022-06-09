// YOUR CODE BELOW
// function removeColumns(originalGrid, numColums) {
//   debugger;
//   let newGrid = [];

//   for (i = 0; i < originalGrid.length; i++) {

//     for (j = 0; j < originalGrid[i].length; j++) {
//       let elementOforiginalGrid = originalGrid[i];

//       elementOforiginalGrid.splice(1, numColums);
//       newGrid.push(elementOforiginalGrid);
//     }
//     // newGrid.push(rows);
//   }

//   return newGrid;
// }

function removeColumns(originalGrid, numColumns) {
  //   let newGrid = [];

  for (let i = 0; i < originalGrid.length; i++) {
    for (let j = 0; j < numColumns; j++) {
      originalGrid[i].pop();
    }

    // newGrid.push(originalGrid);
  }

  return originalGrid;
}

console.log(
  removeColumns(
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    2
  )
);
