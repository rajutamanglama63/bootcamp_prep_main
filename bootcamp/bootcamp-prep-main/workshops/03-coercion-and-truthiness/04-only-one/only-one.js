// YOUR CODE BELOW
const onlyOne = (a, b, c) => {
  // && operater always executed from left to right that's why we are using
  // && operater instead of "or" operater i.e "||"

  // || this operater executed from right to left which is not convinent to
  // this problem therefore we are not using it here

  if (!!a && !b && !c) {
    return true;
  }
  if (!a && !!b && !c) {
    return true;
  }
  if (!a && !b && !!c) {
    return true;
  }

  return false;
};
