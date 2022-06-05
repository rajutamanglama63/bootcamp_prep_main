// YOUR CODE BELOW
const howEqual = (x, y) => {
  if (x === y) {
    return "strictly";
  } else if (x == y) {
    //this will loosely check the operands
    return "loosely";
  } else if (x !== y) {
    return "not equal";
  }
};
