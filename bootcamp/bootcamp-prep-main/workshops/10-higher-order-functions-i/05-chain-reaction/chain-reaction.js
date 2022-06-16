// YOUR CODE BELOW
function chainReaction(startingVal, arr) {
  let returnVal0;
  let returnVal1;
  let returnVal2;

  funct1 = arr[0];
  returnVal0 = funct1(startingVal);

  funct2 = arr[1];
  returnVal1 = funct2(returnVal0);

  funct3 = arr[2];
  returnVal2 = funct3(returnVal1);

  return returnVal2;
}

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

chainReaction(0, [addTen, subtractFive, multiplyFive]); // => 25
chainReaction(0, [subtractFive, multiplyFive, addTen]);
