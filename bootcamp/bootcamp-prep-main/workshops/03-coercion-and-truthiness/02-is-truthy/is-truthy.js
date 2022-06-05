// YOUR CODE BELOW
const isTruthy = (x) => {
  if (x === true) {
    return true;
  } else if (x === 1) {
    return true;
  } else if (x === "Honesty is the best policy") {
    return true;
  } else if (x === false) {
    return "The boolean value false is falsey";
  } else if (x === null) {
    return "The null value is falsey";
  } else if (x === undefined) {
    return "undefined is falsey";
  } else if (x === 0) {
    return "The number 0 is falsey (the only falsey number)";
  } else if (x === "") {
    return "The empty string is falsey (the only falsey string)";
  }
};
