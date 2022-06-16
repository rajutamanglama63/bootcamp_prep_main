// YOUR CODE BELOW
function callCount() {
  let requiredNumber = 0;
  return function newFunction() {
    requiredNumber++;

    return requiredNumber;
  };
}
