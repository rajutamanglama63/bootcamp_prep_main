// YOUR CODE BELOW
const onlyOne = (a, b, c) => {
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
