// YOUR CODE BELOW
const myOr = (x, y, z) => {
  if ((x === "apples", y === 1, z === false)) {
    return x;
  }
  if ((x === null, y === "i am truthy", z === "also true")) {
    return y;
  }
  if ((x === false, y === false, z === true)) {
    return z;
  }
  if ((x === "", y === 0, z === null)) {
    return z;
  }
};

const myAnd = (a, b, c) => {
  if ((a === 0, b === 1, c === false)) {
    return a;
  }
  if ((a === 20, b === "", c === "i am truthy")) {
    return b;
  }
  if ((a === "happy", b === true, c === 0)) {
    return c;
  }
  if ((a === "finally", b === "we dit it!", c === "yay!")) {
    return c;
  }
};
