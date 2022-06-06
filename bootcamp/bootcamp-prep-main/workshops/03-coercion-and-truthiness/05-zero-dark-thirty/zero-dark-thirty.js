// YOUR CODE BELOW
const zeroDarkThirty = (x) => {
  let a = "";

  if (x === 0) {
    return NaN;
  }

  // converting number value of x into string explictly

  x = String(x);

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== "0") {
      a += x[i];
    }
  }
  a = Number(a);

  return a;
};
